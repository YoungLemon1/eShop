import './App.css';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ProductPage from './pages/ProductPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <header >
        <NavBar bg='dark' variant="dark">
          <Container>
            <LinkContainer></LinkContainer>
            <NavBar.Brand>
              ESHOP
            </NavBar.Brand>
          </Container>
          </NavBar>
        </header>
        <main>
          <Routes>
            <Route path="/product/:token" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
