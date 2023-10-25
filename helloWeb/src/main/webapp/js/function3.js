//function3.js

function Member(name, age, height){
	console.log(this);
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function() {
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다`;
	}
}
var myName = 'Hong';
const member = new Member('홍길동', 20, 123.4);

console.log(member.showInfo());

const members = [
	new Member('홍길동', 18, 123.3),
	new Member('박길동', 19, 150.5),
	new Member('김길동', 18, 180.3),
	new Member('이길동', 20, 165),
	new Member('유길동', 25, 168.8),
	new Member('강길동', 30, 170.3)
]

// 함수 : table 생성
let str = '';

function makeTable(memberAry = []){
	str += '<table border = 1>';
	str += '<thead><tr><th>이름</th><th>나이</th><th>키</th><th>자기소개</th></tr></thead>';
	str += '<tbody>';
	memberAry.forEach(function(item){
		str += makeTr(item);
	})
	str += '</tbody>';
	str += '</table>';		
	
	document.getElementById('show').innerHTML = str;
	
	function makeTr(member = {}){
		let html = '';
		html += '<tr>';
		html += '<td>' + member.name + '</td>';
		html += '<td>' + member.age + '</td>';
		html += '<td>' + member.height + '</td>';
		html += '<td>' + member.showInfo() + '</td>';
		html += '</tr>';
		return html;
	}// end makeTr
	
}// end makeTable
makeTable(members);