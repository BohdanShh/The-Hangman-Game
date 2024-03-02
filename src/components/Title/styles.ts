import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: 135px;
  background-color: white;
  background-image: linear-gradient(#67b6ff, white);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @media (max-width: 1000px) {
    font-size: 80px;
  }

  @media (max-width: 550px) {
    font-size: 50px;
  }
`;
