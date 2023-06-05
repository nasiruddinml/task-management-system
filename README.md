# TMS Task Management System 🚀🎉⚡️

**TMS Task Management System web applications!**

## Synopsis

This project is an opinionated setup for modern web applications.
It's a combination of essential (and minimal) libraries/components/utils/etc., which developers usually need during the process of making modern React applications.

## Motivation

In the bustling town of Moneyville, a team of ambitious developers and designers were working tirelessly to create innovative solutions for task management. They understood the importance of efficient task tracking and collaboration, which led them to envision a cutting-edge TaskManagement System (TMS). The TMS aimed to simplify the lives of individuals and teams by providing a seamless and intuitive platform to manage their daily tasks. 💚

## Features

- ✅ [Nextjs](#nextjs)
- ✅ [React](#react)
  - `v18 with server component` 🔥
- ✅ [TypeScript](#typescript)
- ✅ [App Router](#router)
  - `New game changing next app route folder`
- ✅ [Store](#store)
  - `Redux with Redux toolkit`
- ✅ [Base file/folder structure](#base-filefolder-structure)
- ✅ [Atomic Component](#components)
- ✅ [Dev tools](#dev-tools)
  - ✅ eslint
  - ✅ prettier
  - ✅ husky
  - ✅ lint-staged
  - ✅ commit-lint

#### Nextjs
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### React

The latest version [React](https://reactjs.org/) v18 is used here.

#### TypeScript

"Not using [TypeScript](https://www.typescriptlang.org/) is like driving without a seatbelt" - [Matt Howard](https://twitter.com/MattDotHow).

For those who are not familiar with `TypeScript` - don't worry, you will love it, as we all did. `TypeScript` is a superset of `JavaScript`; it should be very easy to work with if you know `JavaScript`.

#### Router

In version 13, Next.js introduced a new [App Router](https://nextjs.org/docs/app/building-your-application/routing) built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.

#### Store

As a store management tool [Redux Toolkit](https://redux-toolkit.js.org/) is used. Check the [src/store](./src/store) folder for more information.

#### Base file/folder structure

Here how the base file/folder structure looks like:

 │──    app/
 │  ├────   (route pages)/
 │  ├────   __tests__/
 │  ├────  api/
 │  ├────   assets/
 │  ├────  components/
 │  ├────  redux/
 │  ├────  styles/
 │  ├────  utils/
 │  ├────   favicon.ico
 │  ├────   layout.tsx
 │  ├────   loading.tsx
 │  ├────   page.module.css
 │  ├────   page.tsx
 │  └────   setupTests.ts
 ├──   coverage/
 ├──    node_modules/
 ├──   public/
 ├──   Dockerfile
 ├──   README.md
 ├──   jest.config.mjs
 ├──   jest.setup.js
 ├──   middleware.ts
 ├──   next-env.d.ts
 ├──   next.config.js
 ├──   package-lock.json
 ├──   package.json
 ├──   tsconfig.json
 └──   type.d.ts

#### components

From a layout point of view the application consists of atomic components design:

- atoms
- molecules
- organisms
- templates

All component are created on base of atomic design system.

# Dev tools

- [eslint](https://eslint.org/)

  The latest version of `eslint` with the latest recommended collection of `eslint` rules is available out of the box. It contains:

  - eslint:recommended
  - react/recommended
  - @typescript-eslint/recommended

  Check the [.eslintrc.json](./.eslintrc.json) file for more information.

- [prettier](https://prettier.io/)

  Stop fighting about styling in code reviews; save your time and energy - configure it once and let the machine format/correct your code.

  Check the [.prettierrc.json](./.prettierrc.json) file for more information.

  There is an additional configuration for your import statements. They will be automatically ordered and grouped by the given rules (check the `.prettierrc`) - one more topic for debates in code reviews :)

- [husky](https://typicode.github.io/husky/#/)

  You can use it to lint your commit messages, run tests, lint code, etc.

  Currently, only `pre-commit` hook is set up. Every time you try to do a commit it will run `prettier` and `eslint` to be sure that everything is according to the rules.

- [lint-staged](https://github.com/okonet/lint-staged)

  `lint-staged` helps to run `eslint` and `prettier` only on staged files - it makes the linting process super fast and sensible.

- [commitlint](https://github.com/conventional-changelog/commitlint)

  `commitlint` helps your team adhere to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.

## Usage

You need fork/clone this repo.

Install dependencies:

```bash
npm install # or yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Run the production server:

```bash
npm run build
npm run start
```

Run the test:

```bash
npm run test
or
npm run test -- -u
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
