import styled from "styled-components";
import { motion } from "framer-motion";
import { Form, FormContainer } from "../formStyle";

export const JoinFormContainer = styled(FormContainer)`
  height: fit-content !important;
  min-height: 0;
  margin-top: 50px;
  padding-bottom: 80px;
  h3 {
    margin-bottom: 50px;
    font-size: 30px;
    svg {
      margin-left: 10px;
      width: 30px;
      height: 30px;
      path {
        fill: ${(props) => props.theme.lightBrown};
        filter: drop-shadow(1px 1px 1px ${(props) => props.theme.blackShade50});
      }
    }
  }
`;

export const JoinPageForm = styled(Form)`
  min-width: max-content;

  ul {
    border-radius: 5px;
    padding: 10px;
    li {
      margin-bottom: 0;
      label {
        span {
          font-size: 12px;
          margin-bottom: 0.5em;
        }
      }
      input {
        text-align: center;
      }
    }
  }
  button {
    margin-top: 0.5em;
    cursor: pointer;
  }
`;

export const JoinPwConfirm = styled.strong`
  margin-top: 10px;
`;
