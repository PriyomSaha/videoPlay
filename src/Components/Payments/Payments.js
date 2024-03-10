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

function Payments() {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const matchesSmall = useMediaQuery(theme.breakpoints.up("md"));
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
            <Box py={2}>
              <Typography
                textAlign={"center"}
                variant="h5"
                fontWeight={700}
                letterSpacing={2}
              >
                Payment method
              </Typography>
              <Typography
                textAlign={"center"}
                fontWeight={700}
                color={"#D10001"}
              >
                Choose a payment option and fill in the requested information
              </Typography>
            </Box>
            <Box sx={PaymentsModalInner}>
              <Grid container spacing={5}>
                <Grid item md={8} sm={12}>
                  <Box sx={{ py: 2, px: 3 }}>
                    <Box
                      sx={{
                        display: "flex", // Add display flex
                        justifyContent: "space-between", // Add this to align items at both ends of the container
                        alignItems: "center", // Align items vertically center
                      }}
                    >
                      <Typography
                        textAlign={"left"}
                        fontWeight={600}
                        fontSize={20}
                      >
                        Payment options
                      </Typography>
                      <Typography
                        textAlign={"right"}
                        color={theme.palette.grey[600]}
                        fontWeight={600}
                        fontSize={20}
                      >
                        Secure Server
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: 1,
                      }}
                    >
                      <Card
                        sx={{
                          height: "auto",
                          width: "500px",
                          // width:"auto",
                          borderRadius: "20px",
                          padding: 1,
                          marginBottom: "20px",
                        }}
                      >
                        <CardContent>
                          <FormControlLabel
                            control={
                              <Radio
                                checked={selectedValue === "creditCard"}
                                onChange={handleChange}
                                value="creditCard"
                                name="paymentMethod"
                                sx={{
                                  color: "gray",
                                  "&.Mui-checked": {
                                    color: "red",
                                  },
                                }}
                              />
                            }
                            label="Credit/debit card"
                            componentsProps={{
                              typography: {
                                fontWeight: "bold",
                              },
                            }}
                          />

                          <Typography
                            variant="body2"
                            sx={{
                              marginBottom: 1,
                              marginLeft: "30px",
                              color: "lightgrey",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            {/* Decreased marginBottom */}
                            Secure transfer using your bank account
                          </Typography>
                          <Box
                            style={{
                              borderBottom: "2px dashed black",
                              width: "100%",
                              marginBottom: "8px",
                            }}
                          >
                            {" "}
                            {/* Decreased marginBottom */}
                          </Box>

                          <Grid container spacing={1}>
                            {" "}
                            {/* Reduced spacing */}
                            {[
                              "First Name",
                              "Last Name",
                              "Card Number",
                              "Expiration",
                              "CVV",
                              "Postal Code",
                              "Email",
                            ].map((label, index) => (
                              <Grid
                                item
                                xs={index === 3 ? 4 : index === 4 ? 2 : 6}
                                key={label}
                              >
                                <Typography
                                  sx={{ marginBottom: "2px", color: "gray" }}
                                >
                                  {" "}
                                  {/* Further decreased marginBottom for labels */}
                                  {label}
                                </Typography>
                                <TextField
                                  variant="outlined"
                                  fullWidth
                                  // margin="dense"
                                  sx={{
                                    input: {
                                      height: "4px",
                                      padding: "10px", // Keeping reduced padding for smaller input size
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
                        </CardContent>
                      </Card>
                      <Card
                        sx={{
                          height: "auto",
                          width: "500px",
                          borderRadius: "20px",
                          marginTop: "4px",
                          padding: "10px",
                        }}
                      >
                        <CardContent
                          sx={{
                            padding: "8px",
                            "&:last-child": { paddingBottom: "8px" },
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                checked={selectedValue === "UPIPayment"}
                                onChange={handleChange}
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
                                borderLeft: "1px dashed grey",
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
                                  border: "1px dashed white",
                                  marginTop: "-28px", // Optional styling for QR code container
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
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4} sm={12}>
                  <Box
                    sx={{
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
                        with limited access to the template catalog and basic
                        editing
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
              </Grid>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default Payments;
