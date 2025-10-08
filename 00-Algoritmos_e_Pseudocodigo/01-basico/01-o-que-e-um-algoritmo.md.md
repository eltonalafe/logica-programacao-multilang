# 1. O que é um Algoritmo?

## Conceito Central

A forma mais simples de pensar em um algoritmo é compará-lo a uma **receita de bolo**. Ele nos dá os ingredientes (entradas), o passo a passo (processamento) e o resultado final (saída).

> [!NOTE]
> A definição formal é: Uma sequência **finita** de **passos bem definidos** e lógicos para resolver um problema ou executar uma tarefa.

O objetivo de um bom algoritmo é ser uma "receita" tão clara que não haja margem para dúvidas, permitindo que um computador (que não tem intuição) a execute sem erros.

---

## ✨ Por que Algoritmos são Importantes?

Estudar algoritmos não é apenas um exercício acadêmico. Eles são a base de toda a tecnologia que usamos e nos ensinam a pensar de forma estruturada. Os principais benefícios são:

- **Eficiência:** Aprender a criar algoritmos nos ensina a encontrar a solução mais rápida e econômica (em termos de uso de memória e processamento) para um problema.
- **Escalabilidade:** Um algoritmo bem-feito funciona bem não só para 10 itens, mas também para 10 milhões.
- **Clareza e Manutenção:** Um algoritmo claro é mais fácil de ser entendido, corrigido e melhorado no futuro, tanto por você quanto por outros desenvolvedores.
- **Reutilização:** Muitas vezes, um algoritmo criado para um problema pode ser adaptado para resolver outros problemas similares.

---

## 🔑 Propriedades Essenciais

Todo algoritmo válido deve possuir cinco características fundamentais:

| Propriedade     | Descrição                                                                          |
| :-------------- | :--------------------------------------------------------------------------------- |
| **Finitude**    | Deve terminar em um número finito de passos. Não pode haver loops infinitos.       |
| **Definição**   | Cada passo deve ser preciso e sem ambiguidade (ex: "some 5", não "some um pouco"). |
| **Entradas**    | Recebe zero ou mais dados para trabalhar.                                          |
| **Saídas**      | Produz pelo menos um resultado.                                                    |
| **Efetividade** | Cada passo deve ser simples o suficiente para ser executado por um computador.     |

---

## 💡 Exemplos de Algoritmos no Dia a Dia

Nós usamos e somos impactados por algoritmos o tempo todo, mesmo sem perceber:

- **GPS (Waze, Google Maps):** Usa algoritmos para calcular a rota mais curta ou mais rápida entre dois pontos.
- **Feed de Redes Sociais:** Um algoritmo decide quais posts e stories mostrar para você, baseado nos seus interesses.
- **Streaming (Netflix, Spotify):** Algoritmos de recomendação sugerem filmes e músicas que você provavelmente vai gostar.
- **Busca do Google:** Um algoritmo extremamente complexo que ranqueia bilhões de páginas para te dar a resposta mais relevante.

---

## 📝 Exemplos em Pseudocódigo

### Exemplo 1: Cálculo Matemático

Este exemplo clássico demonstra o fluxo básico de entrada, processamento e saída.

"CalcularMedia"

```pseudocode
Algoritmo "CalcularMedia"
Var
  numero1: Inteiro
  numero2: Inteiro
  media: Real
Inicio
  Escreva("Digite o primeiro número: ")
  Leia(numero1)
  Escreva("Digite o segundo número: ")
  Leia(numero2)
  media <- (numero1 + numero2) / 2
  Escreva("A média é: ", media)
FimAlgoritmo
```

### Exemplo 2: Lógica (Não-numérico)

Algoritmos não são apenas sobre números. Eles são sobre seguir uma lógica para tomar decisões.

"VerificarGuardaChuva"

```pseudocode
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
