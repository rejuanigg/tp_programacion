// const username = 'root';
// const password = '1234';

// let tries = 0;
// let isValidated = 0;

// do {
//     const inputUsername = prompt("Ingresá tu nombre de usuario");
//     const inputPassword = prompt("Ingresá tu contraseña");

//     if (
//         inputUsername.toLowerCase() === username.toLowerCase() &&
//         inputPassword === password
//     ) {
//         alert("Bienvenido al sistema");
//         console.log("Usuario validado correctamente");
//         isValidated = 1;
//         break;
//     }

//     tries++;
//     alert("Datos incorrectos");
//     console.log("Intento fallido N° " + tries);

// } while (tries < 3);

// if (tries === 3 && isValidated === 0) {
//     alert("Superaste el límite de errores.");
//     console.log("El usuario superó el límite de intentos");
// }

// document.onkeydown = function escape(e){
//     e = e || window.event;
//     var isEscape = false;

//     if("key" in e){
//         isEscape = (e.key === "Escape" || e.key === "Esc");
//     } else {
//         isEscape = (e.keyCode === 27);
//     }

//     if (isEscape && isValidated){
//         isValidated = 0;
//         alert('Has cerrado sesion');
//         console.log("Sesión cerrada con tecla Escape");
//     }
// }

// function asignarTurnos(){
//     const amountTurns = parseInt(prompt("¿Cuántos turnos/inscripciones desea registrar?"));

//     if (isNaN(amountTurns) || amountTurns <= 0) {
//         alert("Cantidad no válida");
//         console.log("Se ingresó una cantidad inválida de turnos");
//         return;
//     }

//     for (let i = 1; i <= amountTurns; i++) {
//         const personName = prompt("Ingresá el nombre de la persona para el turno N° " + i);

//         if (personName === "") {
//             alert("Nombre vacío. No se registró este turno.");
//             console.log("Turno N° " + i + " omitido por nombre vacío");
//             continue;
//         }

//         alert("Turno N° " + i + " asignado a " + personName);
//         console.log("Turno N° " + i + " asignado a " + personName);
//     }
// }

// function calcularCuotas(){
//     const baseAmount = parseFloat(prompt("Ingresá el monto base a abonar"));
//     const age = parseInt(prompt("Ingresá la edad de la persona"));
//     const paymentMethod = prompt("Ingresá el método de pago: efectivo o tarjeta");

//     let finalAmount = baseAmount;
//     let discountApplied = 0;

//     if (isNaN(baseAmount) || baseAmount <= 0 || isNaN(age) || age <= 0) {
//         alert("Datos inválidos");
//         console.log("Datos inválidos en calculadora de cuotas");
//         return;
//     }

//     if (age < 18 || age > 65) {
//         finalAmount = baseAmount - (baseAmount * 0.20);
//         discountApplied = 1;

//         alert("Se aplicó un descuento del 20% por edad");
//         console.log("Descuento aplicado: 20% por edad");
//     } else if (paymentMethod.toLowerCase() === "efectivo" && discountApplied === 0) {
//         finalAmount = baseAmount - (baseAmount * 0.10);

//         alert("Se aplicó un descuento del 10% por pago en efectivo");
//         console.log("Descuento aplicado: 10% por efectivo");
//     } else if (paymentMethod.toLowerCase() === "tarjeta") {
//         finalAmount = baseAmount + (baseAmount * 0.05);

//         alert("Se aplicó un recargo del 5% por pago con tarjeta");
//         console.log("Recargo aplicado: 5% por tarjeta");
//     } else {
//         alert("No se aplicaron descuentos ni recargos");
//         console.log("Sin descuentos ni recargos");
//     }

//     alert("El monto final a abonar es: $" + finalAmount);
//     console.log("Monto base: $" + baseAmount);
//     console.log("Monto final: $" + finalAmount);
// }

// function menu(){
//     while(isValidated){
//         const option = prompt(
//             "Elegí una opción:\n" +
//             "1. Asignar Turnos / Inscripciones\n" +
//             "2. Calcular cuotas\n" +
//             "3. Salir\n" +
//             "También podés escribir ESC para cerrar sesión"
//         );

//         if (option === null || option.toUpperCase() === "ESC") {
//             isValidated = 0;
//             alert("Has cerrado sesión");
//             console.log("Sesión cerrada desde el menú");
//             break;
//         }

//         switch(option){
//             case "1":
//                 asignarTurnos();
//                 break;

//             case "2":
//                 calcularCuotas();
//                 break;

//             case "3":
//                 isValidated = 0;
//                 alert("Saliste del sistema");
//                 console.log("El usuario salió del sistema");
//                 break;

//             default:
//                 alert("Opción no válida");
//                 console.log("Opción no válida ingresada: " + option);
//                 break;
//         }
//     }
// }

// if (isValidated) {
//     menu();
// }
let o = prompt("Ingresá operacion")
let p = parseInt(prompt("Primer NUmero"));
let s = parseInt(prompt("Segundo NUmero"));

function calculadora(p,s,o){
    switch (o){
        case "+":
            return p + s;
            break;
        case "-":
            return p - s;
            break;
        case "*":
            return p * s;
            break;
        case "/":
            while (s == 0){
                let alt = parseInt(prompt("Ingresa otro numero porque el que elegiste no es valido"));
                return p/alt;
                break;
            }
            return p/s;
            break;
        default:
            return 0;
            break;
    }
}

alert(calculadora(10, 0,"/"))