import styled from "styled-components";

export const DarkBox = styled.div`
  background-color: ${(props) => props.theme.darkBrown90};
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0px;
  color: ${(props) => props.theme.ivory90};
  border: ${(props) => props.theme.blackShade90} 1px solid;
  box-shadow: 1px 1px 1px ${(props) => props.theme.blackShade90};
  &:first-child {
    margin-top: -30px;
  }
  span {
    text-shadow: 0.3px 0.3px 0.3px ${(props) => props.theme.blackShade70};
    margin-bottom: 10px;
  }
  strong {
    margin-bottom: 10px;
  }
`;

export const TransparentBox = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.lightBrown};
  text-shadow: 1px 1px 1px ${(props) => props.theme.blackShade70};
  &:nth-child(1) {
    padding-bottom: 0;
  }
  span {
    margin-bottom: 10px;
  }
  strong {
    margin-bottom: 10px;
  }
`;

export const OauthDarkBox = styled(DarkBox)`
  width: 50%;
`;
