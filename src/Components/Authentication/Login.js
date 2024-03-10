import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import EmailInput from "Assets/EmailInput";
import { FullScreenModalContent } from "Assets/GlobalStyles";
import PasswordInput from "Assets/PasswordInput";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            <EmailInput email={email} setEmail={setEmail} />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput
              password={password}
              setPassword={setPassword}
              label="New Password"
              needStrengthValidation={true}
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
                    // setIsEditProfile();
                    // handleSubmit(e);
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
