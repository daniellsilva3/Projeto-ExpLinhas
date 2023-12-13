import React, { useState } from 'react';
import { criarLinha } from '../Componentes/servicos';
//criando hooks para cada campo
function CadastroLinhas() {
const [NumerodaLinha, setNumerodaLinha] = useState('');
const [Nomeclatura, setNomeclatura] = useState('');
const [Terminal, setTerminal] = useState('');
const [PontodeRetorno, setPontodeRetorno] = useState('');

const handleCadastro = async () => {
    try {
    // Chame a função criarVaga do seu serviço
    const novaLinha = await criarLinha({
        NumerodaLinha: NumerodaLinha,
        Nomeclatura: Nomeclatura,
        Terminal: Terminal,
        PontodeRetorno: PontodeRetorno,
    });
    // Faça algo com a nova vaga, se necessário console.log('Nova vaga criada:', novaVaga);

} catch (error) {
    console.error('Erro ao cadastrar linha:', error);
    }
    };


setNumerodaLinha('');
setNomeclatura('');
setTerminal('');
setPontodeRetorno('');


<>
<h2>Cadastro de linha</h2><form>
    <label>Numero da Linha: </label>
    <input type="text" value={NumerodaLinha} onChange={(e) => setNumerodaLinha(e.target.value)} />
    <label>Empresa: </label>
    <input type="text" value={Nomeclatura} onChange={(e) => setNomeclatura(e.target.value)} />
    <label>Salário: </label>
    <input type="number" value={Terminal} onChange={(e) => setTerminal(e.target.value)} />
    <label>Salário: </label>
    <input type="number" value={PontodeRetorno} onChange={(e) => setPontodeRetorno(e.target.value)} />
    <button type="button" onClick={handleCadastro}>Cadastrar Vaga</button>
</form>
</>
}

