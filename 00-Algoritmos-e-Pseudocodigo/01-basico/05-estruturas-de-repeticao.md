# 5. Estruturas de Repetição

Até agora, nossos algoritmos executam cada linha de código uma única vez. Com as estruturas condicionais, aprendemos a pular blocos de código, mas ainda não conseguimos executar o mesmo bloco várias vezes. É aqui que entram as **estruturas de repetição**, também conhecidas como **laços** ou **loops**.

Essas estruturas são um pilar da programação e permitem que um bloco de código seja executado repetidamente, seja um número fixo de vezes ou enquanto uma determinada condição continuar sendo verdadeira. Elas são a base da automação.

---

### 5.1 O Laço Condicional (`Enquanto...Faca`)

O laço `Enquanto` (ou `while` em muitas linguagens) é a estrutura de repetição mais fundamental. Ele funciona de maneira muito parecida com a estrutura condicional `Se`, mas com uma diferença crucial: ao final do bloco de código, ele **volta para o início e testa a condição novamente**.

O bloco de código interno continuará a ser executado repetidamente **enquanto** a condição lógica for `VERDADEIRA`. O laço termina no momento em que a condição se torna `FALSA`.

> [!WARNING] > **Cuidado com os Laços Infinitos!** Se a condição de um laço `Enquanto` nunca se tornar falsa, o programa ficará preso executando aquele bloco de código para sempre. É essencial garantir que algo dentro do laço altere a condição em algum momento.


**Estrutura em Portugol:**
```portugol
enquanto (condicao_logica) faca
  // Bloco de código a ser repetido
  // enquanto a condição for VERDADEIRA.
fimenquanto
```

**Exemplo prático:**
```portugol
algoritmo "ContagemSimples"
var
  contador: inteiro
inicio
  contador <- 1
  enquanto (contador <= 5) faca
    escreva(contador)
    contador <- contador + 1
  fimenquanto
  escreva("Fim da contagem!")
fimalgoritmo
```

#### Exemplo 2: Validação de Entrada do Usuário

Este é o cenário perfeito para o laço `Enquanto`: quando a repetição depende de uma ação do usuário, e não de um contador.

**Problema:** Crie um algoritmo que peça ao usuário para digitar uma senha. O programa só deve parar de pedir a senha quando o usuário digitar o valor correto, que é "1234".


```portugol
algoritmo "ValidacaoDeSenha"
var
  senha_correta: texto
  senha_digitada: texto
inicio
  senha_correta <- "1234"
  escreva("Digite a senha para acessar: ")
  leia(senha_digitada)
  enquanto (senha_digitada <> senha_correta) faca
    escreva("Acesso negado. Tente novamente: ")
    leia(senha_digitada)
  fimenquanto
  escreva("---\nSenha correta! Acesso permitido.")
fimalgoritmo
```

### 5.2 O Laço Contado (`Para...Faca`)

Enquanto o laço `Enquanto` é ideal para repetições onde não sabemos o número exato de iterações (ex: "repita até o usuário digitar a senha certa"), o laço `Para` (ou `for` loop) foi projetado especificamente para situações onde precisamos repetir um bloco de código um **número predefinido de vezes**.

Ele é mais seguro para contagens porque a **inicialização**, a **condição** e o **incremento** da variável de controle são definidos em uma única linha, tornando muito mais difícil criar um laço infinito acidentalmente.


**Estrutura em Portugol:**
```portugol
para variavel de valor_inicial ate valor_final faca
  // Bloco de código a ser repetido.
fimpara
```

**Exemplo prático:**
```portugol
algoritmo "ContagemComPara"
var
  contador: inteiro
inicio
  para contador de 1 ate 5 faca
    escreva(contador)
  fimpara
  escreva("Fim da contagem!")
fimalgoritmo
```

### 5.3 Contadores e Acumuladores

Laços de repetição são poderosos porque nos permitem analisar uma série de dados. Dentro desses laços, frequentemente precisamos guardar informações sobre o que aconteceu durante as repetições. As duas ferramentas mais comuns para isso são os contadores e os acumuladores.

#### Contadores

Um **contador** é uma variável, geralmente do tipo `Inteiro`, usada para... contar! Sua função é registrar o número de vezes que um determinado evento ou condição ocorreu dentro de um laço.

A lógica é sempre a mesma:

1.  Inicialize o contador com `0` antes do laço.
2.  Dentro do laço, quando o evento desejado acontecer, **incremente** o contador em `1` (`contador <- contador + 1`).

**Exemplo Prático: Contando Números Pares**

**Problema:** Crie um algoritmo que leia 5 números e, ao final, diga quantos deles eram pares.


```portugol
algoritmo "ContaNumerosPares"
var
  i, valor, qtde_pares: inteiro
inicio
  qtde_pares <- 0
  para i de 1 ate 5 faca
    escreva("Digite o ", i, "º valor: ")
    leia(valor)
    se (valor % 2 = 0) entao
      qtde_pares <- qtde_pares + 1
    fimse
  fimpara
  escreva("---\nVocê digitou ", qtde_pares, " números pares.")
fimalgoritmo
```

# Acumuladores

Um **acumulador** é uma variável usada para somar (acumular) uma série de valores. A cada volta do laço, um novo valor é adicionado ao total que já existe no acumulador.

A lógica é muito parecida com a do contador:

1.  **Inicialize** o acumulador com `0` antes do laço.
2.  **Dentro do laço**, some o novo valor ao acumulador (`acumulador <- acumulador + novo_valor`).

---

### Exemplo Prático: Calculando a Soma de Notas

**Problema:** Crie um algoritmo que leia 4 notas de um aluno e, ao final, mostre a soma total dessas notas.

#### Snippet de código


```portugol
algoritmo "SomaNotas"
var
  i: inteiro
  nota, soma_notas: real
inicio
  soma_notas <- 0.0
  para i de 1 ate 4 faca
    escreva("Digite a ", i, "ª nota: ")
    leia(nota)
    soma_notas <- soma_notas + nota
  fimpara
  escreva("---\nA soma de todas as notas é: ", soma_notas)
fimalgoritmo
```


> [!NOTE]
> A principal diferença é que um contador sempre incrementa um valor fixo (geralmente +1), enquanto um acumulador incrementa um valor variável (o valor que está sendo analisado a cada volta do laço).

---

## Resumo

- **Laço enquanto:** repete enquanto a condição for verdadeira.
- **Laço para:** repete um número fixo de vezes.
- **Contador:** soma +1 a cada evento.
- **Acumulador:** soma valores variáveis.

> [!TIP]
> Use laços para automatizar tarefas repetitivas e processar grandes volumes de dados!
