var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
var cad;
var cad2;
rl.on('line', (input) => {
    cad = input.trim();
        cad2 = reverseString(cad);
        cad2 = cad2.split("").reverse().join("");
        console.log("cad: " + cad2);
    process.exit();
})
function reverseString(str){
    for (var i = 0; i < str.length; i++){
        console.log(str[i]+" "+i+" "+str.length);
        if (str[i] == '('){
            str = str.replace(str[i],'');
            return reverseString(str.substring(0,i) + reverseString(str.substring(i)));    
        }
        if (str[i] == ')'){
            str = str.replace(str[i],'');
            return reverseString(str.substring(0, i))+ str.substring(i);
        }
    }
    str2 = str.split("").reverse().join("");
    return str2;
}


