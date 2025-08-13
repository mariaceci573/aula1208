let operacao = prompt("Digite a operação (Soma, Subtração, Multiplicação, Divisão):");
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let resultado;

if (operacao == "Soma") {
    resultado = num1 + num2;
    console.log("Resultado: " + resultado);
} else if (operacao == "Subtração") {
    resultado = num1 - num2;
    console.log("Resultado: " + resultado);
} else if (operacao == "Multiplicação") {
    resultado = num1 * num2;
    console.log("Resultado: " + resultado);
} else if (operacao == "Divisão") {
    if (num2 == 0) {
        console.log("Erro: Divisão por zero não é permitida.");
    } else {
        resultado = num1 / num2;
        console.log("Resultado: " + resultado);
    }
} else {
    console.log("Operação inválida.");
}