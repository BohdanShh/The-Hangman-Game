import { FC, HTMLAttributes } from 'react';
import { StyledButton } from 'src/components/Button/styles';

type Props = {
  variant?: 'primary' | 'secondary';
  fullRounded?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, variant = 'primary', fullRounded, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      fullRounded={fullRounded}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
