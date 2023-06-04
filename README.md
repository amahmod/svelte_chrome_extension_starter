# Svelte Chrome Extension Boilerplate

> Boilerplate to create Chrome extension with Svelte and TypeScript

## Features

-   **[Svelte](https://svelte.dev/)**: A lightweight framework for building user interfaces.

-   **[TypeScript](https://www.typescriptlang.org/)**: Adds static typing and improved tooling to your project.

-   **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.

-   **[Hot Reloading](https://crxjs.dev/vite-plugin/)**: Instantly see the changes in your extension without having to reload it manually.

-   **Automatic Code Linting**: Automatically lint your code with [eslint](https://eslint.org/) and [prettier](https://prettier.io/) and run `svelte-check` before each commit.

-   [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Getting Started

To get started with the SvelteChrome Starter Template, follow these steps:

1. Clone this repository: `git clone git@github.com:amahmod/vite_svelte_chrome_extension_starter.git`
2. Install dependencies: `cd vite_svelte_chrome_extension_starter` and `pnpm install`
3. Start the development server: `pnpm dev`
4. Open Chrome and navigate to `chrome://extensions`
5. Enable "Developer mode" in the top right corner.
6. Click on "Load unpacked" and select the `dist` folder in the cloned repository.

## Build

To build a production-ready version of your extension, run the following command:

```bash
pnpm build
```

The compiled files will be located in the `dist` folder, ready to be packaged and distributed. A production ready zip file will also be generated in the `build` folder.

## Folder Structure

The folder structure of this template is organized as follows:

-   `src`: Contains the source code of your extension.
-   `public`: Contains static assets used in your extension. All the assets will be copied into the dist folder.
-   `dist`: The compiled output of your extension.
-   `build`: Contains production ready zip files of your extension.

## Contribution

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.
