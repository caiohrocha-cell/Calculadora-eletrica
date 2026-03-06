⚡ Calculadora de Consumo de Energia (kWh)

Este é um projeto simples em JavaScript que calcula o consumo de energia elétrica de um aparelho com base na potência e no tempo de uso diário.

O programa calcula:

🔌 Consumo em kWh por dia

💰 Custo por dia

📅 Custo por mês

📌 Como funciona

O usuário informa:

Potência do aparelho (Watts)

Horas de uso por dia

Quantidade de dias de uso no mês

O script calcula automaticamente:

Consumo diário em kWh

Valor gasto por dia

Valor gasto por mês

O cálculo considera o valor de R$ 0,90 por kWh.

🧮 Fórmula utilizada

Consumo em kWh:

potência (W) × horas ÷ 1000

Preço por dia:

kWh × preço do kWh

Preço por mês:

preço por dia × dias no mês

💻 Código
kwh();

function kwh(){
    let potencia = parseFloat(prompt("Digite a potência do aparelho em watts (W):"));

    let usoDiario = parseFloat(prompt("Digite quantas horas você usa por dia"));
    
    let kwh = (usoDiario * potencia) / 1000;

    let precoPordia = kwh * 0.90;

    console.log("Preço por dia: R$ " + precoPordia);

    let diaporMes = parseInt(prompt("Quantos dias por mês:"));

    let consumoPormes = precoPordia * diaporMes;

    console.log("Preço por mês: R$ " + consumoPormes);
}
🚀 Tecnologias utilizadas

JavaScript

Lógica de programação

Console do navegador

🎯 Objetivo

Este projeto foi criado para praticar lógica de programação em JavaScript, trabalhando com:

entrada de dados (prompt)

conversão de números (parseFloat, parseInt)

cálculos matemáticos

exibição de resultados (console.log)

📚 Possíveis melhorias

Criar uma interface HTML

Mostrar resultados com alert() ou na tela

Permitir escolher valor do kWh

Adicionar cálculo anual

✍️ Projeto criado para estudo de JavaScript.