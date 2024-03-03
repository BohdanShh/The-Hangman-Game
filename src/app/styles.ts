import Image from 'next/image';
import { styled } from 'styled-components';

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

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 15px;
  display: grid;
  place-items: center;
`;

export const Menu = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-radius: 50px;
  border-top: 1px solid var(--secondary-color);
  border-right: 2px solid var(--secondary-color);
  border-left: 2px solid var(--secondary-color);
  border-bottom: 10px solid var(--secondary-color);
  box-shadow: inset 0 8px 0px 4px var(--primary-color);
  background: linear-gradient(#0043ece2, var(--secondary-color));
`;

export const Logo = styled(Image)`
  width: 375px;
  height: 185px;
  margin-top: -92.5px;

  @media (max-width: 500px) {
    width: 200px;
    height: 100px;
  }
`;

export const Play = styled(Image)`
  width: 140px;
  height: 140px;

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;
