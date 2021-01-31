import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Container, { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";
import { Form, Field } from "react-final-form";
import {
  Typography,
  Box,
  Link,
  Grid,
  Card,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Alert, AlertTitle, createFilterOptions } from "@material-ui/lab";
import { TextField, Autocomplete, DatePicker } from "mui-rff";
import { countries, genders, majors, unis } from "../data/data";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dropzone from "../components/Dropzone";
import { useDispatch, useSelector } from "react-redux";
import { submitAsync, selectError } from "../lib/slices/applySlice";
import { useRouter } from "next/router";
import { useSignIn, useAuthUser } from "react-auth-kit";
import css from "../styles/Apply.module.css";


const filter = createFilterOptions();

const checkIn = [
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Address Line 1"
        name="addr1"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Address Line 2"
        name="addr2"
        margin="none"
        required={false}
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="Country"
        name="country"
        required={true}
        options={countries}
        getOptionValue={(option) => option.code}
        getOptionLabel={(option) => option.label}
        disableCloseOnSelect={true}
        renderOption={(option) => (
          <React.Fragment>
            <span>{countryToFlag(option.code)} </span>
            &nbsp; {option.label} ({option.code})
          </React.Fragment>
        )}
        selectOnFocus
        autoHighlight
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="City"
        name="city"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="State"
        name="state"
        margin="none"
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Zip"
        name="zip"
        margin="none"
        required={true}
      />
    ),
  },
];
const demoInfo = [
  {
    size: 6,
    field: (
      <TextField
        variant="outlined"
        label="First name"
        name="firstname"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 6,
    field: (
      <TextField
        variant="outlined"
        label="Last name"
        name="lastname"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="Gender"
        name="gender"
        required={true}
        options={genders}
        getOptionValue={(option) => option.value}
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <React.Fragment>{option.label}</React.Fragment>
        )}
        selectOnFocus
        autoHighlight
        autoSelect
        handleHomeEndKeys
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="School"
        name="school"
        required={true}
        options={unis}
        freeSolo
        getOptionValue={option => `${option}`}
        getOptionLabel={option => `${option}`}
        renderOption={option => option}
        disableCloseOnSelect={false}
        onChange={(_event, newValue, reason, details) => {
          if (newValue && reason === 'select-option' && details?.option) {
            // Create a new value from the user input
            unis.push(
              details?.option.uni,
            );
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          //console.log(filtered);
          // Suggest the creation of a new value
          if (params.inputValue.trim().length) {
            filtered.push(
            params.inputValue,
            );
          }
          return filtered;
        }}
        selectOnFocus
        autoHighlight
        autoSelect
        handleHomeEndKeys
        clearOnBlur
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
      label="Major"
      name="major"
      required={true}
      options={majors}
      getOptionValue={(option) => option.major}
      getOptionLabel={(option) => option.major}
      renderOption={(option) => (
        <React.Fragment>{option.major}</React.Fragment>
      )}
      selectOnFocus
      autoHighlight
      autoSelect
      handleHomeEndKeys/>
    ),
  },
  {
    size: 12,
    field: (
        <DatePicker
          variant="inline"
          openTo="year"
          views={["year", "month"]}
          label="Expected Graduation"
          helperText="Start from year selection"
          name="year"
          dateFunsUtils={DateFnsUtils}
          required={true} 
        />
    ),
  },
];
const hackerInfo = [
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Github profile link"
        name="github"
        margin="none"
        required={false}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Linkedin profile link"
        name="linkedin"
        margin="none"
        required={false}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Anything you'd like to add?"
        multiline
        name="extra"
        margin="none"
        required={false}
      />
    ),
  },
];

//Country code to emoji helper function
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

//Form validation functions
const validate = (values) => {
  console.log(values);
  var errors = {};
  if (values.github && !validateGithub(values.github)) {
    errors.github = "Invalid url";
  }
  if (values.linkedin && !validateLinkedin(values.linkedin)) {
    errors.linkedin = "Invalid url";
  }
  if (!values.year) {
    errors.year = "Required";
  } 
  if (!values["addr1"]) errors["addr1"] = "Required";
  if (!values.resume) errors.resume = "Resume upload required";
  if (!values.country) errors.country = "Required";
  if (!values.city) errors.city = "Required";
  if (!values.state) errors.state = "Required";
  if (!values.zip) errors.zip = "Required";
  if (!values.firstname) errors.firstname = "Required";
  if (!values.lastname) errors.lastname = "Required";
  if (!values.school) errors.school = "Required";
  if (!values.major) errors.major = "Required";
  if (!values.gender) errors.gender = "Required";
  return errors;
};
function validateLinkedin(url) {
  const re = /(https?:\/\/(.+?\.)?linkedin\.com(\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?)/;
  return re.test(url);
}
function validateGithub(url) {
  const re = /(https?:\/\/(.+?\.)?github\.com(\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?)/;
  return re.test(url);
}
function validateYear(year) {
  const re = /^(19|20)\d{2}$/;
  return re.test(year);
}

const initialValues = {};

export default function Apply() {
  const matches = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const signIn = useSignIn();
  const authU = useAuthUser();
  const router = useRouter();
  const errormsg = useSelector(selectError);
  const user = authU();
  console.log(errormsg);

  // Redirect non authenticated or already finished users
  // useEffect(() => {
  //   if (user) {
  //     if (user.appComplete) {
  //       router.push("/account");
  //     }
  //   } else {
  //     router.push("/");
  //   }
  // }, [user]);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(
      submitAsync({
        ...values,
        history: router.push,
        signIn: signIn,
        authToken: Cookies.get("_auth_token"),
        authState: JSON.parse(Cookies.get("_auth_state") || "{}"),
      })
    );
  };

  return (
    <Container main>
      <CssBaseline />
      <main className={css.main}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            errors,
            submitFailed,
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item>
                  <Box style={{ marginTop: 16 }}>
                    <h2>Check-in</h2>
                    <Typography>
                      {" "}
                      We only need this to distribute prizes, we won't share
                      your address with anyone.
                    </Typography>
                  </Box>
                </Grid>
                {checkIn.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item xs={12} style={{ marginTop: 16 }}>
                  <h2>Demographics</h2>
                  <Typography> Tell us more about yourself.</Typography>
                </Grid>
                {demoInfo.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16, marginBottom: 20 }}>
                  <h2>Hacker app</h2>
                  <Typography> We want to learn more about you. </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card
                    raised={true}
                    style={{ padding: 16, backgroundColor: "#f7f7f7" }}
                  >
                    <Field required={false} name="resume">
                      {(props) => <Dropzone {...props.input} />}
                    </Field>
                  </Card>
                  {submitFailed && errors.resume && (
                    <>
                      <br></br>
                      <Alert severity="error">
                        <AlertTitle>{errors.resume}</AlertTitle>
                      </Alert>
                    </>
                  )}{" "}
                </Grid>
                {hackerInfo.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={matches ? 12 : 12}
                    style={{
                      marginTop: 16,
                    }}
                  >
                    {errormsg && (
                      <Alert severity="error">
                        <AlertTitle>Error: {errormsg}</AlertTitle>
                      </Alert>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      disabled={false /*isFetching*/}
                      style={{
                        width: "100%",
                        background: "#9be36d",
                        color: "black",
                        marginTop: "24px",
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </main>
    </Container>
  );
}
