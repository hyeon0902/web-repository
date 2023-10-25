// object1.js

//클래스의 추가 메소드 작성. 프로토타입
Member.prototype.setBloodType = function(bloodType) {
		this.bloodType = bloodType;
}
Member.prototype.getBloodType = function () {
	return this.bloodType;
}

const mem2 = new Member('홍길동', 22, 123.4);
const mem3 = new Member('김길동', 42, 157.5);
mem2.setBloodType('AB형');
mem3.setBloodType('B형');
console.log(mem2.getBloodType());
console.log(mem3.getBloodType());

String.prototype.truncate = function() {
	console.log(this);
	return this.substring(5,10);  // world 출력
}
let result = "Helloworld".truncate();
console.log(result);