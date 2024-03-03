'use client';

import { FC } from 'react';
import { Heart, ProgressValue, ProgressWrapper, Row } from 'src/components/PlayerAttempts/styles';
import { Props } from 'src/components/PlayerAttempts/types';

const PlayerAttempts: FC<Props> = ({ attempts }) => {
  return (
    <Row>
      <ProgressWrapper>
        <ProgressValue attempts={attempts} />
      </ProgressWrapper>
      <Heart
        src="/heart.svg"
        width={50}
        height={50}
        alt="Heart"
        attempts={attempts}
        key={attempts}
      />
    </Row>
  );
};

export default PlayerAttempts;
