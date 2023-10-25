// function2.js
console.log('function2.js');

// Member member = new Member();
const member = {
    name: "홍길동",
    age: 18,
    heigth: 178.9,
    showInfo: function () {
        return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다`);
    }
}

const member1 = {
    name: "장길동",
    age: 19,
    heigth: 175.9,
    showInfo: function () {
        return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다`);
    }
}

const member2 = {
    name: "박길동",
    age: 20,
    heigth: 180.9,
    showInfo: function () {
        return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다`);
    }
}

const members = [member, member1, member2];

let show = document.getElementById('show'); // table > (thead>tr>th*2)+(tbody>tr>th*2);
let str = ""; 

str += '<table border=1>';
str += '<tbody>';
members.forEach(function(item){
    str += makeTr(item);
})
str += '</tbody>';
str += '</table>';

show.innerHTML = str; // table>tbody>(tr>td*4)*3

function makeTr(member = {}) {
    let html = '';
    html += '<tr>';
    html += '<td>'+ member.name+ '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.heigth + '</td>';
    html += '<td>' + member.showInfo() + '</td>';
    html += '</tr>';
    return html;
}
console.log(makeTr(member));
member.showInfo();