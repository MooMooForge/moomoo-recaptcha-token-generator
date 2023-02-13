const Generator = require("moomoo-recaptcha-token-generator");

async function run() {
    const token = await Generator.generateToken({
        debug: true
    });
    console.log(token)
}

run()