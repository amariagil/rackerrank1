


function solucao(notas) {
    //seu codigo aqui
    //DESCARTA A MAIOR E A MENOR NOTA! E AI CALCULA A MEDIA ARITMETICA DAS RESTANTES



    let maior = Math.max(...notas);
    let menor = Math.min(...notas);

    notas.splice(notas.indexOf(maior), 1);
    notas.splice(notas.indexOf(menor), 1);
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }



    let media = soma / notas.length;

    console.log(media);
}

function processData(input) {
    solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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