// dom3.js

// table>(thead>tr>th*5)+(tbody>tr>td*5) *건수.
import table from './domTable.js';

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=KT005KRDmvHELfaopBGPfrx94jaefdlDgKOZB2TsNEpf%2FVl4zFSgx%2BD7DKyUo%2FIrrf4IAsUbCuzEVCppjGLNdw%3D%3D';
let titles = ['센터id', '센터명', '센터주소', '연락처'];
fetch(url)
 // function(resolve) { return resolve.json() }
.then(resolve => resolve.json()) 
.then(fetchcallback)
.catch(err => console.log('에러-> ',err));

// fetch 호출되는 함수. callback함수.
function fetchcallback(result){
	let rawData = result.data; // 원래데이터
	let sidoAry = []; // sidoAry에 시/도 정보를 중복된 값제거.
	rawData.forEach(center => {
		if(sidoAry.indexOf(center.sido) == -1){
			sidoAry.push(center.sido);
		}
	})
	let select = document.querySelector('#sidoList');
	sidoAry.forEach(sido => {
	let option = document.createElement('option');
		option.innerHTML = sido;
		select.append(option);
	})
	
	// select 태그에 change 이벤트 발생
	select.addEventListener('change', changeCallback);
	function changeCallback(e){
		console.log(e.target.value);
		let searchSido = e.target.value;
		// 선택된 시도 값에 맞는 센터명만 출력.
		let filterAry = rawData.filter(center => center.sido == searchSido);
		genTable(filterAry); // 검색한 화면 출력.
		}
		
	// 초기데이터로 화면 출력.
	genTable(rawData);
	//let filterAry = rawData.filter(center => center.sido == '대구광역시');
	//genTable(filterAry); 
	}

function genTable(rawData = [], page = 1){
	// 초기화	
	document.getElementById('show').innerHTML = '';
	
	// 첫번째, 마지막 => 계산.
	let startNo = (page -1) * 10;
	let endNo = page * 10;
	
	// 첫번째, 마지막 페이지 => 계산.
	let totalCnt = rawData.length;
	let lastPage = Math.ceil(totalCnt / 10);
	let endPage = Math.ceil(page / 10) * 10;
	let beginPage = endPage - 9;
	let prevPage, 
		nextPage = false;
		
		
	if(beginPage > 1){
		prevPage = true;
	}
	if(endPage < lastPage){
		nextPage = true;
	}
	if(endPage > lastPage){
		endPage = lastPage;
	}
	document.querySelector('.pagination').innerHTML = '';
	
	
    //이전페이지 여부
    if(prevPage){
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&laquo';
        aTag.addEventListener('click', function(e){
            genTable(rawData,beginPage-1);
        })
        document.querySelector('.pagination').append(aTag);
    }


    //전체페이지
    for(let i=beginPage; i<=endPage; i++){
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = i+' ';
        if(i == page){
            aTag.setAttribute('class', 'active');
        }

        aTag.addEventListener('click', function(e){
            genTable(rawData, i);

        })
        document.querySelector('.pagination').append(aTag);
    }
	
	// 전체 rawData로 출력.
	let table1 = document.createElement('table');
	let thead = table.makeHead(titles); // 헤더정보
	
	

	let mapData  = rawData.reduce((acc,item,idx) => {  // 매핑정보 출력
		if(idx >= startNo && idx < endNo){
		let newCenter = {
			id: item.id,
			centerName: item.centerName.replace('코로나19 ', ''),
			address: item.address,
			phoneNumber: item.phoneNumber,
			lat: item.lat,
			lng: item.lng
		}
		acc.push(newCenter); // 새로 생성된 newCenter를 배열에 담는다
		}
		return acc; // 추가된 배열을 반환해서 다음순번의 처리에 acc로 사용.
		},[]);

//	let mapData = rawData.map(center => { // 매핑정보 출력.
//		let newCenter = {
//		id: center.id,
//		centerName: center.centerName.replace('코로나19 ', ''),
//		address: center.address,
//		phoneNumber: center.phoneNumber,
//		lat: center.lat,
//		lng: center.lng
//	}
//		return newCenter;
//	});
		
	let tbody = table.makeBody(mapData); // [{},{},{}....{}]
	table1.append(tbody,thead);
	table1.setAttribute('border','1');
	document.getElementById('show').append(table1);

    //다음페이지 여부
    if(nextPage){
        let aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.innerHTML = '&raquo';
        aTag.addEventListener('click', function(e){
            genTable(rawData,endPage + 1);
        })
        document.querySelector('.pagination').append(aTag);
    }
    
    
	// tr클릭이벤트 등록.
	let targetTr = document.querySelectorAll('tbody tr')
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e){
			let lat = tr.dataset.lat;
			let lng = tr.dataset.lng;
			window.open('daumapi.html?x=' + lat + '&y='+ lng)  
			})
		})
}	


	