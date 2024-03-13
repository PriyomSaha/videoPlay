import { Box, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Box py={2}>
      <Typography
        textAlign={"center"}
        variant="h5"
        fontWeight={700}
        letterSpacing={2}
      >
        Payment method
      </Typography>
      <Typography textAlign={"center"} fontWeight={700} color={"#D10001"}>
        Choose a payment option and fill in the requested information
      </Typography>
    </Box>
  );
}

export default Header;
