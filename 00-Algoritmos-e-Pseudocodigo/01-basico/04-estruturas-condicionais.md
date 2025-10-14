# 4. Estruturas Condicionais

Até agora, nossos algoritmos seguiram um fluxo linear, executando uma instrução após a outra, sempre na mesma ordem. No entanto, a verdadeira força da programação reside na capacidade de um programa tomar decisões e alterar seu comportamento com base em diferentes situações.

As **estruturas condicionais** são os blocos de construção que nos permitem controlar o fluxo de execução de um algoritmo. Elas avaliam uma condição lógica (cujo resultado é sempre `VERDADEIRO` or `FALSO`) e, com base nesse resultado, decidem qual bloco de código deve ser executado.

---

### 4.1 A Condicional Simples (`Se...Então`)

Esta é a estrutura de decisão mais fundamental. Ela executa um bloco de código **apenas se** uma determinada condição for verdadeira. Se a condição for falsa, o bloco de código é simplesmente ignorado e o programa continua sua execução normalmente a partir da próxima linha.

Pense nela como uma instrução que executa uma **ação opcional**.


**Estrutura em Portugol:**

```portugol
se (condicao_logica) entao
  // Bloco de código a ser executado
  // APENAS SE a condição for VERDADEIRA.
fimse
```

**Exemplo prático:**
```portugol
algoritmo "CalculaDesconto"
var
  valor_compra: real
  valor_final: real
inicio
  escreva("Digite o valor total da compra: R$ ")
  leia(valor_compra)
  valor_final <- valor_compra
  se (valor_compra > 100.00) entao
    valor_final <- valor_compra * 0.90 // Aplica o desconto de 10%
    escreva("Parabéns! Você recebeu um desconto de 10%.\n")
  fimse
  escreva("O valor final a pagar é: R$ ", valor_final)
fimalgoritmo
```

### 4.2 A Condicional Composta (`Se...Então / Senao`)

Enquanto a condicional simples executa uma ação apenas se a condição for verdadeira, a condicional composta nos dá dois caminhos, criando uma **bifurcação** no fluxo do algoritmo.

Ela executa um bloco de código se a condição for `VERDADEIRA` e um **outro** bloco de código se a condição for `FALSA`. Com essa estrutura, temos a garantia de que um dos dois blocos será sempre executado.


**Estrutura em Portugol:**
```portugol
se (condicao_logica) entao
  // Bloco de código A
senao
  // Bloco de código B
fimse
```

**Exemplo prático:**
```portugol
algoritmo "ControleDeAcesso"
var
  idade_usuario: inteiro
inicio
  escreva("Digite sua idade para verificação: ")
  leia(idade_usuario)
  se (idade_usuario >= 18) entao
    escreva("Acesso permitido.\n")
  senao
    escreva("Acesso negado.\n")
  fimse
  escreva("Verificação concluída.")
fimalgoritmo
```

### 4.3 A Condicional Encadeada (`Se... / Senao Se... / Senao`)

Chegamos à estrutura mais completa, usada quando temos **três ou mais caminhos** possíveis para o nosso algoritmo. A condicional encadeada nos permite testar uma sequência de condições, uma após a outra.

O fluxo funciona da seguinte maneira:

1.  O algoritmo testa a primeira condição (`Se`). Se for verdadeira, ele executa o bloco correspondente e **ignora todas as outras condições**.
2.  Se a primeira for falsa, ele passa para a próxima condição (`Senao Se`). Se esta for verdadeira, ele executa o bloco dela e ignora o resto.
3.  O processo se repete para quantos `Senao Se` existirem.
4.  Se **nenhuma** das condições anteriores for verdadeira, o bloco final `Senao` é executado, servindo como uma opção "padrão" ou "caso contrário".


**Estrutura em Portugol:**
```portugol
se (condicao_1) entao
  // Bloco de código A
senao se (condicao_2) entao
  // Bloco de código B
senao
  // Bloco de código C
fimse
```

### Exemplo Prático: Status do Aluno (Aprovado, Recuperação ou Reprovado)

Este é o exemplo clássico e perfeito para esta estrutura. Precisamos classificar um aluno em três categorias diferentes com base em sua nota final.

**Problema:** Crie um algoritmo que leia a nota de um aluno.

- Se a nota for 7.0 ou maior, ele está "Aprovado".
- Se a nota for maior ou igual a 5.0, mas menor que 7.0, ele está em "Recuperação".
- Se a nota for menor que 5.0, ele está "Reprovado".


```portugol
algoritmo "StatusDoAluno"
var
  nota_final: real
inicio
  escreva("Digite a nota final do aluno (de 0 a 10): ")
  leia(nota_final)
  se (nota_final >= 7.0) entao
    escreva("Status: Aprovado!\n")
  senao se (nota_final >= 5.0) entao
    escreva("Status: Em Recuperação.\n")
  senao
    escreva("Status: Reprovado.\n")
  fimse
  escreva("Análise de notas concluída.")
fimalgoritmo
```

---

## Resumo

- **Condicional simples:** executa um bloco se a condição for verdadeira.
- **Condicional composta:** executa um bloco se for verdadeira, outro se for falsa.
- **Condicional encadeada:** permite múltiplos caminhos.

> [!TIP]
> Use condicionais para tornar seus algoritmos mais inteligentes e adaptáveis!
