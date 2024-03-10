import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { theme } from "Assets/themes";

function LikeDislike() {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Box
        sx={{
          background: theme.palette.grey[100],
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          mr: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BiLike />
          <Typography mx={1}>231</Typography>
        </Box>
        <Box
          sx={{ width: "1px", height: "20px", backgroundColor: "black", mx: 1 }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BiDislike />
        </Box>
      </Box>
      <Box
        sx={{
          background: theme.palette.grey[100],
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FaShare />
          <Typography mx={1}>Share</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LikeDislike;
