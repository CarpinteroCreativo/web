//cliente
let cliente = ['Edwin Ramirez'];
document.querySelector("#cliente").innerHTML = cliente[0];

//Saldo inicial.
let deudaInicial = 20000;
document.querySelector("#sInicial").innerHTML = deudaInicial;

//Abonos.
let abonado = 5500;
document.querySelector("#abonado").innerHTML = abonado;

//Saldo Actual
let saldoActual = deudaInicial - abonado;
document.querySelector("#saActual").innerHTML = saldoActual;






