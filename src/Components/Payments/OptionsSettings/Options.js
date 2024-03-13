import {
  Box,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "Assets/themes";
import React from "react";
import Cards from "./Cards";
import UPI from "./UPI";

function Options({ selectedValue, setSelectedValue }) {
  return (
    <Grid item sm={12} md={8}>
      <Box sx={{ py: 2, px: 3 }}>
        <Grid
          sx={{
            display: "flex", // Add display flex
            justifyContent: "space-between", // Add this to align items at both ends of the container
            alignItems: "center", // Align items vertically center
          }}
        >
          <Grid item md={12}>
            <Typography textAlign={"left"} fontWeight={600} fontSize={20}>
              Payment Options
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography
              textAlign={"right"}
              color={theme.palette.grey[600]}
              fontWeight={600}
              fontSize={20}
            >
              Secure Server
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            // padding: 1,
            mt: 2,
          }}
        >
          <Cards
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <UPI
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default Options;
