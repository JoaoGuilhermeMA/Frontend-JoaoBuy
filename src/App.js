import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/layout/header";
import Footer from "./componentes/layout/footer";
import PaginaInicial from "./componentes/pages/paginaInicial";
import Container from './componentes/pages/Container';
import Adicionar from './componentes/pages/adicionar';
import Roupas from './componentes/pages/roupas';
import Acessorios from './componentes/pages/acessorios';
import Bonequinhos from './componentes/pages/bonequinhos';
import DisplayCard from './componentes/layout/displayCard';
import Login from './componentes/pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container  customClass='minHeight'>
        <Routes>
          <Route exact path="/" element={<PaginaInicial />} />
          <Route exact path="/adicionar" element={<Adicionar />} />
          <Route exact path="/roupas" element={<Roupas />} />
          <Route exact path="/acessorios" element={<Acessorios />} />
          <Route exact path="/bonequinhos" element={<Bonequinhos />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        </Container>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
