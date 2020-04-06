// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// const reverse = str => {
//     let newStr = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }

// const reverse = str => {
//     let newStr = "";
//     debugger;
//     for(let char of str) {
//         newStr = char += newStr;
//     }
//     debugger;
//     return newStr;
// }

const reverse = str => {
    return str.split("").reduce((a,n) => {
        a = n + a;
        return a;
    }, "")
}

module.exports = reverse;
