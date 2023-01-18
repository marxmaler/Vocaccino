import styled from "styled-components";
import { FormContainer } from "../formStyle";
import { DarkBox, TransparentBox } from "../boxStyle";

export const WordFormContainer = styled(FormContainer)`
  textarea {
    background-color: ${(props) => props.theme.ivory90} !important;
  }
`;

export const WordFormTPBox = styled(TransparentBox)`
  span {
    color: ${(props) => props.theme.lightBrown70};
    text-shadow: 0.3px 0.3px 0.3px ${(props) => props.theme.ivory70};
  }

  input {
    background-color: ${(props) => props.theme.ivory} !important;
  }
`;
