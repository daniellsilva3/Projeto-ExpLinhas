import axios from "axios";

const linhasApi = axios.create({baseURL: "http://localhost:8000/linhas"});

async function getLinha(){
try {
const response = await vagasApi.get('/');
return response.data;
} catch (error) {
console.error("Erro ao buscar dados na API ", error);

}
}

async function criarLinha (linha) {
try {
const response = await vagasApi.post('/', linha);
return response.data;
} catch (error) {

console.error("Erro ao criar vaga na API ", error);
}
}

async function atualizarLinha(id, linha) {
    try{
        const response = await vagasApi.delete('/${id}');
return response.data;
} catch (error) {
console.error(`Erro ao excluir vaga com o ID ${id} na API, error`);
}
}
export {
getLinha,
criarLinha,
atualizarLinha,
excluirVaga
};
    