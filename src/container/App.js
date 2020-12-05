import { Container } from 'react-bootstrap';
import TopNav from '../components/TopNav';
import Stockcontainer from './StockContainer';
import '../App.css';

function App() {
  return (
    <Container className="pt-5 pb-5">
      <TopNav />
      <Stockcontainer />
    </Container>
  );
}

export default App;
