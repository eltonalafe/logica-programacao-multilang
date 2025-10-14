# 4. Estruturas Condicionais

Até agora, nossos algoritmos seguiram um fluxo linear, executando uma instrução após a outra, sempre na mesma ordem. No entanto, a verdadeira força da programação reside na capacidade de um programa tomar decisões e alterar seu comportamento com base em diferentes situações.

As **estruturas condicionais** são os blocos de construção que nos permitem controlar o fluxo de execução de um algoritmo. Elas avaliam uma condição lógica (cujo resultado é sempre `VERDADEIRO` or `FALSO`) e, com base nesse resultado, decidem qual bloco de código deve ser executado.

---

### 4.1 A Condicional Simples (`Se...Então`)

Esta é a estrutura de decisão mais fundamental. Ela executa um bloco de código **apenas se** uma determinada condição for verdadeira. Se a condição for falsa, o bloco de código é simplesmente ignorado e o programa continua sua execução normalmente a partir da próxima linha.

Pense nela como uma instrução que executa uma **ação opcional**.

**Estrutura em Pseudocódigo:**

```pseudocode
Se (condição_logica) Então
  // Bloco de código a ser executado
  // APENAS SE a condição for VERDADEIRA.
FimSe

//Exemplo Prático

Algoritmo "CalculaDesconto"
Var
  valor_compra: Real
  valor_final: Real

Inicio
  Escreva("Digite o valor total da compra: R$ ")
  Leia(valor_compra)

  // O valor final começa sendo igual ao valor da compra
  valor_final <- valor_compra

  // Início da estrutura condicional
  // O programa SÓ entra neste bloco se a compra for maior que 100
  Se (valor_compra > 100.00) Então
    valor_final <- valor_compra * 0.90 // Aplica o desconto de 10%
    Escreva("Parabéns! Você recebeu um desconto de 10%.")
  FimSe

  // Esta linha sempre será executada, mostrando o valor com ou sem desconto
  Escreva("O valor final a pagar é: R$ ", valor_final)
FimAlgoritmo
```

### 4.2 A Condicional Composta (`Se...Então / Senao`)

Enquanto a condicional simples executa uma ação apenas se a condição for verdadeira, a condicional composta nos dá dois caminhos, criando uma **bifurcação** no fluxo do algoritmo.

Ela executa um bloco de código se a condição for `VERDADEIRA` e um **outro** bloco de código se a condição for `FALSA`. Com essa estrutura, temos a garantia de que um dos dois blocos será sempre executado.

**Estrutura em Pseudocódigo:**

```pseudocode
Se (condição_logica) Então
  // Bloco de código A
  // Será executado se a condição for VERDADEIRA.
Senao
  // Bloco de código B
  // Será executado se a condição for FALSA.
FimSe

// Exemplo Prático

Algoritmo "ControleDeAcesso"
Var
  idade_usuario: Inteiro

Inicio
  Escreva("Digite sua idade para verificação: ")
  Leia(idade_usuario)

  // Início da estrutura condicional composta
  Se (idade_usuario >= 18) Então
    // Este bloco só executa se a condição for VERDADEIRA
    Escreva("Acesso permitido.")
  Senao
    // Este bloco só executa se a condição for FALSA
    Escreva("Acesso negado.")
  FimSe

  Escreva("Verificação concluída.") // Esta linha sempre será executada no final
FimAlgoritmo
```

### 4.3 A Condicional Encadeada (`Se... / Senao Se... / Senao`)

Chegamos à estrutura mais completa, usada quando temos **três ou mais caminhos** possíveis para o nosso algoritmo. A condicional encadeada nos permite testar uma sequência de condições, uma após a outra.

O fluxo funciona da seguinte maneira:

1.  O algoritmo testa a primeira condição (`Se`). Se for verdadeira, ele executa o bloco correspondente e **ignora todas as outras condições**.
2.  Se a primeira for falsa, ele passa para a próxima condição (`Senao Se`). Se esta for verdadeira, ele executa o bloco dela e ignora o resto.
3.  O processo se repete para quantos `Senao Se` existirem.
4.  Se **nenhuma** das condições anteriores for verdadeira, o bloco final `Senao` é executado, servindo como uma opção "padrão" ou "caso contrário".

**Estrutura em Pseudocódigo:**

```pseudocode
Se (condição_1) Então
  // Bloco de código A
  // Executado se a condição_1 for VERDADEIRA.
Senao Se (condição_2) Então
  // Bloco de código B
  // Executado se a condição_1 for FALSA e a condição_2 for VERDADEIRA.
Senao
  // Bloco de código C
  // Executado se TODAS as condições anteriores forem FALSAS.
FimSe
```

### Exemplo Prático: Status do Aluno (Aprovado, Recuperação ou Reprovado)

Este é o exemplo clássico e perfeito para esta estrutura. Precisamos classificar um aluno em três categorias diferentes com base em sua nota final.

**Problema:** Crie um algoritmo que leia a nota de um aluno.

- Se a nota for 7.0 ou maior, ele está "Aprovado".
- Se a nota for maior ou igual a 5.0, mas menor que 7.0, ele está em "Recuperação".
- Se a nota for menor que 5.0, ele está "Reprovado".

```pseudocode
Algoritmo "StatusDoAluno"
Var
  nota_final: Real

Inicio
  Escreva("Digite a nota final do aluno (de 0 a 10): ")
  Leia(nota_final)

  // Início da estrutura condicional encadeada
  Se (nota_final >= 7.0) Então
    Escreva("Status: Aprovado!")
  Senao Se (nota_final >= 5.0) Então
    Escreva("Status: Em Recuperação.")
  Senao
    Escreva("Status: Reprovado.")
  FimSe

  Escreva("Análise de notas concluída.")
FimAlgoritmo
```
