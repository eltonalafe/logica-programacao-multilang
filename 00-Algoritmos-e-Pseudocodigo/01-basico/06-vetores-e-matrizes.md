# 6. Vetores e Matrizes

Ao programar, cada variável criada até aqui era como uma caixa que guardava apenas um valor por vez. Imagine precisar armazenar as notas de 30 alunos: criar 30 variáveis (`nota_aluno1`, `nota_aluno2`, etc.) seria inviável e desorganizado.

Para resolver esse problema, usamos as **estruturas de dados**. As mais simples e fundamentais são os **vetores** e as **matrizes**. Elas permitem armazenar múltiplos valores do mesmo tipo em uma única variável, facilitando a organização e o processamento dos dados.

---

## 6.1 Vetores (Arrays Unidimensionais)

Um **vetor** é uma estrutura de dados unidimensional, como um "gaveteiro" ou uma lista numerada. É uma única variável com várias "gavetas" (posições), cada uma capaz de armazenar um valor.

**Principais características:**

- Todas as posições são acessadas por um **índice** numérico.
- Todos os elementos do vetor são do mesmo tipo.

> [!IMPORTANT]
> Na maioria das linguagens de programação, a contagem dos índices começa em **zero (0)**. Ou seja, a primeira posição é a 0, a segunda é a 1, e assim por diante. Um vetor de 5 posições terá os índices de 0 a 4.

**Como declarar um vetor em Portugol:**

```portugol
// Declaração de um vetor de 5 posições para guardar números inteiros
var
  numeros: vetor[0..4] de inteiro
```

### Exemplo de uso:

```portugol
algoritmo "AtribuicaoVetor"
var
  notas: vetor[0..3] de real // Vetor para 4 notas
inicio
  // Atribuindo valores às posições
  notas[0] <- 8.5   // Primeira posição (índice 0)
  notas[1] <- 7.0   // Segunda posição (índice 1)
  notas[2] <- 9.2
  notas[3] <- 6.8

  // Lendo e exibindo o valor de uma posição específica
  escreva("A nota do segundo aluno é: ", notas[1]) // Exibe 7.0

  // Modificando o valor de uma posição
  notas[1] <- 7.5
  escreva("A nova nota do segundo aluno é: ", notas[1]) // Exibe 7.5
fimalgoritmo
```

### Vetores e Laços de Repetição

A verdadeira força dos vetores aparece quando os combinamos com laços de repetição. Assim, podemos percorrer todas as posições do vetor automaticamente, seja para preenchê-lo ou para ler seus dados.

#### Exemplo prático: Lendo e exibindo notas

**Problema:** Crie um algoritmo que leia 4 notas e as armazene em um vetor. Depois, exiba todas as notas armazenadas.

```portugol
algoritmo "LeituraComVetor"
var
  notas: vetor[0..3] de real
  i: inteiro
inicio
  // Preenchendo o vetor
  escreval("--- Digite as 4 notas ---")
  para i de 0 ate 3 faca
    escreva("Digite a ", i + 1, "ª nota: ")
    leia(notas[i]) // 'i' representa o índice atual
  fimpara

  // Exibindo os valores do vetor
  escreval("")
  escreval("--- Notas Armazenadas ---")
  para i de 0 ate 3 faca
    escreval("A ", i + 1, "ª nota foi: ", notas[i])
  fimpara
fimalgoritmo
```

> [!NOTE]
> No Portugol, use `escreval` para pular uma linha após a mensagem, melhorando a formatação da saída no console.

---

## 6.2 Matrizes (Arrays Bidimensionais)

Uma **matriz** é uma evolução do vetor: enquanto o vetor é uma estrutura unidimensional (uma linha), a matriz é **bidimensional**, possuindo **linhas e colunas**. Pense nela como uma tabela ou planilha.

Para localizar um elemento em uma matriz, precisamos de **dois índices**: um para a linha e outro para a coluna.

**Como declarar uma matriz em Portugol:**

```portugol
// Declaração de uma matriz 3x4 (3 linhas e 4 colunas) para inteiros
// Linhas: índices 0 a 2 | Colunas: índices 0 a 3
var
  tabela: vetor[0..2, 0..3] de inteiro
```

### Laços aninhados para matrizes

Para percorrer todos os elementos de uma matriz, usamos laços aninhados: um laço `para` dentro de outro. O laço externo geralmente controla as linhas, e o interno, as colunas.

#### Exemplo prático: Boletim de notas

**Problema:** Crie um algoritmo para armazenar as 3 notas de 2 alunos em uma matriz. Depois, exiba a matriz completa no formato de tabela.

```portugol
algoritmo "BoletimComMatriz"
var
  // Matriz para 2 alunos (linhas 0 e 1) e 3 notas (colunas 0, 1 e 2)
  boletim: vetor[0..1, 0..2] de real
  aluno, nota: inteiro // Variáveis de controle
inicio
  // Preenchendo a matriz
  para aluno de 0 ate 1 faca
    escreval("--- Aluno ", aluno + 1, " ---")
    para nota de 0 ate 2 faca
      escreva("Digite a ", nota + 1, "ª nota: ")
      leia(boletim[aluno, nota]) // Dois índices: linha e coluna
    fimpara
  fimpara

  // Exibindo os valores da matriz
  escreval("")
  escreval("--- Quadro de Notas ---")
  para aluno de 0 ate 1 faca
    para nota de 0 ate 2 faca
      escreva(boletim[aluno, nota]:5:1) // 5 casas, 1 decimal
    fimpara
    escreval("") // Próxima linha para o próximo aluno
  fimpara
fimalgoritmo
```

---

## Resumo

- **Vetores** permitem armazenar vários valores do mesmo tipo em uma única variável, acessados por um índice.
- **Matrizes** são como tabelas, com linhas e colunas, acessadas por dois índices.
- O uso de laços de repetição (simples ou aninhados) facilita o preenchimento e a leitura dessas estruturas.

> [!TIP]
> Sempre preste atenção ao índice inicial (geralmente 0) para evitar erros de acesso fora dos limites do vetor ou matriz.
