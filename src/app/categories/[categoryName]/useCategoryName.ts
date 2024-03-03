import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { TOTAL_ATTEMPTS } from 'src/constants';
import { data } from 'src/constants';
import { Category } from 'src/types';

export const useCategoryName = (categoryName: string) => {
  const [hiddenWord, setHiddenWord] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [clickedLetters, setClickedLetters] = useState<Set<string>>(new Set());
  const [playerAttempts, setPlayerAttempts] = useState<number>(TOTAL_ATTEMPTS);
  const [modalTitle, setModalTitle] = useState<string>('Paused');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const alphabet = useMemo(
    () => Array.from({ length: 26 }, (_, index) => String.fromCharCode('A'.charCodeAt(0) + index)),
    []
  );

  const pickRandomWord = (): void => {
    const { words } = data[categoryName as Category];

    const randomIndex = Math.floor(Math.random() * words.length);

    setHiddenWord(words[randomIndex].toUpperCase());
  };

  const handleMenuClick = (): void => {
    setModalTitle('Paused');
    setIsModalOpen(true);
  };

  const handleContinueClick = (): void => setIsModalOpen(false);

  const handlePlayAgainClick = (): void => {
    pickRandomWord();
    setIsModalOpen(false);
    setClickedLetters(new Set());
    setGuessedLetters(new Set());
    setPlayerAttempts(TOTAL_ATTEMPTS);
  };

  const evaluateUserInput = useCallback(
    (letter: string) => {
      if (playerAttempts === 1) {
        setPlayerAttempts(prev => prev - 1);
        setModalTitle('You Loose');
        setIsModalOpen(true);

        return;
      }

      if (playerAttempts && Array.from(guessedLetters).sort().join('') === hiddenWord) {
        setModalTitle('You Win');
        setIsModalOpen(true);
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
    [clickedLetters, hiddenWord, playerAttempts, guessedLetters]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent): void => {
      evaluateUserInput(event.key);
    },
    [evaluateUserInput]
  );

  const handleKeyClick = (event: MouseEvent<HTMLButtonElement>): void => {
    const target = event.target as EventTarget & { textContent: string };

    evaluateUserInput(target.textContent);
  };

  useEffect(() => {
    pickRandomWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return {
    hiddenWord,
    guessedLetters,
    clickedLetters,
    playerAttempts,
    alphabet,
    modalTitle,
    isModalOpen,
    handleMenuClick,
    handleKeyClick,
    handleContinueClick,
    handlePlayAgainClick,
  };
};
