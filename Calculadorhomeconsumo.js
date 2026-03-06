kwh();
function kwh(){
let potencia = parseFloat(prompt("Digite a potencia do kwh"));
let taXa = parseFloat(prompt("Digite a taxa desejada"));

let usoDiario = parseFloat(prompt("Digite quantas horas você usa por dia"));
let kwh = usoDiario * potencia / 1000;

let precoPordia = kwh * taXa

console.log ("preço por dia" + precoPordia);

let diaporMes = (prompt("Quantos dias por mês:"));
let consumoPormes = precoPordia * diaporMes
console.log ("preço por mês " + consumoPormes );

}