var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
var cad;
rl.on('line', (input) => {
    cad = input.trim();
    if(chek(cad) == false) console.log("false");
    else console.log("true");
    process.exit();
})
function chek(str){
    var l,im;
    if(str.length%2 == 1) l = parseInt(str.length/2)+1;
    else l = str.length/2;
    im = 0;
    var str2 = str;
    for(var i = 0; i<str2.length; i++){
        var c = 1;
        for(var j=i+1; j<str2.length; j++){
            if(str2[i] == str2[j]){
                c++;
                str2 = str2.substring(0,j)+str2.substring(j+1);
                j--;
            }
        }
        if(i>l-1) return false;
        if(c%2 != 0) im++;
    }
    if(im>1) return false;
    else return true;
}