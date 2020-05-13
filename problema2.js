var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
var cad;
var cad2;
rl.on('line', (input) => {
    cad = input.trim();
    var i;
    for (i = 0; i < cad.length; i++){
        if(cad[i] == '('){
            break;
        }
    }
    if (i == cad.length){
        console.log("cad1: " + cad);
    }
    else{
        cad2 = reverseString(cad);
        cad2 = cad2.split("").reverse().join("");
        console.log("cad: " + cad2);
    }
    //console.log(fac(4));
    process.exit();
})
function reverseString(str){
    console.log("--");
    //return str.substring(2, end);
    for (var i = 0; i < str.length; i++){
        console.log(str[i]+" "+i+" "+str.length);
        if (str[i] == '('){
            //fl = true;
            //console.log("d");
            str = str.replace(str[i],'');
            return reverseString(str.substring(0,i) + reverseString(str.substring(i)));
            //return str.substring(0,i) + reverseString(str.substring(i));    
        }
        if (str[i] == ')'){
            str = str.replace(str[i],'');
            return reverseString(str.substring(0, i))+ str.substring(i);
            //return reverseString(str.substring(0, i)) + reverseString(str.substring(i));
        }
    }
    str2 = str.split("").reverse().join("");
    return str2;
}


