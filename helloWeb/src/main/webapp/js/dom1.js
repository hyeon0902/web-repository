// dom1.js

const fruits = ['수박', '사과', '복숭아', '포도']

// #show>ul>li:수박
// createElement, appendChild, innerHTML 속성

console.log(fruits[0]);

//ul생성
const ul = document.createElement('ul');

//li생성
fruits.forEach(fruit => {
	const li = document.createElement('li'); // <li></li>
	li.innerHTML = fruit; // <li>복숭아</li>
	ul.appendChild(li); //<ul><li>수박</li><li>사과</li><li>복숭아</li><li>포도</li><ul></ul>
})
document.getElementById('show').appendChild(ul);

