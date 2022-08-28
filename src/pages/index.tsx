import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['example.getAllCountries']);

  if (isLoading || !data) return <div>Loading.....</div>;

  return <div>{data[0]?.name}</div>;
};

export default Home;
