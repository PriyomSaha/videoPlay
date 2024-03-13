import React, { useState } from "react";
import LoginSignupTabs from "./LoginSignupTabs";
import { Box, Fade, IconButton, Modal, Typography, Zoom } from "@mui/material";
import {
  FullScreenModalContainer,
  FullScreenModalHeader,
} from "Assets/GlobalStyles";
import { theme } from "Assets/themes";
import { MdClose } from "react-icons/md";
import Login from "./Login";
import Signup from "./Signup";

function Authentication({ isLoginModalopen, setIsLoginModalOpen }) {
  const [modalType, setModalType] = useState("login");
  return (
    <>
      <Modal open={isLoginModalopen} sx={FullScreenModalContainer}>
        <Zoom in={isLoginModalopen} style={{ transitionDelay: "300ms" }}>
          <Box>
            <Box sx={FullScreenModalHeader}>
              {/* <Typography variant="h6">Login</Typography> */}
              <LoginSignupTabs
                modalType={modalType}
                setModalType={setModalType}
              />

              <IconButton
                aria-label="close"
                onClick={() => setIsLoginModalOpen(false)}
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 5,
                  color: (theme) => theme.palette.grey[500],
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                <MdClose />
              </IconButton>
            </Box>
            {modalType === "login" ? (
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
