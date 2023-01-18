import styled from "styled-components";
import { ButtonContainer } from "../formStyle";

export const SearchForm = styled.form`
  span {
    display: block;
    strong {
      font-size: 20px;
      font-weight: 600;
      display: block;
      margin-top: 10px;
    }
    input {
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      margin-top: 10px;
      border: 0;
      color: ${(props) => props.theme.blackShade70};
      &::placeholder {
        text-align: center;
      }
    }
  }
`;

export const SearchBtnContainer = styled(ButtonContainer)`
  margin-top: 10px;

  button {
    background-color: ${(props) => props.theme.darkBrown90};
    border-bottom: 4px solid ${(props) => props.theme.blackShade50};
  }
`;
