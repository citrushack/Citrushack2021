import { useEffect } from "react";

import Container, { siteTitle } from "../components/Container";
import CopyToClipboard from "../components/CopyToClipboard.tsx";

import styles from "../styles/Common.module.css";
import accountStyles from "../styles/Account.module.css";

import { Form, Field } from "react-final-form";

import { Typography, Grid, Button, CssBaseline, Box } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { motion } from "framer-motion";

import { Alert, AlertTitle } from "@material-ui/lab";
import { TextField } from "mui-rff";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  joinGroup,
  generateGroup,
  leaveGroup,
  refreshGroup,
  selectError,
  selectisFetching,
  selectGroup,
  selectStatusInfo,
  refreshStatus,
} from "../lib/slices/accountSlice";
import { useRouter } from "next/router";
import { useAuthUser } from "react-auth-kit";
import { pageVariants } from "../lib/animations";

function getStatus(appstatus) {
  if (appstatus === undefined)
    return <span style={{ color: "rgb(255, 143, 143)" }}>Pending </span>;
  if (appstatus === false)
    return <span style={{ color: "rgb(255, 143, 143)" }}>Denied </span>;
  if (appstatus === true)
    return (<>
      <span
        style={{
          textDecoration: 'underline rgb(150 , 255, 150)',
          'text-decoration-thickness': '2.5px',
          letterSpacing: '.2px',
        }}
      >
        Accepted!{" "}<br></br>
      </span>
            <div>
            Make sure to RSVP <a         style={{
          textDecoration: 'underline rgb(150 , 255, 150)',
          'text-decoration-thickness': '2.5px',
          letterSpacing: '.2px',
        }} href="https://docs.google.com/forms/d/e/1FAIpQLSd1_cvby66HsC_czULzuw-TawrbGPsrBFqQChKBG4hsAf5vog/viewform">
                    here!
                  </a></div>
                  <div>
            And join our discord <a         style={{
          textDecoration: 'underline rgb(150 , 255, 150)',
          'text-decoration-thickness': '2.5px',
          letterSpacing: '.2px',
        }} href="https://discord.com/invite/mh4aTbVf8Z">
                    here!
                  </a></div></>
    );
}
const validate = (values) => {
  const errors = {};
  if (!values.groupCode) {
    errors.groupCode = "Invalid code";
  }
  return errors;
};
export default function Account() {
  const matches = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const authU = useAuthUser();
  const errormsg = useSelector(selectError);
  // const errormsg = '';

  const groupInfo = useSelector(selectGroup);
  // const groupInfo = {
    // payload: null
  // };


  const isFetching = useSelector(selectisFetching);
  // const isFetching = false;

  const statusPayload = useSelector(selectStatusInfo);
  // const statusPayload = {
  // payload: {status:true}};

  const groupExists = !!groupInfo.payload;
  const router = useRouter();
  const user = authU();
  // const user = {firstname: 'testing'};
  useEffect(() => {
    dispatch(refreshGroup());
    dispatch(refreshStatus());
  }, []);

  useEffect(() => {
    if (user) {
      if (!user.appComplete) {
        router.push("/apply");
      }
    } else {
      router.push("/");
    }
  }, [user]);

  if (!user) {
    return (
      <Container main>
        <main
        className={`${styles.main} ${accountStyles.container}`}
        id="accountContainer"
        >
         <h1>Loading...</h1>
        </main>
      </Container>
    );
  }

  const onSubmit = (values) => {
    dispatch(joinGroup(values));
  };

  return ( 
    <Container main>
      <CssBaseline />
      <main
        className={`${styles.main} ${accountStyles.container}`}
        id="accountContainer"
      >
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          style={{
            marginBottom: "2em",
            backgroundColor: "#f8f8f8",
            borderRadius: '20px',
            boxShadow: '0px 0px 20px 1px #e6e5e5',
          }}
          variants={pageVariants}
          transition={{
            duration: 4,
            ease: [0.43, 0.13, 0.23, 0.96],
            staggerChildren: 0.5,
          }}
        >
          <motion.div
            whileHover={{
              x: 5,
            }}
            transition={{ duration: 4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="scaleDiv"
          >
            <h1 style={{ textAlign: "center", fontSize : '1.3em' }}>
              Application status:{" "}
              {statusPayload.payload
                ? getStatus(statusPayload.payload.status)
                : "Loading..."}
            </h1>
          </motion.div>
          <motion.div
            initial="initial"
            whileHover={{
              x: 1,
            }}
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="mainCard accTable"
          >
            <CssBaseline />
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12}></Grid>
              <Typography
                style={{
                  fontSize: "1.3em",
                  fontWeight: 400,
                  padding: "2rem",
                }}
                align="left"
                variant="h5"
                component="h1"
              >
                You're all set, {user.firstname}!<br></br>
                <br></br>
                Check back another time to see your status, or create a group
                below if you're hacking with a friend.
                <br></br>
                {/* Join our <a href="https://discord.gg/Ewxh57G">
                  discord server
                </a>{" "}
                for more updates! */}
              </Typography>
            </Grid>
          </motion.div>
          {errormsg !== "" && (
            <Alert severity="error">
              <AlertTitle>{errormsg}</AlertTitle>
            </Alert>
          )}
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            whileHover={{
              x: 4,
            }}
            transition={{ duration: 4, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="groupCard"
            style={{ padding: "2em", backgroundColor: "#eaeaea" }}
          >
            <Box textAlign="center">
              <Typography variant="h6" component="h1" gutterBottom>
                Remember, the max group size is 4.
              </Typography>
              <Typography variant="h6" component="h1" gutterBottom>
                {!groupExists
                  ? "Looks like you're not in a group"
                  : "Your group code"}{" "}
              </Typography>
              <Typography
                variant="h3"
                align="center"
                component="h1"
                gutterBottom
                style={{fontSize: '1.9rem'}}
              >
                {groupInfo && groupInfo.payload && groupInfo.payload.uid}
              </Typography>
              {groupExists ? (
                <CopyToClipboard>
                  {({ copy }) => (
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        background: "rgb(76, 211, 252, .65)",
                        color: "black",
                        // boxShadow: '3px 3px 0px -1px rgba(0, 0, 0, 0.45)',
                        border: "1px solid black",
                      }}
                      onClick={() => copy(groupInfo?.payload?.uid)}
                    >
                      Copy
                    </Button>
                  )}
                </CopyToClipboard>
              ) : (
                <Button
                  variant="contained"
                  style={{
                    background: "rgb(54 222 123 / 71%)",
                    color: "black",
                    // boxShadow: '3px 3px 0px -1px rgba(0, 0, 0, 0.45)',
                    border: "1px solid black",
                  }}
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(generateGroup());
                  }}
                  disabled={isFetching}
                >
                  Create Group
                </Button>
              )}
              {!groupExists && (
                <Typography
                  style={{ marginTop: "1em" }}
                  variant="h4"
                  component="h1"
                  gutterBottom
                >
                  OR
                </Typography>
              )}
              {!groupExists && (
                <Form
                  onSubmit={onSubmit}
                  validate={validate}
                  render={({
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit} noValidate>
                      <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={{
                          duration: 1.85,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        }}
                        className="joinGroup"
                      >
                        <Typography
                          variant="h6"
                          component="h1"
                          style={{ marginBottom: "1.5em" }}
                          gutterBottom
                        >
                          Join an existing group
                        </Typography>

                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          spacing={2}
                        >
                          <Grid item xs={12}>
                            <TextField
                              label="Group Code"
                              name="groupCode"
                              margin="none"
                              required={true}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid item style={{ marginTop: 16 }}></Grid>
                          <Grid
                            item
                            xs={matches ? 3 : 12}
                            style={{ marginTop: 16 }}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              style={{
                                width: "100%",
                                background: "rgb(141 231 247)",
                                border: "1px solid black",
                                color:'black',
                              }}
                              disabled={isFetching}
                            >
                              Join
                            </Button>
                          </Grid>
                        </Grid>
                      </motion.div>
                    </form>
                  )}
                />
              )}
            </Box>
          </motion.div>
          {groupExists && (
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="joinGroup"
              whileHover={{
                x: 2,
              }}
              style={{ padding: "2em", backgroundColor: "#d8edbb" }}
            >
              <Grid container alignItems="center" justify="center" spacing={2}>
                <Typography variant="h5" component="h1" gutterBottom>
                  Group members
                </Typography>
                <Grid item xs={12}>
                  <Box
                    style={{
                      ...(matches ? { width: "70%" } : { width: "100%" }),
                      margin: "auto",
                    }}
                  >
                    <Table style={{ marginBottom: "2em" }}>
                      <TableBody>
                        {groupInfo &&
                          groupInfo.payload &&
                          groupInfo.payload.users &&
                          Object.entries(groupInfo.payload.users).map(
                            ([key, value], idx) =>
                              value && (
                                <TableRow key={idx}>
                                  <TableCell>
                                    <strong>{parseInt(key) + 1}</strong>
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      maxWidth: "9em",
                                      textAlign: "right",
                                    }}
                                  >
                                    {`${value.firstname} ${value.lastname}`}{" "}
                                  </TableCell>
                                </TableRow>
                              )
                          )}
                      </TableBody>
                    </Table>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ background: "rgba(0, 0, 0, .69)" }}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(joinGroup({ groupCode: "none" }));
                      }}
                      disabled={isFetching}
                    >
                      Leave Group
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(refreshGroup());
                        dispatch(refreshStatus());
                      }}
                      disabled={isFetching}
                    >
                      Refresh
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          )}
        </motion.div>
      </main>
    </Container>
  );
}
