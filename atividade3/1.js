// Dados pessoais
const nome = "João";
const idade = 25; // em anos

// Cálculos (desconsiderando anos bissextos)
const diasVividos = idade * 365;
const minutosVividos = diasVividos * 24 * 60;
const segundosVividos = minutosVividos * 60;

// Saída no terminal
console.log("Nome:", nome);
console.log("Idade:", idade, "anos");
console.log("Dias vividos:", diasVividos);
console.log("Minutos vividos:", minutosVividos);
console.log("Segundos vividos:", segundosVividos);
