const { generateToken } = require("./src/Generator.js");

async function run() {
    const token = await generateToken();
    console.log(token)
}

run()