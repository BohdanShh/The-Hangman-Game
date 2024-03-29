'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import {
  CategoryName,
  Content,
  HiddenWordWrapper,
  Key,
  Keyboard,
  Letter,
  LetterWrapper,
  Row,
  Word,
} from 'src/app/categories/[categoryName]/styles';
import { useCategoryName } from 'src/app/categories/[categoryName]/useCategoryName';
import { Container, PageHeader } from 'src/app/styles';
import Button from 'src/components/Button';
import Modal from 'src/components/Modal';
import PlayerAttempts from 'src/components/PlayerAttempts';
import { data } from 'src/constants';
import { Category } from 'src/types';

type Props = {
  params: { categoryName: string };
};

const Game: NextPage<Props> = ({ params: { categoryName } }) => {
  const {
    alphabet,
    clickedLetters,
    guessedLetters,
    hiddenWord,
    playerAttempts,
    modalTitle,
    isModalOpen,
    isWordGuessed,
    openModal,
    handleKeyClick,
    handleContinueClick,
    handlePlayAgainClick,
  } = useCategoryName(categoryName);

  return (
    <Container>
      <PageHeader>
        <Row>
          <Button
            variant="secondary"
            fullRounded
            onClick={() => openModal('Paused')}
          >
            <Image
              src="/menu.svg"
              width={40}
              height={40}
              alt="Menu"
            />
          </Button>
          <CategoryName>{data[categoryName as Category].name}</CategoryName>
        </Row>
        <PlayerAttempts attempts={playerAttempts} />
      </PageHeader>
      <Content>
        <HiddenWordWrapper>
          {hiddenWord.split(' ').map((word, wordIndex) => (
            <Word key={wordIndex}>
              {word.split('').map((letter, letterIndex) => {
                const isLetterGuessed = guessedLetters.has(letter);

                return (
                  <LetterWrapper
                    guessed={isLetterGuessed}
                    key={letterIndex}
                    onTransitionEnd={() => {
                      if (!playerAttempts) {
                        openModal('You loose');
                      }

                      if (hiddenWord && playerAttempts && isWordGuessed) {
                        openModal('You Win');
                      }
                    }}
                  >
                    {isLetterGuessed && <Letter>{letter}</Letter>}
                  </LetterWrapper>
                );
              })}
            </Word>
          ))}
        </HiddenWordWrapper>
        <Keyboard>
          {alphabet.map((key, index) => {
            return (
              <Key
                disabled={isWordGuessed || clickedLetters.has(key)}
                onClick={handleKeyClick}
                key={index}
              >
                {key}
              </Key>
            );
          })}
        </Keyboard>
      </Content>
      <Modal
        title={modalTitle}
        open={isModalOpen}
        onContinue={handleContinueClick}
        onPlayAgain={handlePlayAgainClick}
      />
    </Container>
  );
};

export default Game;
