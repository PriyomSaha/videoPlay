import "react-phone-input-2/lib/bootstrap.css";
import "./App.css";
import VideoPlayer from "./Components/VideoPlayer";
import video from "./img/videoplayback.mp4";
import img from "./img/party-card.png";
import LandingPage from "./Components/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayVideo from "./Components/PlayVideo";
import { theme } from "Assets/themes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Payments from "Components/Payments/Payments";
import Example4 from "Assets/example4.tsx";

function App() {
  const src =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const routes = createBrowserRouter([
    { path: "/", element: <LandingPage src={src} /> },
    { path: "/playvideo", element: <PlayVideo src={src} /> },
    { path: "/payment", element: <Payments /> },
    { path: "/payments-alt", element: <Example4 /> },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
