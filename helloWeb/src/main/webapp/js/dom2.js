// dom2.js



// #show>table>tbody>tr>td:사과+td:1000
const fruits = [
	 {name: "사과", price: 1000, farmer: '최말숙'},
	 {name: "복숭아", price: 1500, farmer: '김말숙'},
	 {name: "포도", price: 2000, farmer: '정말숙'},
	 {name: "수박", price: 3000, farmer: '박말숙'}
]

// table 생성
const table = document.createElement('table');
table.setAttribute('border', '1');

// tbody 생성
const tbody = document.createElement('tbody');

fruits.forEach(fruit =>{ console.log(fruit)
// tr 생성
// td 생성
	const tr = document.createElement('tr');
	const fname = document.createElement('td');
	const fprice = document.createElement('td');
	const ffarmer = document.createElement('td');
	fname.innerHTML = fruit.name;
	fprice.innerHTML = fruit.price;
	ffarmer.innerHTML = fruit.farmer;
	
	tr.appendChild(fname);
	tr.appendChild(fprice);
	tr.appendChild(ffarmer);
	
	tbody.appendChild(tr);
});

table.appendChild(tbody);
document.getElementById('show').appendChild(table);
