import {Link} from "react-router-dom";
import './header.css'

const textoOpcoes = ["CADASTRO DE LINHAS"];

function Header() {
    return (
      <header>
        <div className = 'banner'>
        <img src="/imagens/mumu.jpg" alt="O banner principal da página do ExpressoLinhas" />
        </div>
        <nav>
          <ul>
            {textoOpcoes.map((texto) => (
              <Link to={`/${texto.toLowerCase()}`}>
                <li>
                  <p>{texto}</p>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;