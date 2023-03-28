## Getting Started

## Node

node-version: 18.15.0

開発サーバーを起動する:

```bash
yarn dev
```

## Install Command

### ESLint & Prettier

```bash
yarn add --dev eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
yarn add -D eslint-plugin-react-hooks
```

設定ファイルを作成

```bash
touch .eslintrc.json .eslintignore
touch .prettierrc.json .prettierignore
```

## Git の操作を hook する

```bash
yarn add -D simple-git-hooks lint-staged
```
