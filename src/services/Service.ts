import axios from "axios";

const api = axios.create({
  baseURL: 'https://blogpessoal-insp.onrender.com/'
}) // instancia que permite fazer solicitações para a url sem precisar repetir a cada solicitação

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
} // função que vai receber uma url, os dados do tipo objeto para fazer uma requisição do tipo post, e uma
//...função SETDADOS que atualiza o estado com uma resposta da api
//ASYNC - função que retorna uma promessa imediatamente, mesmo que a função ainda não tenha sido concluida, significa
// ...que o código ao redor da função async pode continuar a execução. AWAIT - pausa a execução da função assíncrona
//... até que a promessa seja resolvida ou rejeitada (fica em loading)
// EXPORT - torna o elemtento disponível para ser importado por outros arquivos

export const login = async(url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
} // o usuario faz a requisão do tipo post para a api com os dados de login, o backend faz a autenticação e retorna
// ... o token de autenticação e chama a função SETDADOS para atualizar o estado da aplicação com o token.

export const buscar = async(url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header)
  setDados(resposta.data)
} // buscando dados, só lida com o retorno do backend. header - token. SETDADOS - pega os dados e guarda em 
//... uma variável

export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(url: string, header: Object) => {
  await api.delete(url, header)
}