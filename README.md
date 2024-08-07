# Simple firebase notification test

## ⚙️ Project stack

Among the dependencies the most important ones are:

| Technology        | Version |
| ----------------- | ------- |
| Node.js           | 20.x.x  |
| react             | ^18.2.0 |
| tailwindcss       | ^3.2.4  |
| typescript        | ^4.9.4  |

Important **dev** dependencies:

- eslint
- prettier
- lint-staged
- husky

## 💡 Quick start

1. Install Node.js 20.10.0 (Any Node.js 20.x.x version should do).

    You can install Node.js directly from official Node.js website ([link to v16.10.0](https://nodejs.org/dist/v16.10.0/)) or using **nvm** ([nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows or [nvm](https://github.com/nvm-sh/nvm) for Linux and macOS).

    ```shell
    # Install Node 20.10.0 using nvm.
    nvm install 20.10.0

    # Set 20.10.0 as active version
    nvm use 20.10.0

    # Quick check to see which version is active
    nvm list
    ```

    You should also accept all UAC warnings on Windows.

2. Clone the project from GitHub and navigate to its root. It's the folder with package.json file - the root of GitHub repository. Then, install all dependencies.

    ```shell
    npm install
    ```

3. Next, you can start the development server (if you are a developer).

    ```shell
    npm run start
    ```

    The website should be accessible at http://localhost:3000/.

4. ##### For use in production build and serve the project using following commands

    ```shell
    npm run build
    npm run start
    ```

    The website should be accessible at http://localhost:8000/.

## Usage

Start: `npm run start`

Format: `npm run format`

Lint: `npm run lint`

Lint Fix: `npm run lint --fix`

Build: `npm run build`

## Jest Reporter

Reporting code coverage runs on each pull request using tools of GitHub actions. To see the generated reporter you should use the next link: [Jest coverage report](https://watersport.github.io/WATERSPORT-Search-Web/).