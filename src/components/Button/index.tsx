import { FC, ReactNode } from 'react';
import { StyledButton } from 'src/components/Button/styles';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

const Button: FC<Props> = ({ children, variant = 'primary' }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
