import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 100px;
  h3 {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
    text-align: center;
    margin-bottom: 30px;
    font-size: 23px;
    font-weight: 700;
    color: ${(props) => props.theme.lightBrown};
  }
`;

export const Form = styled(motion.form)`
  background-color: ${(props) => props.theme.ivory90};
  color: ${(props) => props.theme.ivory90};
  text-shadow: 1px 1px 1px ${(props) => props.theme.blackShade90};
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  min-height: max-content;
  max-width: 50vw;
  border: 1.5px solid ${(props) => props.theme.blackShade50};
  border-radius: 20px;
  box-shadow: 1px 1px 1px ${(props) => props.theme.blackShade50};
  ul {
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 0.5em;
      &:last-child {
        margin-bottom: 0;
      }
      label {
        display: inline-block;
        text-align: start;
        font-weight: 900;
        strong {
          font-size: 20px;
          font-weight: 600;
          display: block;
        }
        span {
          display: block;
          font-size: 12px;
        }
      }
      input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 0;
        background-color: ${(props) => props.theme.ivory90};
        color: ${(props) => props.theme.blackShade50};

        &[name="spelling"] {
          font-size: 24px !important;
          font-weight: 900 !important;
          &::placeholder {
            font-size: 14px;
            font-weight: 100;
            transform: translate3d(0, -4px, 0);
          }
        }
        &::placeholder {
          text-align: center;
        }
      }
      textarea {
        font-family: inherit;
        width: 100%;
        resize: none;
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;
        border: 0;
        background-color: ${(props) => props.theme.periwinkleTint90};
        color: ${(props) => props.theme.periwinkleShade50};
        &::placeholder {
          text-align: center;
          transform: translate3d(0, 15px, 0);
        }
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: max-content;
`;

export const ErrorMessage = styled.li`
  color: ${(props) => props.theme.periwinkleTint90};
  font-size: 12px;
  span {
    padding: 1em;
  }
`;

export const NoWords = styled.span`
  display: block;
  margin-bottom: 50px;
  font-size: 20px;
`;

export const SearchNoWords = styled(NoWords)`
  margin-top: 40px;
  font-weight: 600;
  margin-bottom: 40px;
`;
