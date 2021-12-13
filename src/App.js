import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/partials/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/partials/Footer';

function App() {
  return (
    <Container fluid>

<BrowserRouter>
<Header/>
    <Routes>
      <Route path="/" element={<Home />}>
     
      </Route>
    </Routes>
  </BrowserRouter>

  <Footer/>
    
  </Container>
  );
}

export default App;
