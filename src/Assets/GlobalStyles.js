import { theme } from "./themes";

export const FullScreenModalContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "clip", // Add the overflow-x property here
};

export const FullScreenModalHeader = {
  position: "sticky",
  top: 0,
  left: "auto",
  right: "auto",
  minWidth: "10vw",
  maxWidth: "30vw",
  [theme.breakpoints.down("md")]: {
    maxWidth: "90vw",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100vw",
  },

  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1, 2),
  zIndex: 1,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
};

export const FullScreenModalContent = {
  outline: "none",
  backgroundColor: theme.palette.grey[200],
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  padding: theme.spacing(2),
  minWidth: "20vw",
  maxWidth: "30vw",
  [theme.breakpoints.down("md")]: {
    maxWidth: "90vw",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100vw",
  },
  minHeight: "20vh",
  maxHeight: "90vh",
  overflow: "auto",
};
