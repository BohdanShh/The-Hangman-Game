import { css, styled } from 'styled-components';

type LetterProps = {
  guessed: boolean;
};

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const CategoryName = styled.h3`
  color: #fff;
  font-size: 85px;

  @media (max-width: 700px) {
    font-size: 40px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const HiddenWordWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const Word = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LetterWrapper = styled.div<LetterProps>(
  ({ guessed }) => css`
    width: 80px;
    height: 120px;
    border-radius: 30px;
    border: none;
    background-color: var(--primary-color);
    border-top: 1px solid var(--secondary-color);
    border-right: 3px solid var(--secondary-color);
    border-left: 3px solid var(--secondary-color);
    border-bottom: 5px solid var(--secondary-color);
    box-shadow: inset 0 3px 0px 2px rgba(255, 255, 255, 0.253);
    opacity: ${guessed ? 1 : 0.4};
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: opacity 1s ease-in-out;
    animation: scale 1s ease-in-out;

    @keyframes scale {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }

    @media (max-width: 700px) {
      width: 60px;
      height: 90px;
      border-radius: 20px;
    }
  `
);

export const Letter = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 50px;
  animation: scale 0.4s ease-in-out;

  @keyframes scale {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const Keyboard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Key = styled.button`
  border-radius: 20px;
  padding: 20px 25px;
  font-size: 32px;
  text-transform: uppercase;
  color: var(--secondary-color);
  background-color: #fff;
  cursor: pointer;
  border: none;
  transition: all 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  transform: scale(1);

  &:hover {
    transform: scale(1.1);
    color: #fff;
    background-color: var(--primary-color);
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }

  @media (max-width: 700px) {
    padding: 10px 15px;
  }
`;
