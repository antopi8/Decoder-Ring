const expect = require("chai").expect;
const { substitution } = require("../src/substitution.js");

describe("substitution", () => {
    it('It should encode into jrufscpw, this is testing a normal functioning encode', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    });
    it('It should encode into elp xhm xf mbymwwmfj dne, this is testing a normal functioning encode with spacing', () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });
    it('It should encode into y&ii$r&, this is testing a normal functioning encode with special characters', () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });
    it('It should encode into y&ii$r&, this is testing a normal functioning encode with caps', () => {
        const actual = substitution("MESSAGE", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });


    it('It should decode into thinkful, this is testing a normal functioning decode', () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    });
    it('It should decode into thinkfu l  with spaces, this is testing a normal functioning decode', () => {
        const actual = substitution("jrufscp w", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkfu l';
        expect(actual).to.equal(expected);
    });
    it('It should decode into message even with special characters, this is testing a normal functioning decode', () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = 'message';
        expect(actual).to.equal(expected);
    });
    it('It should decode into thinkful, this is testing a normal functioning decode even with caps', () => {
        const actual = substitution("JRUFSCPW", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    });

    it("It should return false of the given alphabet isn't exactly 25 characters long", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("It should return false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("It should return false if there is not alphabet given", () => {
        const actual = substitution("thinkful");
        const expected = false;
        expect(actual).to.equal(expected);
    });
    it("Error - not an integer - It should return false if there isn't a string inside of it", () => {
        const actual = substitution(23);
        const expected = false;
        expect(actual).to.equal(expected);
    });

});