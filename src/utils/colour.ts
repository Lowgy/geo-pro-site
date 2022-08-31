import { Country } from '../lib/country';

export const getColour = (country: Country) => {
  if (country.properties?.DRIVE === 'RIGHT') {
    return '#0000ff';
  } else if (country.properties?.DRIVE === 'LEFT') {
    return '#ff0000';
  } else if (country.properties?.DRIVE === 'TREK') {
    return '#ffff00';
  } else {
    return '#808080';
  }
};
