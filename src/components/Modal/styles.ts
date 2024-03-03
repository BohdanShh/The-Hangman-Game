import { Menu } from 'src/app/styles';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  opacity: 0.7;
  background: linear-gradient(to bottom, #1a043a, #151278, var(--secondary-color));
`;

export const Content = styled(Menu)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
`;
