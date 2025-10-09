# 3. Blocos de Construção de um Algoritmo

Todo algoritmo, do mais simples ao mais complexo, é construído a partir de alguns blocos fundamentais. Entender cada um deles é o primeiro passo para aprender a "pensar como um programador". São eles que nos permitem armazenar dados, processá-los e interagir com o usuário.

---

### 3.1 Variáveis e Constantes

Para que um programa seja útil, ele precisa manipular informações. Essas informações são guardadas em espaços na memória do computador. Nós damos nomes a esses espaços para podermos acessá-los e modificá-los facilmente.

#### Variáveis

Pense em uma **variável** como uma "caixa" etiquetada, onde você pode guardar um valor. O conteúdo da caixa pode mudar (variar) durante a execução do programa. Toda variável possui duas características principais:

1.  **Nome:** Um identificador único (ex: `idade`, `nome_usuario`, `preco_final`).
2.  **Tipo de Dado:** Define que tipo de informação a variável pode guardar (veremos os tipos em detalhes na próxima seção).

Em pseudocódigo, nós **declaramos** uma variável antes de usá-la, informando seu nome e tipo.

**Sintaxe:**
`DECLARE nome_da_variavel: TIPO`

**Exemplo:**
`DECLARE idade: INTEIRO`
`DECLARE nome_cliente: TEXTO`

#### Constantes

Uma **constante** é parecida com uma variável, mas com uma regra crucial: uma vez que um valor é atribuído a ela, ele **não pode mais ser alterado**. Elas são usadas para valores fixos que não devem mudar, como o valor de Pi (3.14159) ou o número máximo de tentativas em um jogo.

**Sintaxe:**
`CONSTANTE NOME_DA_CONSTANTE = VALOR`

**Exemplo:**
`CONSTANTE PI = 3.14159`
`CONSTANTE NUMERO_MAX_TENTATIVAS = 3`

### 3.2 Tipos de Dados Primitivos

Quando declaramos uma variável, precisamos informar ao computador que "tipo" de informação ela irá guardar. Isso é crucial porque o computador lida com números, textos e valores lógicos de maneiras muito diferentes. Os tipos de dados mais básicos e fundamentais, presentes em quase todas as linguagens, são chamados de primitivos.

Os quatro tipos primitivos essenciais são:

| Tipo        | Descrição                                                                                             | Exemplos                                      |
| :---------- | :---------------------------------------------------------------------------------------------------- | :-------------------------------------------- |
| **Inteiro** | Representa números inteiros, positivos ou negativos, sem casas decimais.                              | `-10`, `0`, `150`, `2025`                     |
| **Real**    | Representa números que podem ter casas decimais (também conhecidos como ponto flutuante).             | `-2.5`, `0.0`, `3.14159`, `99.99`             |
| **Texto**   | Representa uma sequência de caracteres (letras, números e símbolos). Geralmente delimitado por aspas. | `"Olá, mundo!"`, `"email@teste.com"`, `"123"` |
| **Lógico**  | Representa um de dois valores possíveis: verdadeiro ou falso. É a base para a tomada de decisões.     | `VERDADEIRO`, `FALSO`                         |

> [!IMPORTANT]
> Definir o tipo correto para uma variável é importante para evitar erros. Por exemplo, o programa não pode realizar uma operação matemática com uma variável do tipo **Texto**, e saber o tipo de dado ajuda o computador a otimizar o uso de memória.

### 3.3 Comandos de Entrada e Saída

Um algoritmo raramente trabalha de forma isolada. Ele precisa interagir com o usuário, seja para receber informações ou para mostrar resultados. Essa comunicação é feita através de comandos de Entrada (leitura de dados) e Saída (exibição de dados).

#### Entrada de Dados (`Leia`)

O comando de entrada pausa a execução do algoritmo e espera que o usuário digite alguma informação. O valor digitado pelo usuário é então armazenado em uma variável que especificamos. A palavra-chave comum para isso é `Leia`.

> [!NOTE]
> Uma boa prática é sempre exibir uma mensagem para o usuário (com o comando `Escreva`) antes de usar o comando `Leia`, para que ele saiba qual informação deve digitar.

**Exemplo:**

```pseudocode
DECLARE nome_usuario: TEXTO

// 1. Pede a informação para o usuário
Escreva("Por favor, digite o seu nome: ")

// 2. Pausa o programa e espera o usuário digitar.
// O valor digitado será guardado na variável 'nome_usuario'
Leia(nome_usuario)
```

#### Saída de Dados (`Escreva`)

O comando de saída é usado para exibir informações na tela. Podemos mostrar textos fixos, o conteúdo de variáveis, ou uma combinação de ambos. A palavra-chave mais comum em pseudocódigo para isso é `Escreva`.

**Exemplos:**

```pseudocode
// Exibindo uma mensagem de texto simples
Escreva("Seja bem-vindo ao programa!")

// Exibindo o conteúdo de uma variável
DECLARE nome_usuario: TEXTO
nome_usuario <- "Elton"
Escreva(nome_usuario)

// Combinando texto e variáveis
Escreva("O nome do usuário é: ", nome_usuario)
```

#### Exemplo Prático Completo

```pseudocode
Algoritmo "CalculadoraDeIdade"

// Seção de declaração de constantes e variáveis
CONSTANTE ANO_ATUAL = 2025
Var
  nome_usuario: Texto
  ano_nascimento: Inteiro
  idade_aproximada: Inteiro

// Início do algoritmo
Inicio

  // --- Entrada de Dados ---
  Escreva("Seja bem-vindo(a)! Qual é o seu nome? ")
  Leia(nome_usuario)

  Escreva("Olá, ", nome_usuario, "! Agora, por favor, digite o seu ano de nascimento: ")
  Leia(ano_nascimento)

  // --- Processamento ---
  idade_aproximada <- ANO_ATUAL - ano_nascimento

  // --- Saída de Dados ---
  Escreva("Obrigado pelas informações.")
  Escreva("Com base no ano atual (", ANO_ATUAL, "), sua idade aproximada é de ", idade_aproximada, " anos.")

FimAlgoritmo
```
