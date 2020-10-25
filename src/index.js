const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';

    let exChar = expr.match(/.{1,10}/g);
    for (let char of exChar) {
        let word = '';
        if (char === '**********') {
            str = str + ' ';
        } else {
            char = char.match(/.{1,2}/g);
            for (let letter of char) {
                switch (letter) {
                    case '00':
                        break;
                    case '10':
                        word = word + '.';
                        break;
                    case '11':
                        word = word + '-';
                        break;
                }
            }
            str = str + MORSE_TABLE[word];
        }
    }
    return str;
}

module.exports = {
    decode
}