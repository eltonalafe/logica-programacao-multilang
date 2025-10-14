# 2. Formas de Representação de Algoritmos

Um algoritmo, em sua essência, é uma ideia, um plano lógico. Para que possamos trabalhar com essa ideia, precisamos representá-la de uma forma concreta e compreensível. Existem três maneiras principais de se fazer isso, cada uma com suas vantagens e desvantagens.

---

### 2.1 Descrição Narrativa

É a forma mais simples e intuitiva de representar um algoritmo. Consiste em descrever os passos usando a nossa linguagem natural (no nosso caso, o Português), como se estivéssemos explicando o processo para outra pessoa.

- **Vantagem:** Fácil de criar para problemas simples e não requer conhecimento técnico.
- **Desvantagem:** Altamente propensa a **ambiguidades**. O que é claro para uma pessoa pode ser confuso para outra. Não é precisa o suficiente para problemas complexos.

#### Exemplo: Algoritmo "CalcularMedia" em Descrição Narrativa

> "Primeiro, o programa deve pedir para o usuário digitar o primeiro número e guardar esse valor. Depois, ele deve pedir o segundo número e também guardá-lo. Em seguida, o programa deve somar os dois números que foram guardados e dividir o resultado por dois para encontrar a média. Por fim, ele deve mostrar o resultado da média na tela."

---

### 2.2 Fluxograma

O fluxograma é a representação **visual** de um algoritmo. Ele utiliza símbolos geométricos padronizados para representar cada tipo de ação (como processamento, decisão, entrada de dados, etc.), e setas para conectar os passos e mostrar o "fluxo" da lógica.

- **Vantagem:** Excelente para visualizar o fluxo de controle de um programa, especialmente onde há muitas decisões e caminhos diferentes. Facilita o entendimento da lógica para pessoas não-técnicas.
- **Desvantagem:** Pode se tornar muito grande e complexo para algoritmos longos, dificultando a criação e a manutenção.

#### Símbolos Comuns do Fluxograma

| Símbolo             | Nome           | Descrição                                                                           |
| :------------------ | :------------- | :---------------------------------------------------------------------------------- |
| ** oval **          | Terminal       | Indica o **Início** ou **Fim** do algoritmo.                                        |
| ** paralelogramo ** | Entrada/Saída  | Representa o recebimento de dados (`Leia`) ou a exibição de resultados (`Escreva`). |
| ** retângulo **     | Processamento  | Indica um cálculo ou uma atribuição de valor (ex: `media <- (n1 + n2) / 2`).        |
| ** losango **       | Decisão        | Representa uma condição (`Se...Então`) que divide o fluxo em dois ou mais caminhos. |
| ** Seta **          | Linha de Fluxo | Conecta os símbolos e indica a ordem de execução.                                   |

#### Exemplo: Fluxograma do Algoritmo "CalcularMedia"

> [!TIP]
> A melhor prática é usar uma ferramenta online e gratuita como o **[diagrams.net](https://app.diagrams.net/)** (antigo draw.io) para criar seu fluxograma.

![Fluxograma do Algoritmo CalcularMedia](../_assets/fluxograma-calcular-media.png)

---

### 2.3 Pseudocódigo

O pseudocódigo é a forma de representação mais utilizada por desenvolvedores. É um meio-termo entre a linguagem humana e uma linguagem de programação real. Ele usa uma sintaxe estruturada e palavras-chave, mas de uma forma que ainda é legível e agnóstica de linguagem.

- **Vantagem:** É preciso, estruturado e remove as ambiguidades da descrição narrativa. É a **ponte perfeita** para a codificação final, pois sua estrutura é muito similar à de uma linguagem de programação real.
- **Desvantagem:** Exige o aprendizado de suas palavras-chave e regras de estruturação.

#### Exemplo: Algoritmo "CalcularMedia" em Pseudocódigo

```pseudocode
Algoritmo "CalcularMedia"
// Seção de declaração de variáveis
Var
  numero1: Inteiro
  numero2: Inteiro
  media: Real
// Início do algoritmo
Inicio
  Escreva("Digite o primeiro número: ")
  Leia(numero1)

  Escreva("Digite o segundo número: ")
  Leia(numero2)

  media <- (numero1 + numero2) / 2

  Escreva("A média é: ", media)
FimAlgoritmo
```
