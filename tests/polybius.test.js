const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
    it('should return a string encoding', () => {
        const actual = polybius("325113143 2543241341", false);
        const expected = typeof 'helloworld' === 'string';
        expect(actual).to.equal(expected);
    });
    it('Should return a string when decoding', () => {
        const actual = polybius("thinkful");
        const expected = typeof '4432423352125413' === 'string';
        expect(actual).to.equal(expected);
    });
    it('Should return "4432423352125413", if thinkful is entered - tests encoding', () => {
        const actual = polybius("thinkful");
        const expected = '4432423352125413';
        expect(actual).to.equal(expected);
    });
    it('Should return encoding, the (i/j) should return 42', () => {
        const actual = polybius("ij");
        const expected = '4242';
        expect(actual).to.equal(expected);
    });
    it('Should return "helloworld" -tests normal decoding', () => {
        const actual = polybius("325113143 2543241341", false);
        const expected = 'helloworld';
        expect(actual).to.equal(expected);
    });
    it('Should return false if decoding, the number of characters in the string excluding spaces should be even', () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it('Should return encoding even with a space, the space should be maintained', () => {
        const actual = polybius("hello world");
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
    });
    it('Should return the encoded version even if there are caps', () => {
        const actual = polybius("Hello world");
        const expected = '325113143 2543241341';
        expect(actual).to.equal(expected);
    });
    it('Should return decoding if there is a false set in encoding part even with spaces', () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = 'hello world';
        expect(actual).to.equal(expected);
    });
    it('Should return decoding if false, the (i/j) share space', () => {
        const actual = polybius("4432423352125413", false);
        const expected = 'th(i/j)nkful';
        expect(actual).to.equal(expected);
    });

});