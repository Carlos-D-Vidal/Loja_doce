import { baseUrl } from '../api.js';
import {menu} from '../menu.js'
const myHeaders = {
    "Content-Type": "application/json",
};
async function lista() {
    const res = await fetch(
        `${baseUrl}/produtos`
    )
    const prod = await res.json()
    console.log(prod)
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    prod.forEach((produtos) => {
        ul.insertAdjacentHTML("beforeend", `
            <li id="lista-li">
                <p>Nome: ${produtos.nome}</p>
                <p>Custo: $ ${parseFloat(produtos.custo).toFixed(2)}</p>
                <p>Venda: $ ${parseFloat(produtos.venda).toFixed(2)}</p>
            </li>
        `)
    })
}
lista()

const header = document.querySelector("header")
header.innerHTML = menu