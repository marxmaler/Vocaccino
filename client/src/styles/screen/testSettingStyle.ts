import styled from "styled-components";
import { Form, FormContainer } from "../formStyle";
import { DarkBox } from "../boxStyle";

export const TestSettingFormContainer = styled(FormContainer)`
  padding: 50px;
  background: linear-gradient(
    ${(props) => props.theme.darkBrown90},
    ${(props) => props.theme.darkBrown50},
    ${(props) => props.theme.lightBrown50},
    ${(props) => props.theme.lightBrown90}
  );
  h3 {
    text-shadow: none;
    color: white;
  }
`;

export const TestSettingForm = styled(Form)`
  min-width: max-content;
  h3 {
    color: ${(props) => props.theme.darkBrown90};
  }
  ul {
    margin-top: 20px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 0.5em;
      &:last-child {
        margin-bottom: 0;
      }
      input {
        margin-top: 10px;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        border: 0;
        background-color: ${(props) => props.theme.ivory};
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        color: ${(props) => props.theme.darkBrown90};
        font-size: 24px !important;
        font-weight: 900 !important;
        &::placeholder {
          text-align: center;
        }
      }
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
`;

export const TestSettingDarkBox = styled(DarkBox)`
  label {
    strong {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 600;
      display: block;
    }
  }
  margin: 10px 0px 20px 0px;
`;
