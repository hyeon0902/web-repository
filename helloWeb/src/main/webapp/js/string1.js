//string1.js

let str1 = "Hello"; // 기본데이터타입 string
let str2 = new String("Hello"); // 객체 object

console.log(typeof str1, typeof str2);
console.log(str1 == str2); // 값만 비교
console.log(str1 === str2); // 값&타입 비교

console.log(str1.toUpperCase()); // 대문자로 타입변환

let result = "    공백 제거 합니다.  ".trim();
console.log(result, ' 문자갯수: ',result.length);

// trim(), trimStart(), trimEnd()
// replace(), split(), slice(), substring(), substr()
// toString(), indexOf(), lastIndexOf(), charAt(),0 includes()
// concat()

// replace() 문자열 교체  
result = "Hello, World".replace(',','.');
console.log(result);

result = "Hello, World, Nice, World".replace(/\s/g,''); // 공백 문자(\s) 문자열 공백 삭제 
console.log(result);
