import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import EmailInput from "Assets/EmailInput";
import { FullScreenModalContent } from "Assets/GlobalStyles";
import PasswordInput from "Assets/PasswordInput";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

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
              label="User Name"
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
                    navigate("/payment");
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
