import React, { useState } from "react";
import Trailer from "./Trailer";
import { Box, Button, Grid, Typography } from "@mui/material";
import Rectangle from "../Assets/Rectangle.svg";
import Authentication from "./Authentication";
import LikeShare from "./LikeShare";

function LandingPage({ src }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

      <Grid container justifyContent={"flex-start"}>
        <Grid
          container
          item
          color={"white"}
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Grid item>
            <Button
              variant="contained"
              style={{ background: "#FF0003" }}
              // className="donate-button"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Donate to watch full movie
            </Button>

            <Typography variant="h6" align="center">
              Min ₹100
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          style={{
            height: "90vh",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Grid
            container
            item
            sm={12}
            md={9}
            justifyContent="center" // Align items horizontally
            alignItems="center" // Align items vertically
          >
            <Grid item>
              <Trailer src={src} />
            </Grid>
            <Grid item ml={1}>
              <Button
                variant="contained"
                onClick={() => {
                  window.location.href =
                    "https://www.youtube.com/watch?v=j5KI26ViQ40&ab_channel=VIVEKABiopic";
                }}
              >
                Click to watch
              </Button>
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
        </Grid>
        <Authentication
          isLoginModalopen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
        />
      </Grid>
    </>
  );
}

export default LandingPage;
