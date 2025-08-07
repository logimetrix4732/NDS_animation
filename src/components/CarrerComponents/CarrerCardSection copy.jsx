import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <div
      className="service-area bg-top-center position-relative space-top overflow-hidden"
      id="service-sec"
    >
      <div className="container">
        <div className="row">
          <div className="service-list-area">
            <StyledWrapper>
              <div className="card">
                <a className="card1" href="#">
                  <p>Our HR Philosophy</p>
                  <p className="small">
                    Our Human Resource approach is grounded in the belief that
                    when individuals grow, the organization thrives. We don’t
                    just manage talent — we enable and empower it.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
                <a className="card1" href="#">
                  <p>Empowering Growth & Excellence</p>
                  <p className="small">
                    From structured onboarding and leadership development to
                    employee-friendly policies and a culture of continuous
                    learning, we are committed to creating a workplace where
                    every team member feels valued, supported, and inspired to
                    achieve their best.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </StyledWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .card p {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    color: #666;
  }

  .card p.small {
    font-size: 14px;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00838d;
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card1 {
    display: block;
    position: relative;
    max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
  }

  .card1:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  .card1:hover:before {
    transform: scale(21);
  }

  .card1:hover p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card1:hover h3 {
    transition: all 0.3s ease-out;
    color: #fff;
  }
`;

export default Card;
