'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RuleCard, RuleDescription, RuleList, RuleName, RuleNumber } from 'src/app/rules/styles';
import { Container, PageHeader } from 'src/app/styles';
import Button from 'src/components/Button';
import Title from 'src/components/Title';

const Rules: NextPage = () => {
  return (
    <Container>
      <PageHeader>
        <Link href="/">
          <Button
            variant="secondary"
            fullRounded
          >
            <Image
              src="/back.svg"
              width={40}
              height={40}
              alt="Go back"
            />
          </Button>
        </Link>
        <Title>How to Play</Title>
      </PageHeader>
      <RuleList>
        <RuleCard>
          <RuleNumber>01</RuleNumber>
          <RuleName>Pick a Category</RuleName>
          <RuleDescription>
            First, pick a word category, like animals or movies. The computer then randomly selects
            a secret word from that topic and shows you blanks for each letter of the word.
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
            Win by guessing all letters in the word before health runs out. If health empties before
            guessing, you lose. Guess letters quickly and accurately to protect health and win.
          </RuleDescription>
        </RuleCard>
      </RuleList>
    </Container>
  );
};

export default Rules;
