import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexGrow?: number;
  flexShrink?: number;
  gap?: number;
};

const Flex: FC<Props> = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  flexDirection = 'row',
  flexWrap = 'wrap',
  flexGrow,
  flexShrink,
  gap,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexDirection,
        flexWrap,
        flexGrow,
        flexShrink,
        gap,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
