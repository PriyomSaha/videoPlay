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
import EmailInput from "Assets/EmailInput";
import Countries from "Assets/Countries";
import PhoneInput from "react-phone-input-2";
import PasswordInput from "Assets/PasswordInput";

function Signup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("IN");

  const [userName, setUserName] = useState("");

  const [newpassword, setNewPassword] = useState("");
  const [confirmNewpassword, setConfirmNewPassword] = useState("");
  const [isPassMatch, setIsPassMatch] = useState(true);

  const matches = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
              password={newpassword}
              setPassword={setNewPassword}
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
              password={confirmNewpassword}
              setPassword={setConfirmNewPassword}
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
                    // setIsEditProfile();
                    // handleSubmit(e);
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
