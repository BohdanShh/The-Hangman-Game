import { NextPage } from 'next';

type Props = {
  params: { categoryName: string };
};

const Game: NextPage<Props> = ({ params }) => {
  return <p>Category: {params.categoryName}</p>;
};

export default Game;
