# 3. Blocos de Construção de um Algoritmo

Todo algoritmo, do mais simples ao mais complexo, é construído a partir de alguns blocos fundamentais. Entender cada um deles é o primeiro passo para aprender a "pensar como um programador". São eles que nos permitem armazenar dados, processá-los e interagir com o usuário.

---

### 3.1 Variáveis e Constantes

Para que um programa seja útil, ele precisa manipular informações. Essas informações são guardadas em espaços na memória do computador. Nós damos nomes a esses espaços para podermos acessá-los e modificá-los facilmente.

#### Variáveis

Pense em uma **variável** como uma "caixa" etiquetada, onde você pode guardar um valor. O conteúdo da caixa pode mudar (variar) durante a execução do programa. Toda variável possui duas características principais:

1.  **Nome:** Um identificador único (ex: `idade`, `nome_usuario`, `preco_final`).
2.  **Tipo de Dado:** Define que tipo de informação a variável pode guardar (veremos os tipos em detalhes na próxima seção).


Em Portugol, declaramos uma variável antes de usá-la, informando seu nome e tipo.

**Exemplo:**
```portugol
var
  idade: inteiro
  nome_cliente: texto
```

#### Constantes

Uma **constante** é parecida com uma variável, mas com uma regra crucial: uma vez que um valor é atribuído a ela, ele **não pode mais ser alterado**. Elas são usadas para valores fixos que não devem mudar, como o valor de Pi (3.14159) ou o número máximo de tentativas em um jogo.


**Exemplo:**
```portugol
constante PI = 3.14159
constante NUMERO_MAX_TENTATIVAS = 3
```

### 3.2 Tipos de Dados Primitivos

Quando declaramos uma variável, precisamos informar ao computador que "tipo" de informação ela irá guardar. Isso é crucial porque o computador lida com números, textos e valores lógicos de maneiras muito diferentes. Os tipos de dados mais básicos e fundamentais, presentes em quase todas as linguagens, são chamados de primitivos.

Os quatro tipos primitivos essenciais são:


| Tipo      | Descrição                                                        | Exemplos                  |
| :-------- | :--------------------------------------------------------------- | :------------------------ |
| **inteiro** | Números inteiros, positivos ou negativos, sem casas decimais.     | `-10`, `0`, `150`, `2025` |
| **real**    | Números que podem ter casas decimais (ponto flutuante).           | `-2.5`, `0.0`, `3.14`     |
| **texto**   | Sequência de caracteres (letras, números, símbolos).              | `"Olá"`, `"123"`          |
| **logico**  | Dois valores possíveis: verdadeiro ou falso.                      | `verdadeiro`, `falso`     |

> [!IMPORTANT]
> Definir o tipo correto para uma variável é importante para evitar erros. Por exemplo, o programa não pode realizar uma operação matemática com uma variável do tipo **Texto**, e saber o tipo de dado ajuda o computador a otimizar o uso de memória.

### 3.3 Comandos de Entrada e Saída

Um algoritmo raramente trabalha de forma isolada. Ele precisa interagir com o usuário, seja para receber informações ou para mostrar resultados. Essa comunicação é feita através de comandos de Entrada (leitura de dados) e Saída (exibição de dados).


### Entrada de Dados (`leia`)

O comando de entrada pausa a execução do algoritmo e espera que o usuário digite alguma informação. O valor digitado é armazenado em uma variável.

> [!NOTE]
> Sempre exiba uma mensagem para o usuário (com `escreva`) antes de usar `leia`, para que ele saiba o que digitar.

**Exemplo:**
```portugol
var
  nome_usuario: texto
inicio
  escreva("Por favor, digite o seu nome: ")
  leia(nome_usuario)
fimalgoritmo
```


### Saída de Dados (`escreva`)

O comando de saída exibe informações na tela. Pode mostrar textos fixos, o conteúdo de variáveis ou ambos.

**Exemplo:**
```portugol
escreva("Bem-vindo ao programa!")
escreva("O nome do usuário é: ", nome_usuario)
```


#### Exemplo Prático Completo

```portugol
algoritmo "CalculadoraDeIdade"
constante ANO_ATUAL = 2025
var
  nome_usuario: texto
  ano_nascimento: inteiro
  idade_aproximada: inteiro
inicio
  escreva("Seja bem-vindo(a)! Qual é o seu nome? ")
  leia(nome_usuario)
  escreva("Olá, ", nome_usuario, "! Agora, por favor, digite o seu ano de nascimento: ")
  leia(ano_nascimento)
  idade_aproximada <- ANO_ATUAL - ano_nascimento
  escreva("Obrigado pelas informações.\n")
  escreva("Com base no ano atual (", ANO_ATUAL, "), sua idade aproximada é de ", idade_aproximada, " anos.")
fimalgoritmo
```

---

## Resumo

- **Variáveis** armazenam dados que podem mudar.
- **Constantes** armazenam valores fixos.
- **Tipos primitivos**: inteiro, real, texto, lógico.
- **Entrada**: `leia` | **Saída**: `escreva`.

> [!TIP]
> Sempre declare variáveis e constantes antes de usá-las e escolha o tipo de dado adequado!
