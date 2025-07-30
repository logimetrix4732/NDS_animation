import React, { useState } from "react";
import Footage from "../../Images/Videos/Footage.mp4";
import { Menu, X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import "./dashboard.css";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    const video = document.getElementById("dashboard-video");
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById("dashboard-video");
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = document.getElementById("dashboard-video");
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  };
  return (
    <div
      className="th-hero-wrapper hero-1"
      id="hero"
      style={{ position: "relative", height: "92vh", overflow: "hidden" }}
    >
      <video
        src={Footage}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "190px",
          left: "0",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "2.2rem",
            fontWeight: "bold",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "12px 20px",
            borderRadius: "0px 10px 10px 0px",
            width: "fit-content",
            textAlign: "left",
          }}
        >
          Purposeful Growth, <br /> Meaningful Impact
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
