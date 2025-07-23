import React from "react";
import AnimatedText from "../AnimatedText";
import about5shape from "../../assets/img/shape/about-5-shape.png";
const AboutSection8 = () => {
  return (
    <div
      className="bg-smoke position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container">
        <div
          className="row"
          style={{
            maxWidth: "1340px",
          }}
        >
          <div className="col-xl-6">
            <div className="img-box4 ab5-imgbox space-bottom text-end">
              <div className="img1 reveal wow fadeInLeft">
                <img src="assets/img/normal/about_4_1.jpg" alt="About" />
              </div>
              <div className="img2 wow fadeInRight">
                <img src="assets/img/normal/about_4_2.jpg" alt="About" />
                <a
                  href="https://www.youtube.com/watch?v=pQpFebyALV0"
                  className="play-btn popup-video"
                >
                  <i className="fa-sharp fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mt-8 ml-20">
              <div className="title-area">
                <span className="sub-title style1 text-anime-style-2 wow fadeInLeft">
                  Farmer Producer Organisation
                </span>
                <AnimatedText
                  text="Fodder Plus FPOs"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".2s">
                  Supported by NDS, MPOs have evolved into scalable, inclusive
                  and resilient rural institutions aligning with national goals
                  like doubling farmer incomes, enhancing rural livelihoods and
                  building Atmanirbhar Bharat from the grassroots. Under the
                  Government of India's Central Sector Scheme, the Fodder Plus
                  FPO initiative led by NDDB aims to uplift small and marginal
                  farmers through focused efforts on fodder production and
                  animal husbandry. These farmer led FPOs functioning as Cluster
                  Based Business Organizations (CBBOs) are enhancing market
                  access, ensuring quality input supply and establishing
                  sustainable rural agri business hubs.
                </p>
                <p className="sec-text mb-10 wow fadeInUp" data-wow-delay=".2s">
                  With active support from MPOs, NDS facilitated the
                  establishment of 12 FPOs collectively, enrolling over 4,000
                  members and cultivating more than 300 acres for green fodder.
                  Together they have achieved a cumulative turnover of ₹7.64
                  crore offering a diverse portfolio including silage, fodder
                  seeds, cattle feed and veterinary products thus improving
                  animal nutrition, income generation and market integration for
                  rural communities. Complementing these efforts, Sakhi MPO
                  operates nine rural marts serving as essential retail hubs for
                  farmers from nearby villages. These marts offer easy access to
                  critical inputs like oilseed cakes, mineral supplements,
                  silage, and quality green and dry fodder, acting as one-stop
                  shops that simplify procurement and enhance livestock
                  productivity. By bridging the gap between FPOs and the farming
                  community, these rural marts are playing a crucial role in
                  strengthening grassroots economies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup d-none d-xxl-block"
        style={{
          position: "absolute",
          bottom: 0, // percentage unnecessary here
          right: 0,
          zIndex: 1, // optional: bring it above or below as needed
        }}
      >
        <img
          src={about5shape}
          alt="Shape"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default AboutSection8;
