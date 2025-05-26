// Dados pessoais
const peso = 70; // em kg
const altura = 1.75; // em metros


const imc = peso / (altura * altura);


let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}


