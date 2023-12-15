import axios from "axios";

const linhasApi = axios.create({ baseURL: "http://localhost:3001/formulario" });

async function getLinhas() {
  try {
    const response = await linhasApi.get('/');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados na API ", error);
    if (error.response) {
      console.log("Status do erro:", error.response.status);
    }
  }
}

async function criarLinha(linha) {
  try {
    const response = await linhasApi.post('/', linha, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Erro ao criar linha na API ", error);
  }
}

async function atualizarLinha(id, linha) {
  try {
    const response = await linhasApi.put(`/${id}`, linha);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar linha com o ID ${id} na API`, error);
  }
}

async function excluirLinha(id) {
  try {
    const response = await linhasApi.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir linha com o ID ${id} na API`, error);
  }
}

export { getLinhas, criarLinha, atualizarLinha, excluirLinha };
