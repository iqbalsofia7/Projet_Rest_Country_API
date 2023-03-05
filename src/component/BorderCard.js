import { useParams } from 'react-router-dom';
import Card from './Card';

function CountryPage() {
  const { countryCode } = useParams();

  //Trouver le pays correspondant aux données
  const country = fetch("https://restcountries.com/v3.1/all").find((c) => c.cca3 === countryCode);

  return <Card country={country} />;
}

export default CountryPage;