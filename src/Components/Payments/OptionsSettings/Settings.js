import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "Assets/themes";
import { useNavigate } from "react-router-dom";

function Settings() {
  const matchesSmall = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  return (
    <Grid item md={4} sm={12} xs={12}>
      <Box
        sx={{
          width: "100%",
          background: "#D10001",
          color: "white",
          height: "100%",
          borderTopRightRadius: matchesSmall ? "30px" : "0px",
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: matchesSmall ? "0px" : "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            px: 3,
            pt: 2,
            pb: 1,
            borderBottom: "1px dashed white",
          }}
        >
          <Typography textAlign={"center"} fontSize={22}>
            Payment settings
          </Typography>
          <Typography fontSize={18} mt={3}>
            Basic Plan
          </Typography>
          <Typography fontSize={15}>
            with limited access to the template catalog and basic editing
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            pt: 1,
            pb: 0.2,
          }}
        >
          <Typography align="left">Transaction date:</Typography>
          <Typography align="right">00/00/0000</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            pb: 1,
            borderBottom: "1px dashed white",
          }}
        >
          <Typography align="left">Hour:</Typography>
          <Typography align="right">00:00 PM</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 3,
            borderBottom: "1px dashed white",
          }}
        >
          <Typography align="left">Subtotal:</Typography>
          <Typography align="right">₹ 100</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 3,
            borderBottom: "1px dashed white",
            pr: 4,
          }}
        >
          <Typography align="left"></Typography>
          <Typography align="right">Total: ₹ 100</Typography>
        </Box>
        <Box
          my={2}
          display={"flex"}
          justifyContent={"center"}
          sx={{ marginTop: "auto" }} // This ensures the button sticks to the bottom
        >
          <Button
            variant="contained-dark"
            sx={{ width: "20vw", mt: 2 }}
            onClick={() => navigate("/playvideo")}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Settings;
