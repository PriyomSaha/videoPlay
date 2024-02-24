import React from "react";
import { Link } from "react-router-dom";

function LandingPage({ src }) {
  return (
    <section
      className="hero"
      style={{
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
        position: "relative", // Ensure proper positioning for video overlay
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensure the video covers the entire area
          zIndex: -1, // Ensure the video is behind other content
        }}
      >
        <source src={src} type="video/mp4" />
        {/* Add additional source tags for different video formats if necessary */}
        Your browser does not support the video tag.
      </video>
      {/* Additional content can be added here */}
      <div className="content">
        <h1>VIVEKAM</h1>
        <h3>Cruel political saga</h3>
        {/* <p>
          Get ready to transform your spare time into a visually stunning
          experience.
        </p> */}
        <p>
          <h5>"Shadows of Betrayal"</h5>
        </p>
        <a href="">Start Now</a>
        <br />
        <Link to="/playvideo">Next Page </Link>
        <br />
      </div>
    </section>
  );
}

export default LandingPage;
