import React from "react";
import styled from "styled-components";
import empowerment from "../../Images/icon/empowerment.png";
import hr from "../../Images/icon/hr.png";
const Card = () => {
  return (
    <StyledWrapper>
      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop">
          <img src={hr} alt="hr" className="icon" loading="lazy" />
          <br />
          Our HR Philosophy
          <br />
          <div className="name">
            Our Human Resource approach is grounded in the belief that when
            individuals grow, the organization thrives. We don’t just manage
            talent — we enable and empower it.
          </div>
        </div>
      </div>

      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop">
          <img
            src={empowerment}
            alt="empowerment"
            className="icon"
            loading="lazy"
          />
          <br />
          Empowering Growth & Excellence
          <br />
          <div className="name">
            From structured onboarding and leadership development to
            employee-friendly policies and a culture of continuous learning, we
            are committed to creating a workplace where every team member feels
            valued, supported, and inspired to achieve their best.
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  padding: 40px 20px;

  .e-card {
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
    position: relative;
    width: 420px;
    height: 480px;
    border-radius: 20px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 600px;
    height: 800px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg, #bd8f59, #bd8f59 60%, #bd8f59);
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  .playing .wave:nth-child(1) {
    animation-duration: 3000ms;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .icon {
    width: 3.5em;
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 22px;
    position: absolute;
    top: 2.6em;
    left: 0;
    right: 0;
    color: #fff;
    font-weight: 600;
    padding: 0 16px;
  }

  .name {
    font-size: 20px;
    font-weight: 300;
    margin-top: 1em;
    text-transform: none;
    line-height: 1.6;
    max-height: 240px; /* Optional: control how much text shows */
    overflow-y: auto; /* Optional: scroll if text overflows */
    padding-right: 5px;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Card;
