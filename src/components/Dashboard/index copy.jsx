import React, { useState } from "react";
import { Menu, X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const LandingPage = () => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">YourBrand</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                >
                  Contact
                </a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-left">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Dashboard Section with Video */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Video Background */}
        <video
          id="dashboard-video"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          {/* Fallback content */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        </video>

        {/* Video Controls */}
        <div className="absolute top-6 right-6 z-30 bg-black bg-opacity-20 backdrop-blur-sm rounded-lg p-2 border border-white border-opacity-20">
          <div className="flex space-x-2">
            <button
              onClick={togglePlayPause}
              className="text-white hover:text-blue-300 p-2 rounded transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={toggleMute}
              className="text-white hover:text-blue-300 p-2 rounded transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-blue-300 p-2 rounded transition-colors"
              title="Fullscreen"
            >
              <Maximize size={20} />
            </button>
          </div>
        </div>

        {/* Content Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"
          style={{ zIndex: 2 }}
        >
          <div className="h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                {/* Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-white bg-opacity-10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white border-opacity-20">
                    Welcome to Innovation
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Purposeful Growth,{" "}
                  <span className="text-blue-400">Meaningful Impact</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                  Transform your vision into reality with cutting-edge solutions
                  that drive sustainable growth and create lasting positive
                  change in the world.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
                    Get Started Now
                  </button>
                  <button className="bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold border border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300">
                    Learn More
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white border-opacity-20">
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-white mb-2">
                      500+
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wide">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-white mb-2">
                      98%
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wide">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-white mb-2">
                      24/7
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wide">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center text-white opacity-70">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
