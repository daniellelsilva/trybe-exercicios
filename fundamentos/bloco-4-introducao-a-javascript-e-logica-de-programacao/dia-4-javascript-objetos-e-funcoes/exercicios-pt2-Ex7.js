function verificaPalavra(word, ending) {
let wordReversa = word.split('').reverse().join('')
let endingReversa = ending.split('').reverse().join('')

for (let index = 0; index < endingReversa.length; index += 1) {
    if (endingReversa[index] !== wordReversa[index]) {
        return false;
    } else if (endingReversa[index] === wordReversa[index]) {
        return true;
    }
}
}
console.log(verificaPalavra('trybe', 'be'))

