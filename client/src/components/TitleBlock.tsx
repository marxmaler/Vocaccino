import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 900;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: ${(props) => props.theme.darkBrown90};
  text-shadow: 2px 2px 2px ${(props) => props.theme.blackShade};

  img {
    margin-left: -50px;
    width: 200px;
    height: 150px;
  }
`;

function TitleBlock() {
  return (
    <Title>
      <Link to={"/"}>Vocaccino</Link>
      <img src="/mocha.png" />
    </Title>
  );
}

export default TitleBlock;
