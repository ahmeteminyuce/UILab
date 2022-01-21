// requires
const { JSDOM } = require("jsdom");

// create dom
const options = {
    resources: "usable",
    runScripts: "outside-only"
}

const dom = new JSDOM(`

    <!DOCTYPE html>
    <div></div>

`, options);

// globals
global.window = dom.window;
global.document = dom.window.document;

window.matchMedia = () => {
    return { matches: false }
};

global.Element = window.Element;
global.Image = window.Image;
global.NodeList = window.NodeList;

global.navigator = {

    userAgent: "Chrome",
    language: "en-EN",
    appVersion: "Win"

};