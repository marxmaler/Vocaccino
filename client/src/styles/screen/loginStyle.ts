import styled from "styled-components";
import { ButtonContainer, Form } from "../formStyle";
import { JoinFormContainer } from "./joinStyle";

export const LoginFormContainer = styled(JoinFormContainer)``;

export const LoginPageForm = styled(Form)`
  min-width: max-content;
  ul {
    li {
      flex-direction: row;
      label {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 6em;
        margin-right: 0.5em;
      }
      input {
        text-align: center;
      }
    }
  }
`;

export const NoAccount = styled.span`
  color: ${(props) => props.theme.darkBrown50};
  font-size: 12px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 20px;
  text-shadow: 0.3px 0.3px 0.3px ${(props) => props.theme.blackShade30};

  a {
    display: flex;
    align-items: center;
    font-weight: 900;
    svg {
      margin-left: 10px;
      margin-right: 5px;
      width: 12px;
      height: 12px;
      path {
        fill: ${(props) => props.theme.darkBrown50};
        filter: drop-shadow(1px 1px 1px ${(props) => props.theme.blackShade30});
      }
    }
    transition: 0.3s all;
    &:hover {
      margin-left: 11px;
      opacity: 0.5;
      scale: 1.2;
      svg {
        path {
        }
      }
    }
  }
`;

export const LoginButtonContainer = styled(ButtonContainer)`
  margin-top: 15px;
`;
