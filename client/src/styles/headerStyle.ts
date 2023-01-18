import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.darkBrown30};
  padding: 50px 30px 30px 30px;
  overflow: hidden;
  position: relative;
  align-items: center;
  background-color: ${(props) => props.theme.ivory90};

  ul {
    display: flex;
    align-items: flex-end;
    padding-top: 30px;
    li {
      display: flex;
      align-items: center;
    }
    &.left {
      li {
        margin-right: 20px;
      }
    }
    &.right {
      li {
        margin-left: 20px;
      }
    }
  }
`;

export const MenuItem = styled(motion.span)`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: ${(props) => props.theme.darkBrown50};
  z-index: 1;
  cursor: pointer;
  font-size: 20px;
  font-weight: 900;

  a {
    text-shadow: 0.5px 0.5px 0.5px ${(props) => props.theme.blackShade50};
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    padding: 0.2em 0;
    transition: 0.3s ease-out all;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.08em;
      background-color: ${(props) => props.theme.darkBrown50};
      transition: opacity 500ms, transform 500ms;
      opacity: 1;
      transform: translate3d(-100%, 0, 0);
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    svg {
      margin-left: 2px;
      width: 18px;
      height: 18px;
      cursor: pointer;
      &#review-icon {
        width: 16px;
        height: 16px;
      }
      &#stat-icon,
      &#logout-icon,
      &#login-icon {
        margin-left: 3px;
      }
      path {
        fill: ${(props) => props.theme.darkBrown50};
        /* filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.9)); */
      }
    }
  }
  &:hover {
    a {
      color: ${(props) => props.theme.darkBrown};
      text-shadow: 0.7px 0.7px 0.7px ${(props) => props.theme.blackShade};
    }
    svg {
      path {
        fill: ${(props) => props.theme.darkBrown};
      }
    }
  }
`;
