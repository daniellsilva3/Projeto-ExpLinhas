
import React, { useState, useEffect } from 'react';
import { criarLinha, getLinhas } from '../servicos/index';
import './Menu.css';
import LinhasExpressas from '../../Routes/LinhasExpressas';

function CadastroLinhas() {
  const [linhas, setLinhas] = useState([]);
  const [NumerodaLinha, setNumerodaLinha] = useState('');
  const [Nomeclatura, setNomeclatura] = useState('');
  const [Terminal, setTerminal] = useState('');
  const [PontodeRetorno, setPontodeRetorno] = useState('');

  useEffect(() => {
    const fetchLinhas = async () => {
      try {
        const linhasAPI = await getLinhas();
        setLinhas(linhasAPI);
      } catch (error) {
        console.error('Erro ao obter linhas:', error);
      }
    };

    fetchLinhas();
  }, []);

  const handleCadastro = async () => {
    try {
      const novaLinha = await criarLinha({
        NumerodaLinha: NumerodaLinha,
        Nomeclatura: Nomeclatura,
        Terminal: Terminal,
        PontodeRetorno: PontodeRetorno,
      });
      
      setLinhas((prevLinhas) => (prevLinhas ? [...prevLinhas, novaLinha] : [novaLinha]));

      // Limpe os campos do formulário após a criação bem-sucedida
      setNumerodaLinha('');
      setNomeclatura('');
      setTerminal('');
      setPontodeRetorno('');
    } catch (error) {
      console.error('Erro ao cadastrar linha:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de linha</h2>
      <form>
      <label>Numero da Linha: </label>
                <input type="text" value={NumerodaLinha} onChange={(e) => setNumerodaLinha(e.target.value)} />
                <label>Nomeclatura: </label>
                <input type="text" value={Nomeclatura} onChange={(e) => setNomeclatura(e.target.value)} />
                <label>Terminal: </label>
                <input type="text" value={Terminal} onChange={(e) => setTerminal(e.target.value)} />
                <label>Ponto de Retorno: </label>
                <input type="text" value={PontodeRetorno} onChange={(e) => setPontodeRetorno(e.target.value)} />
        <button type="button" onClick={handleCadastro}>
          Cadastrar Linha
        </button>
      </form>
      {/* Renderize as linhas existentes */}
      <LinhasExpressas linhas={linhas} />
    </div>
  );
}

export default CadastroLinhas;

 
           
      