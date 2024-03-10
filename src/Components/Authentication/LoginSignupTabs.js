import { Box, Button } from "@mui/material";
import React from "react";

function LoginSignupTabs({ modalType, setModalType }) {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
        <Button
          variant={modalType === "signup" ? "contained-dark" : "outlined-dark"}
          sx={{ mr: 1 }}
          onClick={() => setModalType("signup")}
        >
          Sign Up
        </Button>
        <Button
          variant={modalType === "login" ? "contained-dark" : "outlined-dark"}
          onClick={() => setModalType("login")}
        >
          Log In
        </Button>
      </Box>
    </>
  );
}

export default LoginSignupTabs;
