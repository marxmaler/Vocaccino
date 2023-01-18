import styled from "styled-components";
import { Container } from "../containerStyle";

export const StatContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ul {
    padding: 20px;
    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.darkBrown70};
    background-color: ${(props) => props.theme.ivory90};
    color: ${(props) => props.theme.darkBrown90};
    box-shadow: 1px 1px 1px ${(props) => props.theme.blackShade90};
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 33px;
      padding: 20px;
      font-weight: 900;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
    li {
      display: block;
      padding: 1em;
    }
  }
`;

export const StatLiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.lightBrown90};
  color: white;
  border-radius: 20px;
  min-width: 45%;
  margin: 1.5em;
  margin-bottom: -0.5em;
  padding: 0px 30px;
`;
