import React, { useState } from 'react';
import Image from 'next/image';
import { Country } from '@prisma/client';
import Link from 'next/link';

const CountryCard: React.FC<{ country: Country }> = ({ country }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Link href={`/country/${country.name}`}>
      <div
        className="relative border-black rounded-lg"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image
          src={`http://flagcdn.com/w640/${
            country.abbreviation === 'UK'
              ? 'gb'
              : country.abbreviation === 'ARE'
              ? 'ae'
              : country.abbreviation.toLowerCase()
          }.webp`}
          width={500}
          height={300}
          alt={`flag-${country.name}`}
          className={`hover:cursor-pointer rounded-lg ${
            isHovering ? 'grayscale blur-sm' : ''
          }`}
        />
        {isHovering && (
          <h1 className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer cursor-pointer text-white text-4xl">
            {country.name}
          </h1>
        )}
      </div>
    </Link>
  );
};

export default CountryCard;
