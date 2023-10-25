// object1.js

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