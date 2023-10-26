// string3.js

// 날짜 가져오기
let today = new Date(); // Date  내장객체.
today.getFullYear(); // 2023 
today.getMonth(); /// 9 +1
today.getDate(); // 26

// 날짜 변경
today.setFullYear(2022); // 2022
today.setMonth(0); // 0+1
today.setDate(1); // 1
today.setHours(10); //10

console.log(today.toString()); // 17:34 - 9 => 08:34

function dateFormat(today){
	// YYYY-MM-dd hh24:mm:ss
	return today.getFullYear() + "-" + 0 + (today.getMonth() + 1)
		  + "-" + 0 + today.getDate() + " " + today.getHours() + ":"
		  + today.getMinutes() + ":" + today.getSeconds()
}

console.log(dateFormat(today));