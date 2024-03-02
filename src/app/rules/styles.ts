import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  max-width: 1250px;
  margin: 0 auto;
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
`;

export const RuleNumber = styled.h3`
  color: #2463ff;
  font-size: 88px;
`;

export const RuleName = styled.h4`
  color: #261676;
  text-transform: uppercase;
  font-size: 40px;
`;

export const RuleDescription = styled.p`
  text-align: center;
  color: #887dc0;
  font-size: 28px;
`;
