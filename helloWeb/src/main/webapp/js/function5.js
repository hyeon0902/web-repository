// function5.js

let sum1 = 0;
[10,20,30].forEach(function(num){
	sum1 += num; // consumer : 매개값을 소진, 반환값은 없음.
})

sum = [10,20,30].reduce(function(acc, item, idx, ary){
	console.log(acc, item)
	return item;	
})

function sum(a=0, b=0, ...args){ // parameters. (매개변수)
	console.log(args);
	return a + b; //args.forEach;
}

console.log(10,20,30,40,50,60); // arguments. (매개값)