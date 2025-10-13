# 5. Estruturas de Repetição

Até agora, nossos algoritmos executam cada linha de código uma única vez. Com as estruturas condicionais, aprendemos a pular blocos de código, mas ainda não conseguimos executar o mesmo bloco várias vezes. É aqui que entram as **estruturas de repetição**, também conhecidas como **laços** ou **loops**.

Essas estruturas são um pilar da programação e permitem que um bloco de código seja executado repetidamente, seja um número fixo de vezes ou enquanto uma determinada condição continuar sendo verdadeira. Elas são a base da automação.

---

### 5.1 O Laço Condicional (`Enquanto...Faca`)

O laço `Enquanto` (ou `while` em muitas linguagens) é a estrutura de repetição mais fundamental. Ele funciona de maneira muito parecida com a estrutura condicional `Se`, mas com uma diferença crucial: ao final do bloco de código, ele **volta para o início e testa a condição novamente**.

O bloco de código interno continuará a ser executado repetidamente **enquanto** a condição lógica for `VERDADEIRA`. O laço termina no momento em que a condição se torna `FALSA`.

> [!WARNING] > **Cuidado com os Laços Infinitos!** Se a condição de um laço `Enquanto` nunca se tornar falsa, o programa ficará preso executando aquele bloco de código para sempre. É essencial garantir que algo dentro do laço altere a condição em algum momento.

**Estrutura em Pseudocódigo:**

```pseudocode
Enquanto (condição_logica) Faca
  // Bloco de código a ser repetido
  // enquanto a condição for VERDADEIRA.

  // É crucial que algo aqui dentro
  // possa, eventualmente, tornar a condição FALSA.
FimEnquanto

//Exemplo Prático

Algoritmo "ContagemSimples"
Var
  contador: Inteiro

Inicio
  // 1. Inicialização: O contador começa em 1.
  contador <- 1

  // 2. Condição: O laço continua ENQUANTO o contador for menor ou igual a 5.
  Enquanto (contador <= 5) Faca
    // 3. Ação: Exibe o valor atual do contador.
    Escreva(contador)

    // 4. Incremento: Aumenta o valor do contador em 1.
    // Esta é a parte mais importante para evitar um laço infinito!
    contador <- contador + 1
  FimEnquanto

  Escreva("Fim da contagem!")
FimAlgoritmo
```

#### Exemplo 2: Validação de Entrada do Usuário

Este é o cenário perfeito para o laço `Enquanto`: quando a repetição depende de uma ação do usuário, e não de um contador.

**Problema:** Crie um algoritmo que peça ao usuário para digitar uma senha. O programa só deve parar de pedir a senha quando o usuário digitar o valor correto, que é "1234".

```pseudocode
Algoritmo "ValidacaoDeSenha"
Var
  senha_correta: Texto
  senha_digitada: Texto

Inicio
  // Definimos a senha que o sistema espera
  senha_correta <- "1234"

  // Pedimos a senha pela primeira vez, antes de entrar no laço
  Escreva("Digite a senha para acessar: ")
  Leia(senha_digitada)

  // O laço continua ENQUANTO a senha digitada for DIFERENTE da correta
  Enquanto (senha_digitada <> senha_correta) Faca
    // Ação: Informa que a senha está errada e pede novamente
    Escreva("Acesso negado. Tente novamente: ")
    Leia(senha_digitada)
  FimEnquanto

  // Esta linha só será alcançada quando o laço terminar,
  // ou seja, quando a senha correta for digitada.
  Escreva("---")
  Escreva("Senha correta! Acesso permitido.")
FimAlgoritmo
```

### 5.2 O Laço Contado (`Para...Faca`)

Enquanto o laço `Enquanto` é ideal para repetições onde não sabemos o número exato de iterações (ex: "repita até o usuário digitar a senha certa"), o laço `Para` (ou `for` loop) foi projetado especificamente para situações onde precisamos repetir um bloco de código um **número predefinido de vezes**.

Ele é mais seguro para contagens porque a **inicialização**, a **condição** e o **incremento** da variável de controle são definidos em uma única linha, tornando muito mais difícil criar um laço infinito acidentalmente.

**Estrutura em Pseudocódigo:**

```pseudocode
Para variavel De valor_inicial Ate valor_final Faca
  // Bloco de código a ser repetido.
  // A 'variavel' é automaticamente incrementada a cada volta.
FimPara

// Exemplo Prático

Algoritmo "ContagemComPara"
Var
  contador: Inteiro

Inicio
  // A inicialização (contador começa em 1),
  // a condição (vai ATÉ 5) e o incremento (passo de 1 em 1)
  // estão todos definidos nesta única linha.
  Para contador De 1 Ate 5 Faca
    Escreva(contador)
  FimPara

  Escreva("Fim da contagem!")
FimAlgoritmo
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

```pseudocode
Algoritmo "ContaNumerosPares"
Var
  i, valor, qtde_pares: Inteiro

Inicio
  // 1. Inicializamos o contador de pares com zero
  qtde_pares <- 0

  Para i De 1 Ate 5 Faca
    Escreva("Digite o ", i, "º valor: ")
    Leia(valor)

    // Verifica se o resto da divisão por 2 é zero
    Se (valor % 2 = 0) Então
      // 2. Se for par, incrementamos nosso contador
      qtde_pares <- qtde_pares + 1
    FimSe
  FimPara

  Escreva("---")
  Escreva("Você digitou ", qtde_pares, " números pares.")
FimAlgoritmo
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
Algoritmo "SomaNotas"
Var
  i: Inteiro
  nota, soma_notas: Real

Inicio
  // 1. Inicializamos o acumulador com zero
  soma_notas <- 0.0

  Para i De 1 Ate 4 Faca
    Escreva("Digite a ", i, "ª nota: ")
    Leia(nota)

    // 2. Acumulamos a nota lida na variável 'soma_notas'
    soma_notas <- soma_notas + nota
  FimPara

  Escreva("---")
  Escreva("A soma de todas as notas é: ", soma_notas)
FimAlgoritmo
```

[!NOTE]
A principal diferença é que um contador sempre incrementa um valor fixo (geralmente +1),  
enquanto um acumulador incrementa um valor variável (o valor que está sendo analisado a cada volta do laço).
