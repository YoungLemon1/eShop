import "./App.css";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ProductPage from "./pages/ProductPage.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <NavBar.Brand>ESHOP</NavBar.Brand>
              </LinkContainer>
            </Container>
          </NavBar>
        </header>
        <main>
          <Routes>
            <Route path="/product/:token" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <footer>
          <div className="text-center">All rights Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
