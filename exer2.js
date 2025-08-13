
function criarFilme(numero) {
    const titulo = prompt(`Digite o título do filme ${numero}:`);
    const diretor = prompt(`Digite o diretor do filme ${numero}:`);
    const ano = prompt(`Digite o ano de lançamento do filme ${numero}:`);
    const nota = parseFloat(prompt(`Digite a nota do filme ${numero} (0 a 10):`));

    return {
        titulo,
        diretor,
        ano,
        nota
    };
}
const filme1 = criarFilme(1);
const filme2 = criarFilme(2);

console.log("Filme 1:", filme1);
console.log("Filme 2:", filme2);

if (filme1.nota > filme2.nota) {
    console.log("Filme com a melhor nota:", filme1.titulo);
} else if (filme2.nota > filme1.nota) {
    console.log("Filme com a melhor nota:", filme2.titulo);
} else {
    console.log("Os dois filmes têm a mesma nota.");
}
