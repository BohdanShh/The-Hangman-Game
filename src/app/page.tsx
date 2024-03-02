'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Logo, Menu, Wrapper } from 'src/app/styles';
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
        <Button variant="secondary">
          <Image
            src="/play.svg"
            alt="Play"
            width={140}
            height={140}
          />
        </Button>
        <Link href="rules">
          <Button>How to play</Button>
        </Link>
      </Menu>
    </Wrapper>
  );
};

export default Home;
