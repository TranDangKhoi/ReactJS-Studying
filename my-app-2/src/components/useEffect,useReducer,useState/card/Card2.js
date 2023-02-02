import React from "react";
import styled, { css } from "styled-components";

/*
 * const StyledCard = styled.tag(h1,h2,div,span,...)``
 * CSS-in-JS : CSX
 */

const StyledCard = styled.div`
  position: relative;
  .card-image-wrapper {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    .card-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .card-content {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    width: calc(100% - 36px);
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
        .user-avatar {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }
      }
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-react {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .card-likes-amount {
    color: gray;
  }

  .card-title {
    font-weight: 700;
    font-size: 22px;
    color: black;
  }

  .card-psl {
    font-weight: 700;
    font-size: ${(props) => props.fontSize || "22px"};

    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff, #6a5af9);
      `};
    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(86.88deg, #7d6aff 1.38%, #ffb86c 64.35%, #fc2872 119.91%);
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const Card2 = (props) => {
  console.log("log ~ Card ~ props", props);
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image-wrapper">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=1000x750&vertical=top"
          alt=""
          className="card-image"
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/14988700/media/5fd7eb67da21caa45eb864fbc27f24a2.jpg?compress=1&resize=1000x750&vertical=top"
              alt=""
              className="user-avatar"
            />
            <span>@toilatofu</span>
          </div>
          <div className="card-react">
            <img
              src="/coolicon.svg"
              alt="Hey"
            />
            <span className="card-likes-amount">256</span>
          </div>
        </div>
        <div className="card-footer">
          <span className="card-title">Cosmic Perspective</span>
          <span className="card-psl">12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
