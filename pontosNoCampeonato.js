

function solucao(resultados) {
    totalPontos = 0;
    //seu codigo aqui
    for (let pontos of resultados) {
        if (pontos === 'V') { // CADA VITORIA SOMA 3 PONTOS E CADA EMPATE SOMA 1 E CADA DERROTA N SOMA NENHUM
            totalPontos += 3;
        } else if (pontos === 'E') {
            totalPontos += 1;
        }
    }
    console.log(totalPontos);

}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});