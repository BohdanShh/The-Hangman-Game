import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 15px;
  max-width: 1250px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryList = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
  }

  @media (max-width: 710px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, auto);
  }
`;

export const CategoryCard = styled(Link)`
  display: grid;
  place-items: center;
  padding: 60px;
  border-top: 1px solid #261676;
  border-right: 2px solid #261676;
  border-left: 2px solid #261676;
  border-bottom: 5px solid #261676;
  box-shadow: inset 0 2px 0px 2px rgba(255, 255, 255, 0.253);
  border-radius: 20px;
  background-color: #2463ff;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-size: 48px;
  transition: transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 710px) {
    padding: 15px;
    font-size: 24px;
  }
`;
