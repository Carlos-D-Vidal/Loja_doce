// async function getUsers(){
//     const res = await fetch("http://localhost:3001/users")
//     const resJson = await res.json()
//     console.log(resJson)
// }
// getUsers()
import {toastify} from "./toastify.js"
const myHeaders = {
    "Content-Type": "application/json", 
  };
  

async function login(){
    const inputEmail = document.querySelector("#email").value
    const inputSenha = document.querySelector("#senha").value
    const user = {
        email: inputEmail,
        password: inputSenha
    }
    console.log(user)
    const bodyJson = JSON.stringify(user)
    const res = await fetch(
        "http://localhost:3001/login",
    { 
        
        headers:myHeaders, 
        method:"POST",
        body:bodyJson
    }
        )
        if(res.status == 200){
            const resJson = await res.json()
            toastify("Ok, login efetuado com sucesso!","ok")
            localStorage.setItem("@token-exemplo",resJson.accessToken)
            localStorage.setItem("@user-exemplo",JSON.stringify(resJson.user))
            setTimeout(()=>{
                window.location.href = "./lista"
            },3000)
        }else{
            toastify("Email ou senha incorretos","error")
        }
}
const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    login()
})