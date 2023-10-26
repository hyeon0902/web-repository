// module.js

import { friendInfo } from '../js/friend.js';
import { cal } from '../todo/calendarObj.js';

const friend = {
	name: 'Hwang',
	phone: '010-3333-4444',
	address: '대구 중구 200',
	showInfo: function () {
		 return `이름은 ${this.name}이고 연락처는 ${this.phone}`
	 }
}
console.log(friend.showInfo());
console.log(friendInfo(friend));

cal.showCalendar();
