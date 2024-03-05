import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { data, TOTAL_ATTEMPTS } from 'src/constants';
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

  const isWordGuessed = useMemo(() => {
    const word = hiddenWord.split(' ').join('');

    return word.split('').every(letter => guessedLetters.has(letter));
  }, [hiddenWord, guessedLetters]);

  const openModal = (title: string): void => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = (): void => setIsModalOpen(false);

  const pickRandomWord = (): void => {
    const { words } = data[categoryName as Category];

    const randomIndex = Math.floor(Math.random() * words.length);

    setHiddenWord(words[randomIndex].toUpperCase());
  };

  const handlePlayAgainClick = (): void => {
    pickRandomWord();
    closeModal();
    setClickedLetters(new Set());
    setGuessedLetters(new Set());
    setPlayerAttempts(TOTAL_ATTEMPTS);
  };

  const evaluateUserInput = useCallback(
    (letter: string) => {
      if (playerAttempts === 1) {
        setPlayerAttempts(prev => prev - 1);
        setGuessedLetters(new Set(hiddenWord.split('')));

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

      if (/^[A-Z]$/.test(pressedKey) && hiddenWord.includes(pressedKey)) {
        setGuessedLetters(prev => {
          const newSet = new Set(prev);
          newSet.add(pressedKey);

          return newSet;
        });
      }
    },
    [clickedLetters, hiddenWord, playerAttempts]
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
    isWordGuessed,
    openModal,
    handleKeyClick,
    handleContinueClick: () => closeModal(),
    handlePlayAgainClick,
  };
};
