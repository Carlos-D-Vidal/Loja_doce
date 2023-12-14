import { baseUrl } from "../api.js";
import { menu } from "../menu.js";


async function listaVenda() {
    const res = await fetch(
        `${baseUrl}/venda/`
    )

const produtos = await fetch(`${baseUrl}/produtos`)
const produtosJson = await produtos.json()
const lista = await res.json()
const ul = document.querySelector("ul")
const produto = {
    nome: produtosJson.nome,
};
const string = JSON.stringify(produto)
ul.innerHTML = ""
lista.forEach((venda) => {
    ul.insertAdjacentHTML("beforeend", `
    <li id="lista-li">
        <p>Nome: ${produto}</p>
        <p>Valor da venda: ${venda.valorVenda}</p>
        <p>Data da venda: ${venda.dia}/${venda.mês}/${venda.ano}</p>
    </li>
`)
})
}
const header = document.querySelector("header")
header.innerHTML = menu
listaVenda()