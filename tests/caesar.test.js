const expect = require("chai").expect;
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
    it('Should return "wklqnixo", shifts to the right if positive', () => {
        const actual = caesar("thinkful", 3);
        const expected = 'wklqnixo';
        expect(actual).to.equal(expected);
    });
    it('Should return "qefkhcri", if negative number given', () => {
        const actual = caesar("thinkful", -3);
        const expected = 'qefkhcri';
        expect(actual).to.equal(expected);
    });
    it('Should return "thinkful", shifts to the left if set to false- decoding', () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    });

    it('Should return false if the shift value is equal to 0', () => {
        const actual = caesar("Thinkful", 0);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it('Should return false if the shift value is less than 25', () => {
        const actual = caesar("Thinkful", -26);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it('Should return false if the shift value is more than 25', () => {
        const actual = caesar("Thinkful", 99);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it('Should return false if the shift value is not present', () => {
        const actual = caesar("Thinkful");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it('Should return "wklqnixo" even if capitalized input', () => {
        const actual = caesar("THINKFUL");
        const expected = 'wklqnixo';
        expect(actual).to.equal(expected);
    });
    it('It handles shifts that go past the end of the alphabet, positive number shifts right', () => {
        const actual = caesar("zzzzz", 3);
        const expected = 'ccccc';
        expect(actual).to.equal(expected);
    });
    it('It handles shifts that go past the end of the alphabet, negative number shifts left', () => {
        const actual = caesar("ccccc", -3);
        const expected = 'zzzzz';
        expect(actual).to.equal(expected);
    });

    it('It should maintain spaces and other nonalphabetic symbols in the message, encoded', () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.equal(expected);
    });
    it('It should maintain spaces and other nonalphabetic symbols in the message, decoded', () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = 'this is a secret message!';
        expect(actual).to.equal(expected);
    });
});