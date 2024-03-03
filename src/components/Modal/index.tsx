import Link from 'next/link';
import type { FC } from 'react';
import { createPortal } from 'react-dom';
import Button from 'src/components/Button';
import { Content, Overlay } from 'src/components/Modal/styles';
import Title from 'src/components/Title';

type Props = {
  title: string;
  open?: boolean;
  onContinue?: () => void;
  onNewCategory?: () => void;
  onQuit?: () => void;
  onPlayAgain?: () => void;
};

const Modal: FC<Props> = ({ title, open, onContinue, onNewCategory, onQuit, onPlayAgain }) => {
  const isPausedModal = title === 'Paused';

  return open
    ? createPortal(
        <>
          <Overlay />
          <Content>
            <Title>{title}</Title>
            <Button onClick={isPausedModal ? onContinue : onPlayAgain}>
              {isPausedModal ? 'Continue' : 'Play Again'}
            </Button>
            <Link
              href="/categories"
              onClick={onNewCategory}
            >
              <Button>New Category</Button>
            </Link>
            <Link href="/">
              <Button
                variant="secondary"
                fullRounded={false}
                style={{ padding: '10px 50px' }}
                onClick={onQuit}
              >
                Quit Game
              </Button>
            </Link>
          </Content>
        </>,
        document.querySelector('#modal-root') as HTMLElement
      )
    : null;
};

export default Modal;
