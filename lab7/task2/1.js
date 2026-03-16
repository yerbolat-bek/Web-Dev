const input = require('fs').readFileSync('/dev/stdin','utf-8').trim().split(" ").map(Number);

let n = Number(input);
let fact = 1;

for(let i = 1; i<=n; i++){
    fact *= i;
}

console.log(fact);


let a = Number(input[0]);
let b = Number(input[1]);

console.log(a+b);

let sum = 0;

for(let num of input){
    sum += num;
}

console.log(sum);

const input1 = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();

console.log(input.split("").reverse().join(""));

if(input1 === input.split("").reverse().join("")){
    console.log("YES");
}
else{
    console.log("NO");
}
