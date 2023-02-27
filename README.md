# moomoo-recaptcha-token-generator
A recaptcha token generator for Moomoo.io

## Installation

```cmd
npm install moomoo-recaptcha-token-generator
```

## Usage

Here's an example on how to use it:

```js
const Generator = require("moomoo-recaptcha-token-generator");

async function main() {
  const token = await Generator.generateToken();
  console.log(token);
}

main();
```

You can also specify options for generating the token by passing an options object to the `generateToken` function:


```js
const Generator = require('moomoo-recaptcha-token-generator');

async function main() {
  const options = {
    headless: false,
    action: 'homepage',
    sitekey: '6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ',
    debug: false
  };
  
  const token = await Generator.generateToken(options);
  console.log(token);
}

main();
```

## Options
The generateToken function takes the following options:

- `headless` (Boolean, default `true`): Whether to run the browser in headless mode.
- `action` (String, default `"homepage"`): The reCAPTCHA action to perform.
- `sitekey` (String, default `"6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ"`): The reCAPTCHA site key.
- `debug` (Boolean, default `false`): Whether to display debug information about puppeteer states.
