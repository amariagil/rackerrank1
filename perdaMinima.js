

function solucao(precos) {
    // seu codigo aqui
    let menorPrejuizo = 999999999999;
    for (let i = 0; i < precos.length; i++) {
        for (let c = i + 1; c < precos.length; c++) {
            const compra = precos[i];
            const venda = precos[c];
            const prejuizo = compra - venda;

            if (prejuizo > 0) {
                if (prejuizo < menorPrejuizo) {
                    menorPrejuizo = prejuizo;
                }


            }
        }
    }
    console.log(menorPrejuizo);
}

function processData(input) {
    const precos = input.split(" ").map(x => parseInt(x));
    solucao(precos);
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