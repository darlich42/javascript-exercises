const reverseString = function(string) {
    let reversed = "";
    const myArray = string.split("");
    for (i = myArray.length-1; i >= 0; i--) {
        reversed += myArray[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
