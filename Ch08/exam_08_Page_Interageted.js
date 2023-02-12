// 코드 블록(블록문)내의 문이 하나뿐이면 블록문 생략가능
var num = 2;
var kind;
if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';
console.log(kind);
// 조건문 (conditional statement)
// if문은 논리적 참, 거짓으로 실행할 코드 블록에 주로 사용된다.
// case문은 if문보다 다양한 상황에 따라 실행할 코드 블록에 주로 사용된다.
// fall through를 이용한 윤달을 판별하는 case 문
var year = 2000;
var month = 2;
var days = 0;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: { // 연쇄적으로 쓸 수도 있다.
        days = 31;
        break;
    }
    case 4: case 6: case 9: case 11:{
        days = 30;
        break;
    }
    case 2:{
        // 윤달 알고리즘
        // 1. 년도가 4로 나누어 떨어지는 해는 윤년
        // 2. 1번 조건 + 100으로 나누어 떨어지는 해는 평년
        // 3. 2번 조건 + 400으로 나누어 떨어지는 해는 윤년
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))? 29 : 28;
        break;
    }
    default:
        days = 'Invalid month';
}
console.log(days);

// 반복문(loop statement)
// for문, while문, do...while문
// for문은 반복 횟수가 명활할 때 쓰이고 while문은 반복 횟수가 불명확할 때 주로 사용한다.

// break문은 레이블문, 반복문, switch문 이외에 사용시 SyntaxError가 발생한다.

// 레이블문(label statement)는 식별자가 붙은 문을 말한다.
// switch문의 case, default문도 레이블문이다.
// 중첩 for문 중 내부 for문에서 그냥 break문 사용시 외부 for문으로 탈출한다.
// 때문에 외부까지 한번에 탈출하려면 break + 레이블문이 필요하다.
// 중첩 for문 이외에는 break + 레이블문을 권장하지 않는다.

outer: for (var i = 0; i <3; i++){
    for(var j = 0; j <3; j++){
        // i + j === 3이면 outer라는 식별자가 붙은 for문을 벗어난다.
        if(i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log('Done');

// continue문
// 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다.(탈출x)
