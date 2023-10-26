//calendarObj.js
export { cal }

const today = new Date();
const cal = {
	makeHead() {
		const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
		return days.reduce((acc, day) => {
			return acc + '<th>' + day + '</th>';
		}, '<thead><tr>')
	},
	makeBody() {
		let tbody = '</tr></thead><tbody><tr>';
		for (let i = 1; i <= 31; i++) {
			let styles = '';
			if(i % 7 == 1) {
				styles = 'background:red; color:yellow;';
				if(i == today.getDate()) {
					styles += 'font-weight:bolder;';
				}
				tbody += '<td style="' + styles + '" align ="center">' + i + '</td>';
			}else if(i % 7 == 0) {
				styles += 'color:blue;';
				tbody += '<td style="' + styles + '" align ="center">' + i + '</td>';
			}else {
				if(i == today.getDate()) {
					styles += 'font-weight:bolder; background:yellow;';
				}
				tbody += '<td style="' + styles + '" align ="center">' + i + '</td>';
			}
			if (i % 7 == 0) {
				tbody +=  '</tr><tr>';
			}
		}
		tbody += '</tr></tbody>';
		return tbody;
	},
	showCalendar() {
		let thead = this.makeHead();
		let tbody = this.makeBody();
		let table = '<table border="1">' + thead + tbody + '</table>';
		
			document.getElementById('show').innerHTML = table;
	}
}
cal.showCalendar();
