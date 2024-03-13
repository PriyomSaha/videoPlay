import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Grow,
  IconButton,
  Modal,
  Slide,
  TextField,
  Typography,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import { PiPasswordDuotone, PiPasswordFill } from "react-icons/pi";
import {
  FullScreenModalContainer,
  FullScreenModalContent,
} from "Assets/GlobalStyles";
import PasswordInput from "Assets/PasswordInput";
import { useSnackbarStore } from "Assets/StateManagement";
import axios from "axios";

function Signup({ setModalType }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassMatch, setIsPassMatch] = useState(true);

  // Accessing alert snackbar data from global state
  const setShowSnackbar = useSnackbarStore((state) => state.setShowSnackbar);
  const setSnackbarMessage = useSnackbarStore(
    (state) => state.setSnackbarMessage
  );
  const setSnackbarType = useSnackbarStore((state) => state.setSnackbarType);

  const signUpUrl =
    process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_SIGNUP_URL;

  const API_KEY = process.env.REACT_APP_API_KEY;

  const register = async () => {
    try {
      setIsPassMatch(true);
      setIsSubmitting(true);

      if (!userName || !password) {
        setShowSnackbar();
        setSnackbarType("error");
        setSnackbarMessage("Mandatory fields missing");
      } else if (password !== confirmPassword) {
        setIsPassMatch(false);
      } else {
        const requestBody = { username: userName, password: password };
        const requestHeader = {
          "X-API-Key": API_KEY,
        };
        const resp = await axios.post(signUpUrl, requestBody, {
          withCredentials: true,
          headers: requestHeader,
        });
        if (!resp.data.error) {
          setShowSnackbar();
          setSnackbarType("success");
          setSnackbarMessage(resp.data.message);
          setModalType("login");
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
      setConfirmPassword("");
    }
  };

  return (
    <>
      <Box sx={FullScreenModalContent}>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="User Name"
              variant="outlined"
              size="small"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: "-10px",
            }}
          >
            <PasswordInput
              password={password}
              setPassword={setPassword}
              label="New Password"
              needStrengthValidation={true}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "-20px",
            }}
          >
            <PasswordInput
              password={confirmPassword}
              setPassword={setConfirmPassword}
              label="Reenter New Password"
              needStrengthValidation={true}
            />
            {isPassMatch ? null : (
              <Typography color={"error"}>Passwords Not Matching</Typography>
            )}
          </Grid>
        </Grid>
        <Typography fontWeight={700} mt={1}>
          Note : Please remember your password and username.You will be asked to
          login everytime you visit the site.
        </Typography>
        {/* button */}
        <Box mt={2}>
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
                  Registering...
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
                    register();
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

export default Signup;
