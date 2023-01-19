Describe: omitBadWords()

    Test: "It should replace the value of 'bad' word"
    Code:
        const text = "holy zoinks man";
        const badWord = "zoinks"
        omitBadWords(badWord, text);
    Expected Output: holy **** man;

       Test: "It should replace the value of 'bad' words"
    Code:
        const text = "holy zoinks muppeteer man";
        omitBadWords(text);
    Expected Output: holy **** **** man;