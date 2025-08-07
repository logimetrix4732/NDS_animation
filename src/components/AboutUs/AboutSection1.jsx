import React from "react";
import AnimatedText from "../AnimatedText";
import DSC_2883 from "../../Images/MilkProducerImg/DSC_6949.jpg";

const AboutSection1 = () => {
  const textContent = (
    <React.Fragment>
      The MPO model has had a profound and far-reaching impact on the rural
      dairy ecosystem. Most significantly, it has brought over 12 lakh dairy
      farmers - many of whom were previously part of the informal sector - into
      the organised framework of formal dairying. This integration has not only
      strengthened the national dairy supply chain but also enabled inclusive
      economic growth, generated local employment opportunities and nurtured
      grassroots entrepreneurship across underserved regions of the country.
      Through collective ownership, access to transparent milk pricing and
      regular income flows, member farmers have gained greater financial
      stability. The consistent availability of productivity services - such as
      Artificial Insemination, cattle feed and fodder - has led to improved
      animal health, increased milk yields and enhanced profitability at the
      farm level. Moreover, MPOs have acted as local hubs of knowledge transfer,
      capacity building and veterinary care bringing long-term benefits to both
      farmers and their animals.
      <br />
      <br />
      A defining hallmark of the MPO movement is its deep-rooted commitment to
      gender inclusion and social equity. Of the 23 MPOs promoted by NDS, 16 are
      exclusively women-led, with all producer directors on their boards being
      women and 18 chaired by women. Today, women constitute 77% of the total
      membership, a powerful indicator of the model’s success in promoting women
      empowerment through economic participation and cooperative leadership.
      This has not only enhanced household incomes but also elevated the social
      status of women in their communities enabling them to become key decision
      makers both at home and in business.
      <br />
      <br />
      Beyond numbers, the MPO model has helped build confidence, financial
      literacy and institutional capacities among rural producers especially
      women and smallholders ensuring that they are no longer passive suppliers
      but active stakeholders in a value-driven and farmer-owned enterprise. It
      is a model that promotes dignity, sustainability and shared prosperity
      laying the foundation for a stronger, more equitable rural economy.
    </React.Fragment>
  );

  return (
    <div
      className="bg-smoke position-relative overflow-hidden space"
      id="about-sec"
      data-bg-src="assets/img/bg/shape_bg_1.png"
    >
      <div className="container">
        <div className="row gy-4 align-items-center no-gutter-x">
          <div className="col-xl-4 order-1 order-xl-0">
            <div className="about-area6 text-center text-md-start">
              <div className="title-area mb-20">
                <AnimatedText
                  text="Impact of MPOs"
                  tag="h2"
                  className="sec-title mb-10 heading text-anime-style-3"
                  width="100%"
                />
              </div>

              <div className="sec-text mb-30 wow fadeInUp" data-wow-delay=".2s">
                <div>{textContent}</div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 order-0 order-xl-2">
            <div className="img-box5 text-xl-end">
              <div className="img1 reveal wow fadeInRight" data-wow-delay=".2s">
                <img
                  src={DSC_2883}
                  alt="About"
                  loading="lazy"
                  style={{
                    width: "620px",
                    height: "860px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
