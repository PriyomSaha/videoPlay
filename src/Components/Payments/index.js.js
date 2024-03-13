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
import { blue } from "@mui/material/colors";
import {
  PaymentsModal,
  PaymentsModalContainer,
  PaymentsModalInner,
} from "Assets/GlobalStyles";
import { theme } from "Assets/themes";
import qr from "Assets/qr.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Cards from "./OptionsSettings/Cards";
import UPI from "./OptionsSettings/UPI";
import Options from "./OptionsSettings/Options";
import Settings from "./OptionsSettings/Settings";

function Payments() {
  const [selectedValue, setSelectedValue] = React.useState("card");

  const navigate = useNavigate();

  return (
    <>
      <section
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box height={"30vh"} width={"100vw"} sx={{ background: "black" }}></Box>
        <Box className={PaymentsModalContainer}>
          <Box sx={PaymentsModal}>
            <Header />
            <Box sx={PaymentsModalInner}>
              <Grid container spacing={1}>
                <Options
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                />
                <Settings />
              </Grid>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default Payments;
