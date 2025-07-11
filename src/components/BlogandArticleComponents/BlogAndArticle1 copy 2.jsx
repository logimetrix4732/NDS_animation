import React from "react";
import AnimatedText from "../AnimatedText";
import goal from "../../Images/goal.jpg";
import goal1 from "../../Images/goal1.jpg";
import goal2 from "../../Images/goal2.jpg";
import goal3 from "../../Images/goal3.jpg";
import goal4 from "../../Images/goal4.jpg";
import goal5 from "../../Images/goal5.jpg";
import goal6 from "../../Images/goal6.jpg";
import goal7 from "../../Images/goal7.jpg";
import goal8 from "../../Images/goal8.jpg";
import goal10 from "../../Images/goal10.jpg";
import goal11 from "../../Images/goal11.jpg";
import goal12 from "../../Images/goal12.jpg";
import video07 from "../../Images/Videos/video07.mp4";

const goals = [
  {
    goal: "Goal 1",
    title: "Better and Timely Income",
    description:
      "Focusing on generating consistent income for farmers through organized dairy services.",
    image: goal,
  },
  {
    goal: "Goal 2",
    title: "Income for Small & Marginal Farmers, Especially Women",
    description:
      "Empowering small and marginal farmers, especially women, through inclusive dairy initiatives.",
    image: goal1,
  },
  {
    goal: "Goal 3",
    title: "Safe Milk, Healthy Communities",
    description:
      "Ensuring access to safe and nutritious milk, promoting better health for communities.",
    image: goal2,
  },
  {
    goal: "Goal 4",
    title: "Women Empowerment via Ownership & Leadership",
    description:
      "Encouraging leadership roles and ownership among rural women in dairy cooperatives.",
    image: goal3,
  },
  {
    goal: "Goal 5",
    title: "Renewable Energy in Dairy",
    description:
      "Promoting the use of clean and renewable energy throughout the dairy value chain.",
    image: goal4,
  },
  {
    goal: "Goal 6",
    title: "Dignified Rural Livelihoods",
    description:
      "Creating sustainable livelihoods and income opportunities through dairy enterprises.",
    image: goal5,
  },
  {
    goal: "Goal 7",
    title: "Rural Dairy Infrastructure & Innovation",
    description:
      "Investing in rural dairy infrastructure and encouraging innovation to improve productivity.",
    image: goal6,
  },
  {
    goal: "Goal 8",
    title: "Market Access for Marginal Farmers",
    description:
      "Building efficient systems to help marginal farmers access markets and services.",
    image: goal7,
  },
  {
    goal: "Goal 9",
    title: "Resilient Rural Communities",
    description:
      "Supporting rural communities to be more resilient, connected, and self-reliant.",
    image: goal8,
  },
  {
    goal: "Goal 10",
    title: "Sustainable Dairy Production",
    description:
      "Encouraging environment-friendly and sustainable dairy production practices.",
    image: goal10,
  },
  {
    goal: "Goal 11",
    title: "Climate-Smart Dairy Practices",
    description:
      "Adapting climate-smart technologies to support farmers in changing environments.",
    image: goal11,
  },
  {
    goal: "Goal 12",
    title: "Ecosystem-Friendly Livestock Practices",
    description:
      "Promoting livestock management that conserves ecosystems and biodiversity.",
    image: goal12,
  },
];

const BlogAndArticle1 = () => {
  return (
    <section className="space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area text-center text-lg-start pe-xl-5">
                  <span className="sub-title text-anime-style-2">
                    Aligned with Global Goals
                  </span>
                  <AnimatedText
                    text="Why NDDB Dairy Services"
                    tag="h2"
                    className="sec-title mb-10 heading text-anime-style-3"
                    width="100%"
                  />
                </div>
                <div className="blog-shape text-lg-start text-center">
                  <video
                    src={video07}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "500px",
                      height: "354px",
                      borderRadius: "40px",
                      objectFit: "cover",
                    }}
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="blog-grid4-static-wrap">
              {goals.map((goal, index) => {
                // Calculate read time dynamically (1 min per 20 words)
                const words = goal.description.split(" ").length;
                const readTime = Math.max(1, Math.ceil(words / 20));

                return (
                  <div key={index} className="col-12 blog-grid4_wrapp">
                    <div className="blog-grid4 th-ani style4 mt-24">
                      <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ gap: "20px" }}
                      >
                        <div className="box-content" style={{ flex: 1 }}>
                          <div className="blog-meta">
                            <a className="author wow fadeInUp" href="#">
                              {goal.goal || `Goal ${index + 1}`}
                            </a>
                          </div>
                          <h3 className="box-title wow fadeInUp">
                            <a href="#">{goal.title}</a>
                          </h3>
                          <p className="wow fadeInUp" data-wow-delay=".2s">
                            {goal.description}
                          </p>
                        </div>

                        <div className="blog-img global-img wow fadeInUp">
                          <img
                            src={goal.image}
                            alt="goal visual"
                            style={{
                              width: "248px",
                              height: "160px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAndArticle1;
