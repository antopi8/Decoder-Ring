function substitution(input, alphabet, encode = true) {
    const realAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    try {
        if (!alphabet) { throw false };
        alphabet = alphabet.split('');
        if (alphabet.length !== 26) { throw false };

        alphabet.forEach((letter) => {
            let count = 0;
            for (let i = 0; i < alphabet.length; i++) {
                if (letter === alphabet[i]) {
                    count++;
                }
            }
            if (count > 1) { throw false };
        });
    } catch (error) {
        return error;
    }

    const result = [];
    input = input.toLowerCase().split('');

    if (encode === true) {
        input.forEach((char, index) => {
            if (realAlphabet.includes(char)) {
                realAlphabet.find((letter, index) => {
                    if (char === letter) {
                        newChar = alphabet[index];
                        result.push(newChar);
                    }
                })
            } else {
                result.push(char);
            }
        });
    } else {
        input.forEach((char, index) => {
            if (alphabet.includes(char)) {
                alphabet.find((letter, index) => {
                    if (char === letter) {
                        newChar = realAlphabet[index];
                        result.push(newChar);
                    }
                })
            } else {
                result.push(char);
            }
        });
    }
    return result.join('');
}

return {
    substitution,
};
})();

//export default substitution;

//module.exports = { substitution };