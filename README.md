## Getting Started

## Node

node-version: 18.15.0

## Start local

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

ここうまくいかなかったので一旦保留

```bash
yarn add -D simple-git-hooks lint-staged
```

## Mantine UI を追加

```
yarn add @mantine/core @mantine/hooks @mantine/modals @mantine/tiptap @tabler/icons-react @tiptap/react @tiptap/extension-link @tiptap/starter-kit @mantine/notifications @mantine/dates dayjs @mantine/next @emotion/server @emotion/react
```

その後、\_document.tsx と\_app.tsx を修正する
