import { createSlice } from "@reduxjs/toolkit";
import request from "../request";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    error: "",
    postData: {},
    isFetching: false,
    groupInfo: {},
    statusInfo: {},
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    startFetching(state, action) {
      state.isFetching = true;
    },
    joinGroupFailed(state, action) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    joinGroupSucc(state, action) {
      state.error = "";
      state.isFetching = false;
      state.groupInfo.payload = action.payload;
    },
    leaveGroupFail(state, action) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    leaveGroupSucc(state) {
      state.groupInfo.payload = null;
      state.error = "";
      state.isFetching = false;
    },
    generateCodeFail(state, action) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    generateCodeSucc(state, action) {
      state.groupInfo.payload = action.payload;
      state.error = "";
      state.isFetching = false;
    },

    refreshGroupFail(state, action) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    refreshGroupSucc(state, action) {
      state.groupInfo.payload = action.payload;
      state.error = "";
      state.isFetching = false;
    },
    clearGroupInfo(state) {
      state.groupInfo.payload = null;
      state.isFetching = false;
    },
    refreshStatusFail(state, action) {
      state.isFetching = false;
      state.error = action.payload.message;
    },
    refreshStatusSucc(state, action) {
      state.statusInfo.payload = action.payload;
      state.error = "";
      state.isFetching = false;
    },
  },
});

export const selectAccount = (state) => state.account;

export const selectError = (state) => state.account.error;

export const selectisFetching = (state) => state.account.isFetching;

export const selectStatusInfo = (state) => state.account.statusInfo;

export const selectGroup = (state) => state.account.groupInfo;

export const {
  submit,
  submitFailed,
  submitSucc,
  startFetching,
  joinGroupFailed,
  joinGroupSucc,
  leaveGroupFail,
  leaveGroupSucc,
  generateCodeFail,
  generateCodeSucc,
  refreshGroupFail,
  refreshGroupSucc,
  clearGroupInfo,
  refreshStatusFail,
  refreshStatusSucc,
} = accountSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const joinGroup = (payload) => (dispatch) => {
  joinGroupPromise(payload, dispatch);
};

export const leaveGroup = (payload) => (dispatch) => {
  joinGroupPromise({ groupCode: "none" }, dispatch);
};

export const generateGroup = (payload) => (dispatch) => {
  generateGroupPromise(payload, dispatch);
};

export const refreshGroup = (payload) => (dispatch) => {
  refreshPromise(payload, dispatch);
};
export const refreshStatus = (payload) => (dispatch) => {
  refreshStatusPromise(payload, dispatch);
};

async function joinGroupPromise(payload, dispatch) {
  try {
    //Generate request body from payload
    const body = {
      group: payload.groupCode,
    };

    const requestURL = "http://localhost:1337/users/updateme";
    //console.log(body);
    dispatch(startFetching());
    const response = await request(requestURL, {
      method: "PUT",
      body,
    });
    console.log(response);
    if (payload.groupCode == "none") {
      dispatch(leaveGroupSucc());
    } else {
      dispatch(joinGroupSucc(response));
    }
  } catch (error) {
    //console.log(error.message[0].messages[0].message);
    console.log(error);
    dispatch(
      joinGroupFailed({
        message: JSON.stringify(getMessage(error)),
      })
    );
  }
}

function getMessage(rec) {
  if (rec.message) return rec.message;
  return getKey(rec[Object.keys(rec)[0]]);
}

async function generateGroupPromise(payload, dispatch) {
  try {
    const requestURL = "http://localhost:1337/groups";
    //Request auth
    dispatch(startFetching());
    const response = await request(requestURL, {
      method: "POST",
    });
    //console.log(response);
    dispatch(generateCodeSucc(response));
  } catch (error) {
    //console.log(error.message[0].messages[0].message);

    dispatch(
      generateCodeFail({
        message: JSON.stringify(error),
      })
    );
  }
}

async function refreshPromise(payload, dispatch) {
  try {
    const requestURL = "http://localhost:1337/users/getmygroup";
    dispatch(startFetching());
    const response = await request(requestURL, {
      method: "GET",
    });
    //console.log(response);
    // yield call(auth.set, response, 'groupInfo', true);
    dispatch(refreshGroupSucc(response));
  } catch (error) {
    //console.log(error.message[0].messages[0].message);
    if (error.response?.payload?.message === "UserNotInGroup") {
      dispatch(clearGroupInfo());
    } else {
      dispatch(
        refreshGroupFail({
          message: JSON.stringify(error | "{}"),
        })
      );
    }
  }
}

async function refreshStatusPromise(payload, dispatch) {
  try {
    const requestURL = "http://localhost:1337/users/getmystatus";
    dispatch(startFetching());
    const response = await request(requestURL, {
      method: "GET",
    });
    console.log(response);
    // yield call(auth.set, response, 'groupInfo', true);
    dispatch(refreshStatusSucc(response));
  } catch (error) {
    //console.log(error.message[0].messages[0].message);
    dispatch(
      refreshStatusFail({
        message: JSON.stringify(error),
      })
    );
  }
}

export default accountSlice.reducer;
