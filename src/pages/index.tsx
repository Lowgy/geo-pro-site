import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { Country } from '@prisma/client';
import CountryCard from '../components/CountryCard';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['country.getAllCountries']);
  const [inputText, setInputText] = React.useState<string>('');

  const handleSearch = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
  };

  if (isLoading || !data) return <div>Loading.....</div>;
  return (
    <div className="p-6 min-h-screen w-screen items-stretch relative">
      <input
        onChange={(e) => {
          handleSearch(e);
        }}
        placeholder="Search for Country"
      ></input>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-4 md:gap-x-5 mt-10">
        {inputText === ''
          ? data?.map((country) => (
              <CountryCard country={country} key={country.id} />
            ))
          : data
              ?.filter((country) => country.name.includes(inputText))
              .map((filteredCountry) => (
                <CountryCard
                  country={filteredCountry}
                  key={filteredCountry.id}
                />
              ))}
      </div>
    </div>
  );
};

export default Home;
