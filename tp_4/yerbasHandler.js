let yerbas = [];

let nombreYerba = document.getElementById("nombreYerba")
let agregarYerba = document.getElementById("agregarYerba")

let contenedorYerba = document.getElementById("itemYerba")
let eliminarYerba = document.getElementById("eliminarYerba")

const addYerba = (event) => {
    event.preventDefault()

    yerbas.push(nombreYerba.value)

    contenedorYerba.innerHTML += `
    <div id="itemYerba">
        <p id="${nombreYerba.value}">${nombreYerba.value}</p>                
        <button id="${nombreYerba.value}">Eliminar</button>
    </div>
    `

    nombreYerba.value = ""
}

const deleteYerba = (event) => {
    event.preventDefault()

    

}

contenedorYerba.addEventListener("click", deleteYerba) 
agregarYerba.addEventListener("click", addYerba)
