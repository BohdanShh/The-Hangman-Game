'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import { Logo, Menu, Play, Wrapper } from 'src/app/styles';
import Button from 'src/components/Button';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Menu>
        <Logo
          src="/logo.svg"
          alt="Logo"
          width={375}
          height={185}
        />
        <Link href="categories">
          <Button variant="secondary">
            <Play
              src="/play.svg"
              alt="Play"
              width={140}
              height={140}
            />
          </Button>
        </Link>
        <Link href="rules">
          <Button>How to play</Button>
        </Link>
      </Menu>
    </Wrapper>
  );
};

export default Home;
