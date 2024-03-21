import styled from 'styled-components';

export const RuleList = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, auto);
  gap: 30px;
  overflow-y: auto;
  height: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
  }
`;

export const RuleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  gap: 30px;
  padding: 30px;
  border-radius: 16px;
  background-color: #fff;
  flex-basis: 33.333%;

  @media (max-width: 1000px) {
    gap: 15px;
    padding: 15px;
  }
`;

export const RuleNumber = styled.h3`
  color: var(--primary-color);
  font-size: 85px;

  @media (max-width: 1000px) {
    font-size: 45px;
  }
`;

export const RuleName = styled.h4`
  color: var(--secondary-color);
  text-transform: uppercase;
  font-size: 40px;

  @media (max-width: 1000px) {
    font-size: 24px;
  }
`;

export const RuleDescription = styled.p`
  text-align: center;
  color: #887dc0;
  font-size: 28px;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
