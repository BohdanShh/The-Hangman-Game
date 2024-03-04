import Image from 'next/image';
import { Props } from 'src/components/PlayerAttempts/types';
import { TOTAL_ATTEMPTS } from 'src/constants';
import { css, styled } from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const ProgressWrapper = styled.div`
  width: 240px;
  padding: 7px;
  border-radius: 25px;
  background-color: #fff;

  @media (max-width: 700px) {
    width: 100px;
  }
`;

export const ProgressValue = styled.div<Props>(
  ({ attempts }) => css`
    width: ${(attempts / TOTAL_ATTEMPTS) * 100}%;
    height: 15px;
    border-radius: 25px;
    background-color: var(--secondary-color);
    transition: width 0.4s ease-in-out;
  `
);

export const Heart = styled(Image)<Props>(
  ({ attempts }) => css`
    width: 50px;
    height: 50px;
    ${attempts < TOTAL_ATTEMPTS && 'animation: shaking 0.4s ease-in-out;'}

    @keyframes shaking {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(5px);
      }
      50% {
        transform: translateX(-5px);
      }
      75% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  `
);
