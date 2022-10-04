import styled from "styled-components";

type ContentProps = {
  activated: boolean;
};

export const Content = styled.button<ContentProps>`
  width: 348px;
  height: 350px;
  padding: 33px 36px 33px 36px;
  text-align: start;

  border-radius: 20px;

  transition: background-color 0.2s, filter 0.2s;

  background-color: ${(props) => (props.activated ? "#FF0000" : "#FFFFFF")};

  &:hover {
    filter: brightness(0.8);
  }

  div.rectangle {
    display: flex;

    div.rectangle-image {
      display: flex;
      align-items: center;
      justify-content: center;

      img.n2 {
        transition: filter 0.5s;
        ${(props) =>
          props.activated
            ? "filter: brightness(105%) saturate(16%) invert(81%) sepia(96%) hue-rotate(218deg) contrast(104%);"
            : ""}
      }

      img.n1 {
        position: absolute;
        ${(props) =>
          props.activated
            ? "filter: brightness(0%) saturate(100%) invert(0%) sepia(74%) hue-rotate(117deg) contrast(107%);"
            : ""}
      }
    }
  }

  h2 {
    margin-top: 36px;
    font-weight: 700;
    font-size: 25px;
    line-height: 38px;
  }

  p {
    margin-top: 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
