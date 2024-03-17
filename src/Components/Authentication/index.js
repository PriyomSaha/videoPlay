import React, { useEffect, useState } from "react";
import LoginSignupTabs from "./LoginSignupTabs";
import { Box, Fade, IconButton, Modal, Typography, Zoom } from "@mui/material";
import {
  FullScreenModalContainer,
  FullScreenModalContent,
  FullScreenModalHeader,
} from "Assets/GlobalStyles";
import { theme } from "Assets/themes";
import { MdClose } from "react-icons/md";
import Login from "./Login";
import Signup from "./Signup";

function Authentication({ isLoginModalopen, setIsLoginModalOpen }) {
  const [modalType, setModalType] = useState("login");

  const currentDate = new Date();
  const targetDate = new Date("2024-03-22");

  const [isReleased, setIsReleased] = useState(false);

  useEffect(() => {
    if (currentDate >= targetDate) {
      setIsReleased(true);
    }
  }, []);

  return (
    <>
      <Modal open={isLoginModalopen} sx={FullScreenModalContainer}>
        <Zoom in={isLoginModalopen} style={{ transitionDelay: "300ms" }}>
          <Box>
            <Box sx={FullScreenModalHeader}>
              {/* <Typography variant="h6">Login</Typography> */}
              {!isReleased ? (
                <>
                  <Typography variant="h5">Stay Tuned</Typography>
                </>
              ) : (
                <LoginSignupTabs
                  modalType={modalType}
                  setModalType={setModalType}
                />
              )}
              <IconButton
                aria-label="close"
                onClick={() => setIsLoginModalOpen(false)}
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 0,
                  color: (theme) => theme.palette.grey[500],
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                <MdClose />
              </IconButton>
            </Box>
            {!isReleased ? (
              <Box sx={FullScreenModalContent}>
                <Typography variant="body1" align="center">
                  🎬 Get ready for the grand unveiling!
                  <br />
                  <br />
                  The mystery unfolds on
                  <b> March 22nd, 2024</b>. <br />
                  <br />
                  🍿🎥 Don't miss out on the excitement!
                  <br /> <br /> 📅 Mark your calendars and get ready for the
                  epic cinematic experience!🕵️‍♂️✨
                </Typography>
              </Box>
            ) : modalType === "login" ? (
              <Login />
            ) : (
              <Signup setModalType={setModalType} />
            )}
          </Box>
        </Zoom>
      </Modal>
    </>
  );
}

export default Authentication;
