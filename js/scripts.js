// const badArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];

function omitBadWords(text) {
    const textArray = text.split(" ");
    const zoinks = "zoinks"
    const muppeteer = "muppeteer";
    const biffaroni = "biffaroni";
    const loopdaloop = "loopdaloop";
    let replacementWord = "****";
    let updatedText = "";
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(zoinks.toLowerCase()) || element.toLowerCase().includes(muppeteer.toLowerCase()) || element.toLowerCase().includes(biffaroni.toLowerCase()) || element.toLowerCase().includes(loopdaloop.toLowerCase())) {
            updatedText = updatedText + " " + replacementWord;
        }
        else {
            updatedText = updatedText + " " + element;
        }
    });
    return updatedText.trim();
}

