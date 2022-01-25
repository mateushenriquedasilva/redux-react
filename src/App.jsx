import { Container } from 'react-bootstrap';
import Login from './components/Login';
import Logout from './components/Logout';
import User from './components/User';

function App() {
  return(
    <div>
      <Container>
        <Login />
        <br />
        <Logout />
        <br />
        <User />
      </Container>
    </div>
  );
}

export default App
