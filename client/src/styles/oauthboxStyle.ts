import styled from "styled-components";
import { motion } from "framer-motion";

export const OauthWrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.ivory90};
  color: ${(props) => props.theme.ivory};
  padding: 10px 10px;
  flex-direction: column;
  min-height: max-content;
  max-width: 50vw;
  border: 1.5px solid ${(props) => props.theme.blackShade50};
  border-radius: 20px;
  box-shadow: 1px 1px 1px ${(props) => props.theme.blackShade50};
  width: 30%;
  min-width: max-content;
  display: flex;
  align-items: center;
  h3 {
    text-align: center;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 10px;
    border: 1.5px solid ${(props) => props.theme.blackShade50};
    box-shadow: 1px 1px 1px ${(props) => props.theme.blackShade90};
    padding: 10px;
    background-color: ${(props) => props.theme.darkBrown90};
    font-size: 20px;
    font-weight: 600;
    text-shadow: 1px 1px 1px ${(props) => props.theme.blackShade90};
  }
`;

export const SocialLoginBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  width: max-content;
  border-bottom: 5px solid ${(props) => props.theme.blackShade50};

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Positioner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
