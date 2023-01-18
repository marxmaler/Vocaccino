import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  background: linear-gradient(
    ${(props) => props.theme.darkBrown90},
    ${(props) => props.theme.darkBrown50},
    ${(props) => props.theme.lightBrown50},
    ${(props) => props.theme.lightBrown90}
  );

  min-height: 100vh;
  width: 100%;
  color: ${(props) => props.theme.ivory90};
  padding: 50px;
`;

export const SearchContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3:first-child {
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;
