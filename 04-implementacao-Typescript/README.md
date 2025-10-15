# 📦 Implementação em TypeScript

Este módulo traz a implementação prática dos conceitos de lógica e algoritmos usando TypeScript, seguindo a mesma ordem e temas do módulo teórico.

---

## 🚀 Como rodar os exemplos em TypeScript

1. Certifique-se de ter o [Node.js](https://nodejs.org/) e o [TypeScript](https://www.typescriptlang.org/) instalados.
2. Navegue até a pasta do exemplo desejado.
3. Compile o arquivo TypeScript:
   ```bash
   tsc nome-do-arquivo.ts
   ```
4. Execute o arquivo JavaScript gerado:
   ```bash
   node nome-do-arquivo.js
   ```

---

## 🧪 Como rodar os testes unitários

Este projeto utiliza o framework [Jest](https://jestjs.io/) para testes automatizados.

1. Instale as dependências de desenvolvimento (se ainda não fez):

```bash
npm install --save-dev jest @types/jest ts-jest
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

3. Os testes ficam na pasta `test/` e seguem o padrão `*.test.ts`.

---

## 📚 Conteúdo

- [01 - Básico](./01-basico/)
  - Entrada/Saída de Dados, Condicionais, Repetição, Vetores e Matrizes
- [02 - Intermediário](./02-intermediario/)
  - Funções, Recursão, Ordenação, Busca, Estruturas Lineares
- [03 - Avançado](./03-avancado/)
  - Hash Tables, Árvores, Grafos, Paradigmas Algorítmicos

---

## 🔗 Voltar para o [README principal](../README.md)
