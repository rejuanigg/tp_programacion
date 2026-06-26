document.getElementById("contactForm").addEventListener("submit",(event)=>{
    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value

    if (nombre === "" || email === ""){
        event.preventDefault()
        document.getElementById("errorEmailMessage").innerHTML = "Cuidao con el email chee"
        document.getElementById("errorNameMessage").innerHTML = "Cuida con el name cheee"
    }
})
