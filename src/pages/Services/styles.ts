import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.header-text {
    margin-top: 111px;
    margin-bottom: 16px;

    h1 {
      font-weight: 700;
      font-size: 30px;
      line-height: 45px;
      color: #ffffff;
    }
  }

  div.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 31px;
    margin-bottom: 20px;
  }
`;
