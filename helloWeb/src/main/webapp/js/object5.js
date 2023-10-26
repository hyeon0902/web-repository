// object5.js : 객체 복사

const obj1 = {
	name: "Hong",
	age: 20,
	weight: 66.8
	// bloodType
}
const obj3 = obj1; // 객체 참조

const obj2 = Object.assign({ name: "Hwang", age:22, height: 123.4 }, obj1); // 객체 복사 후 새로운 객체 생성

console.log(obj2);

// 상속

const obj4 = Object.create(obj1);
// 상속을 통해서 자식객체를 생성하면 부모객체를 참조.

obj4.name = "Kim"; // 자식속성이 변경이 되면 부모값과 다른 값.
obj4.age = 23;


obj1.name = "Hwang";
console.log(obj4); // {}
console.log(obj4.name);
console.log(obj4.age);

// 객체의 속성을 정의. 객체의 속성기술자.
// obj1.bloodType = "O";
Object.defineProperty(obj1, 'bloodType',{
	set: function(bt){
		if(bt == "A" || bt == "B" || bt == "O" || bt == "AB"){
			this._bloodType = bt;
		}
		else {
			console.log('잘못된 유형입니다.');
			this._bloodType = "A";
		}
	},
	get: function(){
		return this._bloodType;	
		}
	})

obj1.bloodType = "AB"; // set.
console.log(obj1.bloodType); // get.

// 속성 정의 시  속성값과 this 객체의 속성을 달리하는 이유??
// 객체의 속성 정의 시 get/set 을 어디서 확인 하는지??