import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Country } from '../lib/country';
import { getColour } from '../utils/colour';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const countryData: Country[] = require('../data/country_data.json').features;

const Globe = dynamic(import('react-globe.gl'));

function polygonColour(country: Country) {
  return getColour(country);
}

function countryLabel(country: Country) {
  const name = country.properties.ADMIN;
  const label = `<b>${name}</b>`;
  return label;
}

const TheGlobe = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    setCountries(countryData);
  }, []);

  return (
    <div>
      <div>
        <Globe
          polygonsData={countries}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          polygonCapColor={polygonColour}
          polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
          polygonStrokeColor={() => '#111'}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          polygonLabel={countryLabel}
        />
      </div>
    </div>
  );
};

export default TheGlobe;
