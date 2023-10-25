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
let obj3 = { ...obj1 }  // ...펼침연산자
obj3.age = 24;
console.log(obj3);

//클래스 
class Member {
	constructor(name, age, height){
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight){
		this.weight = weight;
	}
	getWeight(weight){
		return this.weight;
	}
	showInfo(){
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	}
}

const mem1 = new Member('홍길동', 20, 156.8);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는 ', mem1.getWeight(), 'kg입니다.');
