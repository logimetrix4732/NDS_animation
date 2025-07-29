import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./CountNumber.css";
import AnimatedText from "../AnimatedText";

const countData = [
  {
    number: 11,
    suffix: "",
    title: "States Covered",
    description:
      "Established over 23 Milk Producer Organizations benefiting more than 800,000 dairy farmers across India.",
  },
  {
    number: 162,
    suffix: "",
    title: "Districts Covered",
    description:
      "Implemented quality testing and assurance systems that have improved milk quality by 40% in partner regions.",
  },
  {
    number: 35822,
    suffix: "",
    title: "Villages Covered",
    description:
      "Helped increase farmer incomes by an average of 35% through improved productivity and market access.",
  },
  {
    number: 12.5,
    suffix: "Lac ",
    title: "Associated Dairy Farmers",
    description:
      "Conducted 5,000+ training programs reaching over 300,000 dairy farmers with modern practices and techniques.",
  },
];

const CountNumber = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      className="counter-area space space-extra3-bottom overflow-hidden background-wrapper"
      ref={ref}
    >
      <div className="container">
        <div className="counter-wrap1">
          <div className="row">
            {countData.map((item, index) => (
              <div
                className="col-md-6 col-xl-3 counter-card-wrap wow fadeInRight"
                key={index}
              >
                <div className="counter-card">
                  <div className="counter-shape">
                    <span />
                  </div>
                  <div className="media-body mt-50">
                    <h3
                      className="box-number wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      {inView ? (
                        <CountUp end={item.number} duration={6} separator="," />
                      ) : (
                        0
                      )}
                      {item.suffix}
                    </h3>
                    <h6
                      className="titleFontSize wow fadeInLeft"
                      data-wow-delay=".4s"
                    >
                      {item.title}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountNumber;
