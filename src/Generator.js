const puppeteer = require("puppeteer");

/**
 * Generates a reCAPTCHA token for moomoo.io
 * @param {Object} options - Options for generating the token
 * @param {Boolean} [options.headless=true] - Whether to run the browser in headless mode
 * @param {String} [options.action="homepage"] - The reCAPTCHA action to perform
 * @param {String} [options.sitekey="6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ"] - The reCAPTCHA site key
 * @returns {String} The generated reCAPTCHA token
 */
async function generateToken(options = {}) {
    const {
        headless = true,
        action = "homepage",
        sitekey = "6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ",
        debug = false
    } = options;

    if(debug) console.log("Launching browser...");
    const browser = await puppeteer.launch({
        headless
    });
    const page = await browser.newPage();
    if(debug) console.log("Navigating to moomoo.io...");
    await page.goto("https://moomoo.io");

    if(debug) console.log("Evaluating page for token...");
    const token = await page.evaluate(async ({
        action,
        sitekey
    }) => {
        return new Promise(resolve => {
            window.grecaptcha.execute(sitekey, {
                    action
                })
                .then(function(e) {
                    resolve(encodeURIComponent(e));
                });
        });
    }, {
        action,
        sitekey
    });

    if(debug) console.log("Closing browser...");
    await browser.close();

    if(debug) console.log("done.");
    return token;
}

module.exports.generateToken = generateToken;