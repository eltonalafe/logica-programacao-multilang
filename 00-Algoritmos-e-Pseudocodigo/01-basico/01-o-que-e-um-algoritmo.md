# 1. O que é um Algoritmo?

## Conceito Central

Um **algoritmo** pode ser comparado a uma receita de bolo: ele define os ingredientes (entradas), o passo a passo (processamento) e o resultado final (saída).

> [!NOTE]
> **Definição formal:** Uma sequência **finita** de **passos bem definidos** e lógicos para resolver um problema ou executar uma tarefa.

O objetivo de um bom algoritmo é ser tão claro que não haja margem para dúvidas, permitindo que um computador (que não tem intuição) o execute sem erros.

---

## Por que Algoritmos são Importantes?

Estudar algoritmos é fundamental porque:

- **Eficiência:** Permite encontrar soluções rápidas e econômicas para problemas.
- **Escalabilidade:** Um bom algoritmo funciona para poucos ou muitos dados.
- **Clareza e Manutenção:** Algoritmos claros são mais fáceis de entender, corrigir e melhorar.
- **Reutilização:** Um algoritmo pode ser adaptado para resolver problemas similares.

---

## Propriedades Essenciais de um Algoritmo

Todo algoritmo válido deve possuir cinco características fundamentais:

| Propriedade     | Descrição                                                                          |
| :-------------- | :--------------------------------------------------------------------------------- |
| **Finitude**    | Deve terminar em um número finito de passos. Não pode haver loops infinitos.       |
| **Definição**   | Cada passo deve ser preciso e sem ambiguidade (ex: "some 5", não "some um pouco"). |
| **Entradas**    | Recebe zero ou mais dados para trabalhar.                                          |
| **Saídas**      | Produz pelo menos um resultado.                                                    |
| **Efetividade** | Cada passo deve ser simples o suficiente para ser executado por um computador.     |

---

## Exemplos de Algoritmos no Dia a Dia

Você encontra algoritmos em:

- **GPS (Waze, Google Maps):** Calcula a rota mais curta ou rápida.
- **Feed de Redes Sociais:** Decide quais posts mostrar para você.
- **Streaming (Netflix, Spotify):** Sugere filmes e músicas.
- **Busca do Google:** Rankeia bilhões de páginas para te dar a resposta mais relevante.

---

## Exemplos em Portugol

### Exemplo 1: Cálculo Matemático

Este exemplo mostra o fluxo básico de entrada, processamento e saída.

```portugol
algoritmo "CalcularMedia"
var
  numero1: inteiro
  numero2: inteiro
  media: real
inicio
  escreva("Digite o primeiro número: ")
  leia(numero1)
  escreva("Digite o segundo número: ")
  leia(numero2)
  media <- (numero1 + numero2) / 2
  escreva("A média é: ", media)
fimalgoritmo
```

### Exemplo 2: Lógica (Não-numérico)

Algoritmos não são apenas sobre números, mas também sobre lógica e tomada de decisão.

```portugol
algoritmo "VerificarGuardaChuva"
var
  vai_chover: logico
inicio
  escreva("Vai chover hoje? (verdadeiro/falso): ")
  leia(vai_chover)
  se (vai_chover) entao
    escreva("Leve o guarda-chuva!")
  senao
    escreva("Pode sair sem guarda-chuva.")
  fimse
fimalgoritmo
```

---

## Resumo

- Algoritmo é uma sequência de passos claros para resolver um problema.
- Deve ser finito, definido, ter entradas, saídas e ser efetivo.
- Está presente em diversas situações do dia a dia e é a base da programação.

> [!TIP]
> Sempre escreva algoritmos de forma clara e sem ambiguidades!
Algoritmo "VerificarGuardaChuva"
Var
esta_chovendo: Logico
Inicio
Escreva("Está chovendo lá fora? (responda com Verdadeiro ou Falso)")
Leia(esta_chovendo)

Se (esta_chovendo == Verdadeiro) Então
  Escreva("Leve um guarda-chuva!")
Senão
  Escreva("Você não precisa de um guarda-chuva.")
FimSe
FimAlgoritmo
```
