import React from "react";
import {
  Box,
  Card,
  CardContent,
  Collapse,
  FormControlLabel,
  Grid,
  Radio,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "Assets/themes";
import qr from "Assets/qr.png";
import { cards } from "Assets/GlobalStyles";

function UPI({ selectedValue, setSelectedValue }) {
  const matchesSmall = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Card sx={cards}>
      <CardContent>
        <FormControlLabel
          sx={{ mb: "-8px" }}
          control={
            <Radio
              checked={selectedValue === "UPIPayment"}
              onChange={(e) => setSelectedValue(e.target.value)}
              value="UPIPayment"
              size="small" // Optional: Use smaller Radio buttons
              sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
          }
          label="UPI Payment"
          componentsProps={{
            typography: {
              fontWeight: "bold",
            },
          }}
        />

        <Collapse in={selectedValue === "UPIPayment"}>
          <Box
            style={{
              borderBottom: "2px dashed black",
              width: "100%",
              marginBottom: "8px",
            }}
          >
            <Typography
              variant="body2"
              align="center"
              sx={{
                marginBottom: 1,
                marginLeft: "30px",
                color: "lightgrey",
                fontWeight: "bold",
              }}
            >
              {" "}
              {/* Decreased marginBottom */}
              Secure transfer using your UPI account
            </Typography>
            {/* Decreased marginBottom */}
          </Box>
          <Grid
            container
            spacing={1}
            sx={{
              justifyContent: "center",
              position: "relative",
            }}
          >
            {" "}
            {/* Reduced spacing */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="UPI ID"
                variant="standard"
                size="small" // Use smaller TextField
                sx={{ mb: 1, fontWeight: "bold" }} // Adjust spacing if needed
              />
              <Box
                style={{
                  marginBottom: "2px",
                  marginLeft: "80px",
                  color: "lightgrey",
                  fontWeight: "bold",
                }}
              >
                {" "}
                or
              </Box>{" "}
              {/* Reduced spacing */}
              <TextField
                fullWidth
                label="UPI Number"
                variant="standard"
                size="small" // Consistent smaller TextField
              />
            </Grid>
            <Box
              sx={{
                color: "gray",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "55%",
                borderLeft: matchesSmall ? "1px dashed grey" : "",
                transform: "translateX(-50%)",
              }}
            />
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "80%", // Adjusted QR code size
                  height: "80%", // Adjusted QR code container height
                  display: "flex",
                  justifyContent: "center", // Centers content horizontally
                  alignItems: "center", // Centers content vertically
                  // border: "1px dashed white",
                  // marginTop: "-28px", // Optional styling for QR code container
                }}
              >
                <img
                  src={qr}
                  alt="QR Code"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default UPI;
