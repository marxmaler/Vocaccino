import { motion } from "framer-motion";
import styled from "styled-components";
import { DarkBox, TransparentBox } from "./boxStyle";

export const Li = styled(motion.li)`
  border: 1.5px solid ${(props) => props.theme.blackShade50};
  list-style: none;
  background-color: ${(props) => props.theme.ivory90};
  border-radius: 20px;
  padding: 30px 30px;
  margin-bottom: 20px;
  position: relative;
  span {
    max-width: 30vw;
    display: block;
    margin: 0.5em;
    line-height: 1.5em;

    strong {
      font-size: 20px;
      font-weight: 600;
      display: block;
    }

    input {
      margin-bottom: 10px;
      width: 100%;
      border-radius: 10px;
      padding: 10px;
      border: 0;
      color: ${(props) => props.theme.blackShade70};
      &[name="spelling"] {
        font-size: 24px !important;
        font-weight: 900 !important;
        &::placeholder {
          font-size: 14px;
          font-weight: 100;
          transform: translate3d(0, -4px, 0);
        }
      }
      &::placeholder {
        text-align: center;
      }
    }
    textarea {
      margin-bottom: 10px;
      border: 0;
      border-radius: 10px;
      padding: 10px;
      width: 100%;
      font-family: inherit;
      resize: none;
      color: ${(props) => props.theme.blackShade70};
      &::placeholder {
        text-align: center;
      }
    }

    select {
      margin-bottom: 10px;
    }
  }
`;

export const Meter = styled.meter<{ point: number }>`
  margin-left: 1em;

  &::-webkit-meter-bar {
    background: none; /* Required to get rid of the default background property */
    background-color: whiteSmoke;
    box-shadow: 0 5px 5px -5px #333 inset;
  }

  &::-webkit-meter-optimum-value {
    box-shadow: 0 5px 5px -5px #999 inset;
    background-color: ${(props) =>
      props.point <= 33
        ? "rgba(231, 76, 60,1.0)"
        : props.point <= 66
        ? "rgba(241, 196, 15,1.0)"
        : "rgba(39, 174, 96,1.0)"};
  }
`;

export const ButtonContainerTop = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: max-content;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
      transform: scale(1.3);
      transition: 0.7s all;
      path {
        fill: ${(props) => props.theme.darkBrown};
      }
    }
    path {
      fill: ${(props) => props.theme.darkBrown50};
    }
  }
`;

export const ButtonContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  min-height: max-content;
  button {
  }
`;

export const wordVar = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 0.7,
    },
  },
};

export const WordDarkBox = styled(DarkBox)`
  border-radius: 20px;
  /* border: ${(props) => props.theme.blackShade90} 0.3px solid; */
  box-shadow: 0.3px 0.3px 0.3px ${(props) => props.theme.blackShade90};
  &:first-child {
    margin-top: 0px;
  }
  span {
    &:last-child {
      margin-bottom: 0;
    }
    strong {
      margin-bottom: 10px;
    }
    &.meaning,
    &.pronunciation {
      margin-top: 20px !important;
      padding: 0 20px;
    }
  }
`;

export const WordTransparentBox = styled(TransparentBox)`
  padding: 10px 20px;
  text-shadow: none;
  span {
    &:last-child {
      margin-bottom: 0;
    }
    strong {
      text-shadow: 1px 1px 1px ${(props) => props.theme.blackShade70};
      margin-bottom: 10px;
    }
  }
`;

export const PointBox = styled.div`
  background-color: transparent;
  padding: 0px 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.lightBrown};
  font-size: 13px;
  margin-top: 2em;
`;

export const Spelling = styled.span`
  background-color: ${(props) => props.theme.ivory};
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  strong {
    color: ${(props) => props.theme.darkBrown};
    text-shadow: 1px 1px 1px ${(props) => props.theme.blackShade70};
    font-size: 24px !important;
    font-weight: 900 !important;
  }
`;

export const Ex = styled.span`
  line-height: 1.5em;
`;
