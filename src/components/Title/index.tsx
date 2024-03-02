import { FC, ReactNode } from 'react';
import { StyledTitle } from 'src/components/Title/styles';

type Props = {
  children: ReactNode;
};

const Title: FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
