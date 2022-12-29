let str = "Welcome to Business Automation and exam time is 10 am";
let count = str.length;

console.log('The number of alphbet in the string is :', count);
let res = 0;
for (let i = 0; i < count; i++) {
    if (str[i] === "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
        res = res + 1;
    }
}
console.log('The number of digit in the string is :', res);

let val = 0;
for (let i = 0; i < count; i++) {
    if (str[i] === "@" || "$" || "&" || "^") {
        val = val + 1;
    }
}
console.log('The number of special character in the string is :', val);