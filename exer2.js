let filme1 = {};
let filme2 = {};

filme1.titulo = prompt("Digite o título do primeiro filme:");
filme1.ano = prompt("Digite o ano de lançamento do primeiro filme:");
filme1.genero = prompt("Digite o gênero do primeiro filme:");
filme1.nota = parseFloat(prompt("Digite a nota do primeiro filme (0 a 10):"));


filme2.titulo = prompt("Digite o título do segundo filme:");
filme2.ano = prompt("Digite o ano de lançamento do segundo filme:");
filme2.genero = prompt("Digite o gênero do segundo filme:");
filme2.nota = parseFloat(prompt("Digite a nota do segundo filme (0 a 10):"));

console.log("Filme 1:", filme1);
console.log("Filme 2:", filme2);


if (filme1.nota > filme2.nota) {
    console.log("O filme com melhor nota é:", filme1.titulo);
}

if (filme2.nota > filme1.nota) {
    console.log("O filme com melhor nota é:", filme2.titulo);
}

if (filme1.nota === filme2.nota) {
    console.log("Os dois filmes têm a mesma nota.");
}

