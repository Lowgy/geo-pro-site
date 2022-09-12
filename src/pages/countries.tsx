import type { NextPage } from 'next';
import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import CountryCard from '../components/CountryCard';
import { FaSearch } from 'react-icons/fa';

const CountriesPage: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['country.getAllCountries']);
  const [inputText, setInputText] = useState<string>('');

  const handleSearch = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
  };

  if (isLoading || !data) return <div>Loading.....</div>;
  return (
    <div className="p-6 min-h-screen w-screen items-stretch relative">
      <div className="relative pl-2">
        <input
          type="text"
          className="h-14 w-96 pr-8 pl-8 rounded z-0 focus:shadow border-2 border-black"
          onChange={(e) => {
            handleSearch(e);
          }}
          placeholder="Search for Country"
        />
        <FaSearch className="absolute top-5 ml-2" />
      </div>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-4 mt-10 place-items-center">
        {inputText === ''
          ? data?.map((country) => (
              <CountryCard country={country} key={country.id} />
            ))
          : data
              ?.filter((country) =>
                country.name.toLowerCase().includes(inputText.toLowerCase())
              )
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

export default CountriesPage;
