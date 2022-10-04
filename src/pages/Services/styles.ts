import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 31px;
    margin-bottom: 20px;
  }
`;
