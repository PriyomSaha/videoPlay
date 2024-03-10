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
              label="Full Name"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <EmailInput email={email} setEmail={setEmail} />
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: "5px" }} spacing={2}>
          <Grid item xs={12}>
            <Countries country={country} setCountry={setCountry} />
          </Grid>
          <Grid item xs={12}>
            <PhoneInput
              country={country.toLowerCase()}
              enableSearch={true}
              countryCodeEditable={false}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              placeHolder="Enter the phone number"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} display="flex" justifyContent="center">
          <Grid
            item
            xs={12}
            sx={{
              mt: "5px",
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
