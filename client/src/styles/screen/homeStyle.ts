import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentSection = styled(motion.div)`
  background-color: ${(props) => props.theme.ivory90};
  border-radius: 30px;
  padding-bottom: 50px;
  max-width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: ${(props) => props.theme.ivory50} 0.5px solid;

  div {
    display: flex;
    justify-content: center;
    ul {
      width: max-content;
      text-align: center;
      color: ${(props) => props.theme.darkBrown50};
      margin-top: 50px;
      li {
        padding: 20px;
        margin-bottom: 1em;
        border-bottom: rgba(109, 95, 179, 0) 1px solid;
        border-top: rgba(109, 95, 179, 0) 1px solid;
        display: flex;
        align-items: center;
        svg {
          width: 1.5em;
          height: 1.5em;
          margin-right: 1em;
          path {
            fill: ${(props) => props.theme.darkBrown50};
            filter: drop-shadow(
              0.7px 0.7px 0.7px ${(props) => props.theme.blackShade50}
            );
          }
        }
        a {
          font-size: 25px;
          font-weight: 700;
          cursor: pointer;
          text-shadow: 0.7px 0.7px 0.7px ${(props) => props.theme.blackShade50};
        }
        &:hover {
          a {
            color: rgba(123, 60, 60, 1);
            text-shadow: 1px 1px 1px ${(props) => props.theme.blackShade90};
          }
          svg {
            path {
              fill: ${(props) => props.theme.darkBrown};
              filter: drop-shadow(
                1px 1px 1px ${(props) => props.theme.blackShade}
              );
            }
          }
        }
      }
    }
  }
`;

export const Noti = styled.h3`
  padding: 50px 0px;
  background-color: ${(props) => props.theme.darkBrown};
  color: ${(props) => props.theme.ivory90};
  text-shadow: 1px 1px 1px ${(props) => props.theme.blackShade90};
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;
