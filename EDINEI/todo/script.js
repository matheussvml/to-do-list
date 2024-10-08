const botao = document.querySelector("#botao")
const input = document.querySelector("#texto-input")
const ul =  document.querySelector("#task-list")
botao.addEventListener("click", () =>{
    const tarefa = input.value
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.textContent = tarefa
    const checkconfirma = document.createElement("input")
    checkconfirma.type = "checkbox"
    const botaoexcloi = document.createElement("button")
    botaoexcloi.classList = "excloi"
    botaoexcloi.textContent = "excloi"
    li.appendChild(p)
    li.append(checkconfirma)
    li.append(botaoexcloi)
    ul.append(li)

    botaoexcloi.addEventListener("click", () =>{
        ul.removeChild(li)
    })
    
    checkconfirma.addEventListener("click", () =>{

    } )
})




