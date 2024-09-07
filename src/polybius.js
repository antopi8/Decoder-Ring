//Takes the user input parameter and splits it
//Check if encoder is true or false
//Matches the user input string characters to the encoder or decoder
//Encodes if true X
//Decodes if false X

//Encodes
//Matches string value to key and returns the value

//Decodes
//Matches string value to the the key and returns the value //(find a way to import this from caesar file.js)

//helper function to split the characters

//Splits input into an array
function splitInput(input) {
    return input.toLowerCase().split('');
}

//Splits input into 2 characters
function splitNumInput(input) {
    return input.match(/.{2}/g);
}

//Encoder Data
const encoder = {
    'a': '11',
    'b': '21',
    'c': '31',
    'd': '41',
    'e': '51',
    'f': '12',
    'g': '22',
    'h': '32',
    'i': '42',
    'j': '42',
    'k': '52',
    'l': '13',
    'm': '23',
    'n': '33',
    'o': '43',
    'p': '53',
    'q': '14',
    'r': '24',
    's': '34',
    't': '44',
    'u': '54',
    'v': '15',
    'w': '25',
    'x': '35',
    'y': '45',
    'z': '55',
    ' ': ' '
};

//Decoder Data
const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'ij', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '45': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z', ' ': ' ' };


function polybius(input, encode = true) {
    let results = ""; //The results will be a string data type
    //If encoder is true then this process
    if (encode) {
        let inputReady = splitInput(input); // console.log(inputReady); [ 't', 'e', 's', 't' ]
        for (let j = 0; j < inputReady.length; j++) { //loops through input characters
            if (encoder[inputReady[j]]) {
                results += encoder[inputReady[j]]; //plan if encoder key matches input key then return the value to results
            } else {
                results += inputReady[j]
            }
        } //can place an else statement here that if nothing matches then just return the character - space or anything
        return results
    } else { //if encode is set to false
        let inputReady = splitNumInput(input); //split the characters by 2
        for (let j = 0; j < inputReady.length; j++) { //loops through input
            if (decoder[inputReady[j]]) {
                results += decoder[inputReady[j]]; //if decoder key matches then return the values to the results
            } else {
                results += inputReady[j]
            }
        }
        console.log(results)
        return results
    }
}

polybius("my 2xlodfw", false);

//export default polybius;
//function polybius(input, encode = true) {}

//export const polybius = polybiusModule.polybius;

//module.exports = { polybius };