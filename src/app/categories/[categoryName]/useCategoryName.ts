import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { TOTAL_ATTEMPTS } from 'src/constants';
import { data } from 'src/constants';
import { Category } from 'src/types';

export const useCategoryName = (categoryName: string) => {
  const [hiddenWord, setHiddenWord] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [clickedLetters, setClickedLetters] = useState<Set<string>>(new Set());
  const [playerAttempts, setPlayerAttempts] = useState<number>(TOTAL_ATTEMPTS);

  const alphabet = useMemo(
    () => Array.from({ length: 26 }, (_, index) => String.fromCharCode('A'.charCodeAt(0) + index)),
    []
  );

  const evaluateUserInput = useCallback(
    (letter: string) => {
      if (!playerAttempts) {
        alert('You Loose');

        return;
      }

      const pressedKey = letter.toUpperCase();

      setClickedLetters(prev => {
        const newSet = new Set(prev);
        newSet.add(pressedKey);

        return newSet;
      });

      if (
        /^[A-Z]$/.test(pressedKey) &&
        !hiddenWord.includes(pressedKey) &&
        !clickedLetters.has(pressedKey)
      ) {
        setPlayerAttempts(prev => prev - 1);

        return;
      }

      setGuessedLetters(prev => {
        const newSet = new Set(prev);
        newSet.add(pressedKey);

        return newSet;
      });
    },
    [clickedLetters, hiddenWord, playerAttempts]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      evaluateUserInput(event.key);
    },
    [evaluateUserInput]
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    const target = event.target as EventTarget & { textContent: string };

    evaluateUserInput(target.textContent);
  };

  useEffect(() => {
    const { words } = data[categoryName as Category];

    const randomIndex = Math.floor(Math.random() * words.length);

    setHiddenWord(words[randomIndex].toUpperCase());
  }, [categoryName]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { hiddenWord, guessedLetters, clickedLetters, playerAttempts, alphabet, handleClick };
};
