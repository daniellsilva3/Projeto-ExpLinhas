

import Banner from "../Componentes/Banner/Banner";
import Botao from "../Componentes/Botao/Botao"
import CampoTexto from "../Componentes/CampoTexto/CampoTexto"
import Header from "../Componentes/Header/header"
import Menu from "../Componentes/Menu/Menu";
export default function App() {
  return (
    <div className="App">
      <Banner />
      <Botao />
      <CampoTexto />
      <Header />
      <Menu />
    </div>
  );
}