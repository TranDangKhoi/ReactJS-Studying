import React from "react";
import styled from "styled-components";

// const StyledCardList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-column-gap: 10px;
//   grid-row-gap: 10rem;
//   margin: 5rem auto;
//   place-items: center;
//   padding: 3rem;
// `;
const StyledCardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;
