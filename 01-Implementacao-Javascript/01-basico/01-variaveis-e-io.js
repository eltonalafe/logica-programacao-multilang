// Exemplo: Variáveis, Constantes, Tipos Primitivos e Entrada/Saída em JavaScript
// Baseado no conteúdo teórico de 'Blocos de Construção de um Algoritmo'

// 1. Declaração de variáveis (let, var) e constantes (const)
let idade = 25; // variável do tipo number (inteiro)
var nomeCliente = "Maria"; // variável do tipo string (texto)
const PI = 3.14159; // constante, valor não pode ser alterado
const NUMERO_MAX_TENTATIVAS = 3;

// 2. Tipos primitivos em JavaScript
let inteiro = -10; // number (inteiro)
let real = 3.14; // number (real)
let texto = "Olá, mundo!"; // string
let logico = true; // boolean

// 3. Entrada de dados (Node.js)
// Para rodar no terminal, use 'node 01-variaveis-e-io.js'
// Necessário: Node.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite seu nome: ", function (nomeUsuario) {
  readline.question("Digite sua idade: ", function (idadeUsuario) {
    // 4. Saída de dados
    console.log(`Olá, ${nomeUsuario}! Você tem ${idadeUsuario} anos.`);
    readline.close();
  });
});

// Observação: Para exemplos em navegador, use prompt() e alert() ao invés de readline.
