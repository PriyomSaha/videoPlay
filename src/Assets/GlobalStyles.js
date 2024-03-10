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

export const PaymentsModalContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
};

export const PaymentsModal = {
  background: theme.palette.grey[100],
  marginTop: "-25vh",
  minHeight: "60vh",
  minWidth: "90vw",
  maxWidth: "95vw",
  borderRadius: "30px",
  border: "0.5px solid black",
  [theme.breakpoints.down("md")]: {
    maxWidth: "99vw",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100vw",
  },
};
export const PaymentsModalInner = {
  display: "flex",
  flexDirection: "column",
  background: theme.palette.grey[400],
  minHeight: "50vh",
  minWidth: "80vw",
  borderRadius: "30px",
  margin: "1rem 5rem 2rem 5rem",
};
