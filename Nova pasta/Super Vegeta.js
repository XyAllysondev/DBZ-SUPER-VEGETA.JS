gitconst readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Digite o Xp de Vinicius: ", function(valor){

    let XpViniciusSayajin = Number(valor);
    let resultado = "";

    if (XpViniciusSayajin >= 20000000){
        resultado = "Você pode se transformar em Ultra Ego.";
    } else if (XpViniciusSayajin >= 10000000){
        resultado = "Você pode se transformar em Super Sayajin Blue Completo.";
    } else if (XpViniciusSayajin >= 1000000){
        resultado = "Você pode se transformar em Super Sayajin Blue.";
    } else if (XpViniciusSayajin >= 500000){
        resultado = "Você pode se transformar em Super Sayajin God.";
    } else if (XpViniciusSayajin >= 350000){
        resultado = "Você pode se transformar em Super Sayajin 4.";
    } else if (XpViniciusSayajin >= 100000){
        resultado = "Você pode se transformar em Super Vegeta 3.";
    } else if (XpViniciusSayajin >= 50000){
        resultado = "Você pode se transformar em Super Vegeta 2.";
    } else if (XpViniciusSayajin >= 20000){
        resultado = "Você pode se transformar em Super Vegeta.";
    } else if (XpViniciusSayajin >= 10000){
        resultado = "Você pode se transformar em Oozaru.";
    } else if (XpViniciusSayajin >= 0){
        resultado = "Você está na forma base.";
    } else {
        resultado = "Você não pode se transformar em nada.";
    }

    console.log(resultado);

    r1.close();
});