'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, RuleCard, RuleDescription, RuleName, RuleNumber } from 'src/app/rules/styles';
import Button from 'src/components/Button';
import Flex from 'src/components/Flex';
import Title from 'src/components/Title';

const Rules: NextPage = () => {
  return (
    <Container>
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Button variant="secondary">
            <Image
              src="/back.svg"
              width={40}
              height={40}
              alt="Go back"
            />
          </Button>
        </Link>
        <Title>How to Play</Title>
      </Flex>
      <Flex
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          gap={30}
          flexWrap="nowrap"
        >
          <RuleCard>
            <RuleNumber>01</RuleNumber>
            <RuleName>Choose a Category</RuleName>
            <RuleDescription>
              First, choose a word category, like animals or movies. The computer then randomly
              selects a secret word from that topic and shows you blanks for each letter of the
              word.
            </RuleDescription>
          </RuleCard>
          <RuleCard>
            <RuleNumber>02</RuleNumber>
            <RuleName>Guess Letters</RuleName>
            <RuleDescription>
              Take turns guessing letters. The computer fills in the relevant blank spaces if your
              guess is correct. If it's wrong, you lose some health, which empties after eight
              incorrect guesses.
            </RuleDescription>
          </RuleCard>
          <RuleCard>
            <RuleNumber>03</RuleNumber>
            <RuleName>Win or Lose</RuleName>
            <RuleDescription>
              You win by guessing all the letters in the word before your health runs out. If the
              health bar empties before you guess the word, you lose.
            </RuleDescription>
          </RuleCard>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Rules;
