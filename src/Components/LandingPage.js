import React, { useState } from "react";
import Trailer from "./Trailer";
import { Box, Button, Grid, Typography } from "@mui/material";
import Rectangle from "../Assets/Rectangle.svg";
import Authentication from "./Authentication";
import LikeShare from "./LikeShare";

function LandingPage({ src }) {
  const [isLoginModalopen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <Box className="wallpaper">
        {/* You can use the image directly or set it as a background image */}
        <img src={Rectangle} alt="Background" className="background-image" />
        <img
          src={"https://i.postimg.cc/BnGbvcqM/Ysvivekananda.png"}
          alt="Ysvivekananda"
          className="Ysvivekananda"
        />
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            style={{
              background: "#f1f6f6",
              color: "#FF0003",
              border: "0.2px solid #FF0003",
              padding: "0.5rem",
              borderRadius: "30px",
              width: "7rem",
              margin: "1rem 1rem 0 0",
            }}
            onClick={() => setIsLoginModalOpen(true)}
          >
            Login
          </Button>
        </Grid>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            spacing={5}
            style={{ alignItems: "center", height: "100%" }}
          >
            <Grid
              container
              item
              sm={12}
              md={9}
              justifyContent="center" // Align items horizontally
              alignItems="center" // Align items vertically
              flexDirection={"column"}
            >
              <Grid item>
                <Trailer src={src} />
              </Grid>
              <Grid
                container
                item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Grid item>
                  <Typography variant="h6" align="center" color={"whitesmoke"}>
                    Vivekam Movie - Official Trailer
                  </Typography>
                </Grid>
                <Grid item>
                  <LikeShare />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              item
              sm={12}
              md={3}
              className="donate-button-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item sm={12}>
                <Button
                  variant="contained"
                  style={{ background: "#FF0003" }}
                  className="donate-button"
                >
                  Donate to watch full movie
                </Button>
              </Grid>
              <Grid item sm={12}>
                <Typography variant="h6" align="center" width={"15rem"}>
                  Min ₹100
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Authentication
            isLoginModalopen={isLoginModalopen}
            setIsLoginModalOpen={setIsLoginModalOpen}
          />
        </Box>
      </Grid>
    </>
  );
}

export default LandingPage;
