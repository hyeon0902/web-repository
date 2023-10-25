// function5.js

let sum1 = 0;
[10,20,30].forEach(function(num){
	sum1 += num; // consumer : 매개값을 소진, 반환값은 없음.
})
console.log('forEach: ',sum1);

sum1 = 0;
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary){
//	console.log(acc, item, idx)
	return acc + item; // function : 매개값을 소진, 반환값을 생성.	
},0)
	console.log('reduce: ',sum1);

function sum(a=0, b=0, ...args){ // parameters. (매개변수)
	console.log(args);
	let result = 0;
	result = a + b;
	args.forEach(function(num) { result += num } );
	return result;
//	return a + b + args.reduce((acc, item) => acc + item); //args.forEach;
}

console.log(sum(10,20,30,40,50,60)); // arguments. (매개값)
 
// reduce 연습. 최대값 최소값 구하기
let max = 0;
let min = 10;
const numAry = [4, 2, 6, 9, 1, 7];  

max = numAry.reduce((acc, item) => { 
	return acc > item ? acc:item;
});
min = numAry.reduce((acc, item) => {
	return acc > item ? item:acc;
});


console.log('최대값: ',max);
console.log('최소값: ',min);



