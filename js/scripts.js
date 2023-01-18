// const badArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];

function omitBadWords(badWord, text) {
    const textArray = text.split(" ");
    console.log('txtarry: ',textArray)
    let replacementWord = "****";
    let updatedText = "";
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(badWord.toLowerCase())) {
            updatedText = updatedText + " " + replacementWord;
        }
        else {
            updatedText = updatedText + " " + element;
        }
    });
    return updatedText.trim();
}