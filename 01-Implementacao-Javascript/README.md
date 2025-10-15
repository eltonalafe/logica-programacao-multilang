# 📦 Implementação em JavaScript

Bem-vindo! Este módulo traz a implementação prática dos conceitos de lógica e algoritmos usando JavaScript, seguindo a mesma ordem e temas do módulo teórico.

---

## Para quem nunca programou

- **O que é Node.js?**
  Node.js é um programa que permite rodar códigos JavaScript fora do navegador, direto no seu computador. Baixe e instale em: [nodejs.org](https://nodejs.org/)

- **Como saber se já tenho Node.js?**
  Abra o terminal (Prompt de Comando, PowerShell, Terminal do VS Code, etc.) e digite:

  ```bash
  node -v
  ```

  Se aparecer um número de versão (ex: v18.0.0), está instalado!

- **Como abrir o terminal?**

  - Windows: Pesquise por "Prompt de Comando" ou "PowerShell".
  - Mac: Use o aplicativo "Terminal".
  - Linux: Use o terminal padrão do sistema.
  - No VS Code: Menu "Terminal" > "Novo Terminal".

- ** Sugestão de editor: **
  Baixe o [VS Code](https://code.visualstudio.com/) para editar e explorar os arquivos do projeto.

---

## 🚀 Como rodar os exemplos em JavaScript

1. Instale o Node.js (veja acima).
2. No terminal, navegue até esta pasta do projeto:
   ```bash
   cd 01-Implementacao-Javascript
   ```
3. Instale as dependências (se houver):
   ```bash
   npm install
   ```
4. Para rodar um exemplo específico, navegue até a subpasta desejada e execute:
   ```bash
   node nome-do-arquivo.js
   ```
5. Ou utilize o script padrão:
   ```bash
   npm start
   ```

---

## 🧪 Como rodar os testes unitários

Este projeto utiliza o framework [Jest](https://jestjs.io/) para testes automatizados.

1. Instale as dependências de desenvolvimento (se ainda não fez):

```bash
npm install --save-dev jest
```

2. Para rodar todos os testes:

```bash
npx jest
```

Ou, se preferir, adicione ao package.json:

```json
"scripts": {
  "test": "jest"
}
```

E rode:

```bash
npm test
```

3. Os testes ficam na pasta `test/` e seguem o padrão `*.test.js`.

---

## Estrutura dos arquivos

Cada arquivo desta pasta representa um conceito do módulo teórico [00-Algoritmos-e-Pseudocodigo](../00-Algoritmos-e-Pseudocodigo/README.md), a partir do arquivo `03-blocos-de-construcao.md` em diante. Consulte sempre o material teórico correspondente para entender o conceito antes de ver o código.

Exemplo:

- `01-basico/01-variaveis-e-io.js` → Reflete o conteúdo de "Blocos de Construção" (variáveis, tipos, entrada/saída)
- `01-basico/04-estruturas-condicionais.js` → Reflete "Estruturas Condicionais"

---

## 📚 Conteúdo

- [01 - Básico](./01-basico/)
  - Entrada/Saída de Dados, Condicionais, Repetição, Vetores e Matrizes
- [02 - Intermediário](./02-intermediario/)
  - Funções, Recursão, Ordenação, Busca, Estruturas Lineares
- [03 - Avançado](./03-avancado/)
  - Hash Tables, Árvores, Grafos, Paradigmas Algorítmicos

---

## 🔗 Links úteis

- [Download Node.js](https://nodejs.org/)
- [Download VS Code](https://code.visualstudio.com/)
- [Documentação oficial do JavaScript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Playlist YouTube: Lógica de Programação em JS](https://www.youtube.com/results?search_query=l%C3%B3gica+de+programa%C3%A7%C3%A3o+javascript)

---

## 🤗 Dica final

Não tenha medo de experimentar! Modifique os exemplos, rode novamente, erre e aprenda. Programar é prática!

---

## 🔗 Voltar para o [README principal](../README.md)
