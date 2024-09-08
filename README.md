# Decoder Page
This web application is a Decoder Project built using HTML and JavaScript, with three distinct sections, each dedicated to a different type of cipher:

Caesar Shift Cipher: A substitution cipher used historically by Julius Caesar, it shifts the letters of the alphabet by a specified number of positions. For example, shifting the alphabet by 3 would turn "A" into "D". To decode, the user must shift the letters back by the same number.
```
"thinkful" -> "wklqnixo"
```
```js
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
```
Polybius Square Cipher: This cipher uses a grid (5x5) where each letter of the alphabet is represented by a pair of coordinates. For example, "B" becomes "21". The user decodes the message by converting the coordinates back to their respective letters.
```
"thinkful" -> "4432423352125413"
```
```js
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false
```
Substitution Cipher: This method replaces each letter of the standard alphabet with a corresponding letter from a substitution alphabet. For example, "HELLO" might translate to "RMWWL", requiring the user to have the substitution alphabet to decrypt the message.
```js
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
```

The application includes unit tests built with Mocha and Chai to ensure the accuracy of the decoding functions using various expect() methods.

## 👀 Preview


![Image of Application](https://i.imgur.com/ME3pzaQ.png)
![Image of Application](https://i.imgur.com/nEdb2fT.png)
![Image of Application](https://i.imgur.com/noyECYs.png)

[Click Here for Live Demo](https://antopi8.github.io/Decoder-Ring/)


## ✍️ Programming Languages
HTML, Javascript, Mocha, and Chai

## 🔧Installation

- Run `npm install` to install the dependencies needed for this project.

To run the tests, you can run the following command:

```bash
npm test
```

## 🧱 Additional Notes

N/A

## ⚒️ Contribution

Complete application creation

## 😄 License
[MIT](https://choosealicense.com/licenses/mit/)
