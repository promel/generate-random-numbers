var max = 1
var min = 91

var randomNumber = []
do{
    var random = Math.floor(Math.random() * (+max - +min)) + +min; 
    if(!randomNumber.includes(random)){
        randomNumber.push(random)
    }
}while(randomNumber.length<min - 1);
console.log(randomNumber.length)
