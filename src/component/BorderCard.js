import { useParams } from 'react-router-dom';
import Card from './Card.js';

function CountryPage(props) {
  const { cca3 } = useParams();
  //Trouver le pays correspondant aux données
  const country = props.data.find((c) => c.cca3 === cca3);

  return (
    
    // <Card country={props.country} />
    <h1>TEST</h1>
    // <h1>TEST</h1>
  )
}

export default CountryPage;
