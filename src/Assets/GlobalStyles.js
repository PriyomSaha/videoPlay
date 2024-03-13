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
    maxWidth: "50vw",
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
  // minHeight: "60vh",
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
  // minHeight: "50vh",
  minWidth: "80vw",
  borderRadius: "30px",
  margin: "1rem 5rem 2rem 5rem",
  [theme.breakpoints.down("md")]: {
    margin: "1rem 3rem 2rem 3rem",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0.5rem",
  },
};

export const cards = {
  height: "auto",
  width: "100%",
  maxWidth: "500px",
  borderRadius: "20px",
  // px: 1,
  marginBottom: "20px",
};

export const paymentSettings = {
  width: "100%",
  background: "#D10001",
  color: "white",
  height: "100%",
  borderTopRightRadius: theme.breakpoints.up("md") ? "30px" : "0px",
  borderBottomRightRadius: "30px",
  borderBottomLeftRadius: theme.breakpoints.up("md") ? "0px" : "30px",
  display: "flex",
  flexDirection: "column",
};
