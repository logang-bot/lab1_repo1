var inputArr = ["abaa","aa","ad","vcd","aba"];
/*var m = process.stdin.on('data', function(data){
    m = parseInt(data.toString());
    //console.log("dsda" + m);
    process.exit();
});

console.log("dsadtreter" + m)
*/
var inpArr = [];
var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);
var n=0;

rl.on('line', (input) => {
    if(input.trim() === ''){
        /*for (var i = 0; i<inpArr.length; i++){
            console.log("-->" + inpArr[i] + '\n')
        }*/
        console.log("valor: " + n);
        for (var i = 0; i<inpArr.length; i++){
            if (inpArr[i].length>=n){
                console.log(inpArr[i] + " ");
            }
        }
        process.exit();
    }
    inpArr.push(input.trim());
    if(input.trim().length>n){
        n=input.trim().length;
    }
})



/*
var n=0;
for (var i = 0; i<inputArr.length; i++){
    if (inputArr[i].length>n){
        n=inputArr[i].length;
    }
}
for (var i = 0; i<inputArr.length; i++){
    if (inputArr[i].length>=n){
        console.log(inputArr[i] + " ");
    }
}*/