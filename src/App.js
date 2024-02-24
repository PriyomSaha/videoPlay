import "./App.css";
import VideoPlayer from "./Components/VideoPlayer";
import video from "./img/videoplayback.mp4";
import img from "./img/party-card.png";
import LandingPage from "./Components/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayVideo from "./Components/PlayVideo";

function App() {
 const src =
   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const routes = createBrowserRouter([
    { path: "/", element: <LandingPage src={src} /> },
    { path: "/playvideo", element: <PlayVideo src={src} /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
