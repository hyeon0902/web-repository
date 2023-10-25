// object.js
console.log('object start.....');

let obj1 = {
	name: 'hong',
	age: 20
}

// 주소 참조.
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1);


// 복사.
let obj3 = {
	...obj1
} // ...펼침연산자
obj3.age = 24;
console.log(obj3);

//클래스 
class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight) {
		this.weight = weight;
	}
	getWeight(weight) {
		return this.weight = weight;
	}
	showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	}
	// 학생의 정보: 학생번호, 이름, 영어, 수학
	makeTr(student = {
		sno,
		sname,
		engScore,
		mathScore
	}) {
		// tr>td*4
		let tr = '';

		tr += '<tr>';
		tr += '<td>' + student.sno + '</td>';
		tr += '<td>' + student.sname + '</td>';
		tr += '<td>' + student.engScore + '</td>';
		tr += '<td>' + student.mathScore + '</td>';
		tr += '</tr>';
		return tr;
	}
	makeHtml(StudentAry = []) {
		// html생성. this.makeTr(student)
		let table = '<table border="1">';
		table += '<thead><tr><td>학번</td><td>이름</td><td>영어</td><td>수학</td></tr>';
		table += '</thead><tbody>';
		let obj = this;
		console.log('this1: ', this);
		table += StudentAry.reduce(function(acc, stud){
			console.log('this2: ', this);
			return acc + obj.makeTr(stud);
		},'');
		// table += StudentAry.reduce((acc, student) => acc + this.makeTr(student), '');
		table += '</tbody></table>';
		this.html = table;
	}
	showPage(dom) {
		// innerHtml 속성에 html 저장.
		dom.innerHTML = this.html;
	}
}

const mem1 = new Member('홍길동', 20, 156.8);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는 ', mem1.getWeight(), 'kg입니다.');