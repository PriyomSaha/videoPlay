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
import Payments from "Components/Payments/index.js";
import ToastAlert from "Assets/ToastAlert";
import NotFoundPage from "Components/Authentication/NotfoundPage";
import { useEffect } from "react";

function App() {
  const src =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const routes = createBrowserRouter([
    { path: "/", element: <LandingPage src={src} /> },
    { path: "/playvideo", element: <PlayVideo src={src} /> },
    { path: "/payment", element: <Payments /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

 /* useEffect(() => {
    window.location.replace("https://vivekabiopiccom.muvi.com");
  }, []);*/

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
        <ToastAlert />
      </ThemeProvider>
    </>
  );
}

export default App;
