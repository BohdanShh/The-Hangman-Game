import { CSSProperties, FC, ReactNode } from 'react';
import { StyledButton } from 'src/components/Button/styles';

type Props = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  style?: CSSProperties;
};

const Button: FC<Props> = ({ children, variant = 'primary', style }) => {
  return (
    <StyledButton
      variant={variant}
      style={style}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
