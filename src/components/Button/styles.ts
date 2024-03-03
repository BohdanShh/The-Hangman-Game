import { css, styled } from 'styled-components';

type StyledButtonProps = { variant: 'primary' | 'secondary'; fullRounded?: boolean };

export const StyledButton = styled.button<StyledButtonProps>(({ variant, fullRounded }) => {
  const isPrimary = variant === 'primary';

  return css`
    display: grid;
    place-items: center;
    border-radius: ${fullRounded ? '50%' : '50px'};
    padding: ${isPrimary ? '10px 50px' : '15px'};
    border-top: 1px solid var(--secondary-color);
    border-right: 2px solid var(--secondary-color);
    border-left: 2px solid var(--secondary-color);
    border-bottom: 5px solid var(--secondary-color);
    box-shadow: inset 0 2px 0px 2px rgba(255, 255, 255, 0.253);
    text-transform: uppercase;
    color: #fff;
    font-size: 32px;
    background: ${isPrimary ? 'var(--primary-color)' : 'linear-gradient(#fc90fc, #7199ff)'};
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 500px) {
      padding: ${isPrimary ? '10px 50px' : '7px'};
    }
  `;
});
