import { Container } from 'react-bootstrap';
import './App.scss';
import TableUsers from './components/TableUsers';
import Header from './components/header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Container>
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
