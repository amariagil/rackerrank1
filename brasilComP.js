

function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    encontrado = false;
    for (i = 0; i < palavras.length; i++) {
        if (palavras[i][0] === primeiraLetra && palavras[i][1] === segundaLetra) {
            console.log(palavras[i]);
            encontrado = true;
        }

    }
    if (!encontrado) {
        console.log("NENHUMA");
    }
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
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