// object3.js

const member = {
    name: "홍길동",
    age: 20,
    height: 123.4,
    showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	},
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
        for(let prop in student){
            tr += '<td>' + student[prop] + '</td>';
        }
		// tr += '<td>' + student.sno + '</td>';
		// tr += '<td>' + student.sname + '</td>';
		// tr += '<td>' + student.engScore + '</td>';
		// tr += '<td>' + student.mathScore + '</td>';
        tr += '<td><button id="deleteBtn" onclick="this.parentElement.parentElement.remove()">삭제</button>';
		tr += '</tr>';
		return tr;
	},
	makeHtml(StudentAry = []) {
		// html생성. this.makeTr(student)
		let table = '<table border="1">';
		table += '<thead><tr><td>학번</td><td>학생이름</td><td>영어</td><td>수학</td><td>삭제</td></tr>';
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
	},
	showPage(dom) {
		// innerHtml 속성에 html 저장.
		dom.innerHTML = this.html;
    }

}
    //객체의 속성.for..in
    for(let prop in member){
        // console.log(prop);
        // console.log(typeof member[prop]);
        // console.log(member[prop]);
        if((typeof member[prop]) != 'function') {
            console.log(member[prop]);
        }
    }

    const students = [
        {sno: '001', sname: "최해주", engScore: 80, mathScore: 85},
        {sno: '002', sname: "김채민", engScore: 82, mathScore: 83},
        {sno: '003', sname: "최다예", engScore: 84, mathScore: 88}
    ]

    member.makeHtml(students);
    member.showPage(document.getElementById('show'));