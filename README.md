Describe: omitBadWords()

    Test: "It should replace the value of the badWord"
    Code:
        const badWord = "zoinks";
        const text = "holy zoinks crazy";
        omitBadWords(badWord, text);
    Expected Output: holy **** crazy;