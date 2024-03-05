'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryCard, CategoryList, GridContainer } from 'src/app/categories/styles';
import { Container, PageHeader } from 'src/app/styles';
import Button from 'src/components/Button';
import Title from 'src/components/Title';
import { data } from 'src/constants';
import { Category } from 'src/types';

const Categories: NextPage = () => {
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
        <Title>Pick a Category</Title>
      </PageHeader>
      <CategoryList>
        <GridContainer>
          {(Object.keys(data) as Category[]).map((category, index) => (
            <CategoryCard
              href={`/categories/${category}`}
              key={index}
            >
              {data[category].name}
            </CategoryCard>
          ))}
        </GridContainer>
      </CategoryList>
    </Container>
  );
};

export default Categories;
