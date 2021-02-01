import { createSlice } from "@reduxjs/toolkit";
import request from "../request";

const applySlice = createSlice({
  name: "apply",
  initialState: {
    value: 0,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    submit: (state, action) => {
      state.postData.payload = action.payload;
      state.isFetching = true;
    },
    submitFailed: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    submitSucc: (state) => {
      state.isFetching = false;
    },
  },
});

/**
 * Extract error from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current error
 */
export const selectError = (state) => state.apply.error;

export const { submit, submitFailed, submitSucc } = applySlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const submitAsync = (payload) => (dispatch) => {
  waitForPromise(payload, dispatch);
};

function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

async function waitForPromise(payload, dispatch) {
  let { resume, history, signIn, authToken, authState, ...body } = payload;
  body = renameKeys({'count': 'country'});
   
  console.log(body);
  const requestURL = "https://cms.citrushack.com/users/updateme";
  try {
    let response = await request(requestURL, {
      method: "PUT",
      body,
    });

    signIn({
      token: authToken,
      expiresIn: 10080,
      tokenType: "Bearer",
      authState: Object.assign(authState, response),
    });

    if (resume) {
      await sendResume(resume, response.id, authToken);
    }
    dispatch(submitSucc());


    history("/account");
  } catch (error) {
    dispatch(
      submitFailed({
        message: getMessage(error) || JSON.stringify(error),
      })
    );
  }
}

function getMessage(rec) {
  if (rec.message) return rec.message;
  return getKey(rec[Object.keys(rec)[0]]);
}
function sendResume(data, refId, token) {
  let options = { method: "POST" };

  options.headers = Object.assign(
    {
      Authorization: `Bearer ${token}`,
    },
    options.headers
  );

  data.append("refId", refId);
  data.append("ref", "user");
  data.append("source", "users-permissions");
  data.append("field", "resume");
  options.body = data;
  return fetch("https://cms.citrushack.com/upload", options);
}

export default applySlice.reducer;
