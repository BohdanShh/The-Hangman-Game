import Image from 'next/image';
import { styled } from 'styled-components';

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
  border-top: 1px solid #261676;
  border-right: 2px solid #261676;
  border-left: 2px solid #261676;
  border-bottom: 10px solid #261676;
  box-shadow: inset 0 8px 0px 4px #2463ff;
  background: linear-gradient(#0043ece2, #26167677);
`;

export const Logo = styled(Image)`
  margin-top: -92.5px;
`;
