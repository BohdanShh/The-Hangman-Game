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
import PlayerAttempts from 'src/components/PlayerAttempts';
import { data } from 'src/constants';
import { Category } from 'src/types';

type Props = {
  params: { categoryName: string };
};

const Game: NextPage<Props> = ({ params: { categoryName } }) => {
  const { alphabet, clickedLetters, guessedLetters, hiddenWord, playerAttempts, handleClick } =
    useCategoryName(categoryName);

  return (
    <Container>
      <PageHeader>
        <Row>
          <Button variant="secondary">
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
                disabled={clickedLetters.has(key)}
                onClick={handleClick}
                key={index}
              >
                {key}
              </Key>
            );
          })}
        </Keyboard>
      </Content>
    </Container>
  );
};

export default Game;
