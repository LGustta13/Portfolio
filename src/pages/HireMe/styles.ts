import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: end;

  div.incline {
    position: fixed;
    right: 343px;
    width: 300px;
    height: 100vh;
    background-color: var(--shape);
    transform: skewX(165deg);
  }

  div.background-text {
    position: relative;
    height: 100vh;
    width: 41.02vw;
    background-color: var(--shape);

    display: flex;
    direction: column;
    align-items: center;
    justify-content: center;

    div.text {
      margin: 0 14.18rem 0 1.75rem;

      h1 {
        font-weight: 500;
        font-size: 30px;
        line-height: 45px;
        letter-spacing: 0.2em;
        color: var(--red);
      }

      h2 {
        font-weight: 700;
        font-size: 25px;
        line-height: 38px;
        color: var(--subtitle);
        margin-bottom: 14px;
      }

      /* div.text-line {
        display: flex;
        margin-bottom: 37px;

        hr.line-one {
          border: 2px solid var(--red);
          width: 57px;
        }
        hr.line-two {
          border: 2px solid var(--red);
          width: 8px;
          margin-left: 5px;
        }
        hr.line-three {
          border: 2px solid var(--red);
          width: 4px;
          margin-left: 3px;
        }
      } */

      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--text);

        br {
          display: block; /* makes it have a width */
          content: ""; /* clears default height */
          margin-top: 24px; /* change this to whatever height you want it */
        }
      }
    }
  }
`;
