import styled from "styled-components";

export const TestStartBtnContainer = styled.div`
  margin-top: 15px;
  button {
    background-color: ${(props) => props.theme.darkBrown90};
    border-bottom: 4px solid ${(props) => props.theme.blackShade50};
  }
`;
