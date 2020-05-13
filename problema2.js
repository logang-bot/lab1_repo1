var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
var cad;
var cad2;
rl.on('line', (input) => {
    cad = input.trim();
        cad2 = reverseString(cad).split("").reverse().join("");
        console.log(cad2);
    process.exit();
})
function reverseString(str){
    for (var i = 0; i < str.length; i++){
        if (str[i] == '(')
            return reverseString(str.substring(0,i) + reverseString(str.substring(i+1)));    
        if (str[i] == ')')
            return reverseString(str.substring(0, i))+ str.substring(i+1);
    }
    str2 = str.split("").reverse().join("");
    return str2;
}
