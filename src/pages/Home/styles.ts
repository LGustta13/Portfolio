import styled from "styled-components";

export const Content = styled.div`
  display: flex;

  div.background {
    position: fixed;
    height: 100vh;
    width: 46.5%;
    transform: skewX(15deg);
    background: var(--background);
  }

  div.text {
    position: relative;
    left: 40%;
    width: 60%;
    background: var(--shape);
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 11.75rem;

    header {
      position: relative;
      bottom: 150px;
      margin-top: 50px;
      font-size: 0.94rem;
      font-weight: 500;
      line-height: 22.5px;
    }

    h1 {
      font-size: 1.85rem;
      font-weight: 500;
      line-height: 45px;
      letter-spacing: 0.2em;
      color: var(--red);
    }

    h2 {
      margin-top: 4px;

      font-weight: 700;
      font-size: 2.19rem;
      line-height: 52px;
      color: var(--subtitle);
    }

    h3 {
      margin-top: 7px;

      font-weight: 500;
      font-size: 0.94rem;
      line-height: 22px;
      color: var(--background);
    }

    p {
      margin-top: 20px;
      max-width: 383px;

      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      color: var(--text);
    }

    button {
      margin-top: 56px;
      width: 95px;
      height: 41px;
      background: #000000;
      border-radius: 10px;

      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      color: var(--red);

      transition: filter 0.1s;

      &:hover {
        filter: opacity(0.95);
        color: white;
      }
    }
  }
`;
