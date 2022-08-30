import React from 'react';
import Image from 'next/image';
import { Country } from '@prisma/client';
import Link from 'next/link';

const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <Link href={`/country/${country.name}`}>
      <div>
        <Image
          src={`http://flagcdn.com/w160/${
            country.abbreviation === 'UK'
              ? 'gb'
              : country.abbreviation === 'ARE'
              ? 'ae'
              : country.abbreviation.toLowerCase()
          }.png`}
          width={200}
          height={150}
          alt="flag"
        />
        <h1>{country.name}</h1>
      </div>
    </Link>
  );
};

export default CountryCard;
