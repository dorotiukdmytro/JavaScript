const sentenceFirst = 'Uwielbiam JavaScript';
const sentenceSecond = 'Jestem świetnym programistą';

function compareSentens(sentenceFirst, sentenceSecond) {
    if (sentenceFirst.length > sentenceSecond.length) {
        return sentenceFirst;
    } else {
        return sentenceSecond;
    }
}

console.log(compareSentens(sentenceFirst, sentenceSecond));