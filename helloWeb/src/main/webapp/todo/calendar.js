	const today = new Date(); // 오늘 날짜를 출력
	console.log('오늘날짜: ', today.getDate());
	
	
const weeks = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

const calendar = {
    html: '',

	
	makeHead(){
		let strHead = "";
		
		strHead += '<table border ="1"><thead><tr>';
		for(let i=0; i<weeks.length; i++){
			strHead += '<th>' + weeks[i] + '</th>';
		}
		strHead += '</tr><thead>';
			return this.html += strHead
	},

    makeBody() {
        let strBody = "";
        strBody += '<tbody><tr>'

        for (let i=1; i<= 31; i++) {
			let styles = '';
			if(i % 7 == 1){
				// 일요일이면
				styles = 'background:red; color:yellow;';
				if(i == today.getDate()){
					styles += 'font-weight: bolder;';
				}
				strBody += '<td style="' + styles + '" align="right">' + i + '</td>';
			}else if(i % 7 == 0){
				styles = 'background:blue; color:yellow;';
				if(i == today.getDate()){
					styles += 'font-weight: bolder;';
				}
				strBody += '<td style="' + styles + '" align="right">' + i + '</td>';
			}
			
			else {
				if(i == today.getDate()){
					styles += 'font-weight: bolder; background: yellow;';
				}
				strBody += '<td style="' + styles + '" align="right">' + i + '</td>';
				
			}	               	   
            if (i % 7 == 0) {
                strBody += '<tr></tr>'
            }
        }
        strBody += '</tr></tbody></table><br>'

        this.html += strBody;
    },

    makeCalendar(dom) {
	        dom.innerHTML = this.html;
    }
}

// calendar.makeHead();

// calendar.makeBody();

// calendar.makeCalendar(document.getElementById('show'));

calendar.makeHead();
calendar.makeBody();
calendar.makeCalendar(document.getElementById('show'));