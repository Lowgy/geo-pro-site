import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';

const CountryPageContent: React.FC<{ name: string }> = ({ name }) => {
  const { data } = trpc.useQuery(['country.getCountryByName', { name }]);

  return (
    <div className="p-6 min-h-screen w-screen container">
      {data?.country?.name}
    </div>
  );
};

const CountryPage = () => {
  const { query } = useRouter();
  const { name } = query;

  if (!name || typeof name !== 'string') {
    return <div>Error find this country, please try again.</div>;
  }

  return <CountryPageContent name={name} />;
};

export default CountryPage;
