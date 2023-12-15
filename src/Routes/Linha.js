import Menu from "../Componentes/Menu/Menu";
import {Link} from "react-router-dom";
import './Linha.css';

const Opcoes = ["VOLTAR"];
export default function Linha() {
    return (
      <div className="Linha">
        {Opcoes.map((texto) => (
              <Link to={`/${texto.toLowerCase()}`}>
                <li>
                  <p>{texto}</p>
                </li>
              </Link>
                ))}
                <Menu />
      </div>
    );
  }