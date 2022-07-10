import React from "react";
import styled, { css } from "styled-components";

/*
 * const StyledCard = styled.tag(h1,h2,div,span,...)``
 * CSS-in-JS : CSX
 */

const StyledCard = styled.div`
  position: relative;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 36px);
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
`;

const CardPSL = styled.span`
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
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardLikesAmount = styled.div`
  color: gray;
`;

const CardReact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Card = (props) => {
  console.log("log ~ Card ~ props", props);
  return (
    <StyledCard>
      <CardImageWrapper>
        <CardImage
          src="https://cdn.dribbble.com/users/2400293/screenshots/15883991/media/c5a6d6098f4ec6a0ce1b38909d82a494.png?compress=1&resize=1000x750&vertical=top"
          alt=""
        />
      </CardImageWrapper>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/14988700/media/5fd7eb67da21caa45eb864fbc27f24a2.jpg?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <span>@toilatofu</span>
          </CardUser>
          <CardReact>
            <img src="/coolicon.svg" alt="Hey" />
            <CardLikesAmount>256</CardLikesAmount>
          </CardReact>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardPSL secondary={props.secondary}>12,000 PSL</CardPSL>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
