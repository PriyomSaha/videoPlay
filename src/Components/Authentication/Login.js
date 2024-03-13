import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import { FullScreenModalContent } from "Assets/GlobalStyles";
import PasswordInput from "Assets/PasswordInput";
import { useSnackbarStore } from "Assets/StateManagement";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Accessing alert snackbar data from global state
  const setShowSnackbar = useSnackbarStore((state) => state.setShowSnackbar);
  const setSnackbarMessage = useSnackbarStore(
    (state) => state.setSnackbarMessage
  );
  const setSnackbarType = useSnackbarStore((state) => state.setSnackbarType);

  const loginUrl =
    process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_LOGIN_URL;

  const API_KEY = process.env.REACT_APP_API_KEY;

  const navigate = useNavigate();

  const login = async () => {
    try {
      setIsSubmitting(true);
      if (!userName || !password) {
        setShowSnackbar();
        setSnackbarType("error");
        setSnackbarMessage("Mandatory fields missing");
      } else {
        const requestBody = { username: userName, password: password };
        const requestHeader = {
          "X-API-Key": API_KEY,
        };
        const resp = await axios.post(loginUrl, requestBody, {
          withCredentials: true,
          headers: requestHeader,
        });
        if (!resp.data.error) {
          setShowSnackbar();
          setSnackbarType("success");
          setSnackbarMessage(resp.data.message);
          navigate("/payment");
        } else {
          setShowSnackbar();
          setSnackbarType("error");
          setSnackbarMessage(resp.data.message);
        }
      }
    } catch (e) {
      setShowSnackbar();
      setSnackbarType("error");
      setSnackbarMessage("Some error occured!! Please try again.");
    } finally {
      setIsSubmitting(false);
      setUserName("");
      setPassword("");
    }
  };
  return (
    <>
      <Box sx={FullScreenModalContent}>
        <Grid
          container
          spacing={0.2}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="User Name*"
              variant="outlined"
              size="small"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput
              password={password}
              setPassword={setPassword}
              label="Password"
              needStrengthValidation={false}
            />
          </Grid>
        </Grid>
        {/* button */}
        <Box mt={4}>
          <>
            {/* Horizontal line for visual separation */}
            <hr />
            {/* Container for the Update buttons */}
            <Box mt={1}>
              {isSubmitting ? (
                // Display progress indicator while submitting
                <Button
                  disabled
                  variant="contained"
                  sx={{
                    float: "right",
                    position: "relative",
                  }}
                >
                  Accessing...
                  <CircularProgress
                    size={20}
                    sx={{
                      color: "var(--header-nav-text)",
                      ml: 2,
                    }}
                  />
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    float: "right",
                    position: "relative",
                  }}
                  // Click event handler to handle the "Update" action
                  onClick={(e) => {
                    login();
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Access&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;
                </Button>
              )}
            </Box>
          </>
        </Box>
      </Box>
    </>
  );
}

export default Login;
