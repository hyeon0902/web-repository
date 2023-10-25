// function1.js

        // 함수선언. 
        function myFunc(std, score = 60){  //  (score) 파라메터 또는 매개변수
            // if(score == undefined){ // 스코어 점수가 없는 경우
            //     score = 0;
            // }
            console.log(`${std}의 점수는 ${score}점 입니다`);
            return score; // underfined
        }
        // 함수표현식.
        var myFunc = function myFunc(std, score = 60){
            // if(score == undefined){ // 스코어 점수가 없는 경우
            //     score = 0;
            // }
            console.log(`${std}의 점수는 ${score}점 입니다`);
            return score; // underfined
        }
        // let myFunc = myFunc('홍길동');
        console.log(myFunc('홍길동'));