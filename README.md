# _Bad Words_

#### By _**Molly Donegan**_

#### _Javascript Practice_

## Technologies Used

* _JavaScript_

## Description

_Javascript practice._

## Known Bugs

* _NA_

## Tests

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

## License

* _MIT_

Copyright (c) _2023_ _Molly Donegan_
