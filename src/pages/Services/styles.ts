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

  div.content-text {
    width: 348px;
    height: 350px;
    padding: 33px 36px;

    border-radius: 20px;
    background-color: var(--shape);
  }
`;
