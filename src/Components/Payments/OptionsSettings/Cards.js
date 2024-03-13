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
} from "@mui/material";
import { cards } from "Assets/GlobalStyles";

function Cards({ selectedValue, setSelectedValue }) {
  return (
    <Card sx={cards}>
      <CardContent>
        <FormControlLabel
          sx={{ mb: "-8px" }}
          control={
            <Radio
              checked={selectedValue === "card"}
              onChange={(e) => setSelectedValue(e.target.value)}
              value="card"
              name="paymentMethod"
              sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "red",
                },
              }}
            />
          }
          label="Credit / Debit card"
          componentsProps={{
            typography: {
              fontWeight: "bold",
            },
          }}
        />

        <Collapse in={selectedValue === "card"}>
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
              Secure transfer using your bank account
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {[
              "First Name",
              "Last Name",
              "Card Number",
              "Expiration",
              "CVV",
              "Postal Code",
              "Email",
            ].map((label, index) => (
              <Grid item xs={index === 3 ? 4 : index === 4 ? 2 : 6} key={label}>
                <Typography sx={{ marginBottom: "2px", color: "gray" }}>
                  {label}
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  // margin="dense"
                  sx={{
                    input: {
                      height: "1.5rem",
                      padding: "0.4rem", // Keeping reduced padding for smaller input size
                    },
                    ".MuiOutlinedInput-root": {
                      margin: "2px",
                    },
                    width: "100%",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default Cards;
