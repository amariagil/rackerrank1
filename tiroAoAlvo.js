function solucao(disparos) {
    //seu codigo aqui

    //ele so passa e tiver mais de 3 acertos acima de 70 pontos 
    // abaixo de 3 acertos acima de 70 pontos, ele eh eliminado
    let acertosAcimaDe70 = 0;
    for (i = 0; i < disparos.length; i++) {

        if (disparos[i] >= 70) {
            acertosAcimaDe70++;
        }
    }

    if (acertosAcimaDe70 >= 3) {
        console.log(acertosAcimaDe70);
    } else {
        console.log("ELIMINADO");
    }

}

function processData(input) {
    solucao(input.split(' ').map(x => Number(x)).filter(x => x));
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