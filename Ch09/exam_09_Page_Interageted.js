// 타입변환
// 개발자가 의도적으로 값을 변환하면 명시적 타입변환(explicit coercion) = 타입 캐스팅(type casting)
// 의도와는 상관없이 자바스크립트 엔진에 의해 타입이 변환되면
// 암묵적 타입 변환(implict coercion) = 타입 강제 변환(type coercion)
console.log('10' + 2);
console.log(5 * '10');
console.log(!0);
console.log(`1 + 1 = ${1 + 1}`); // 템플릿 리터럴의 표현식 삽입
// string type coercion
console.log(-0 + ''); // string으로 암묵적 타입변환이 되었는데 왜 -가 붙지 않았을까 생각해보자.
console.log(-Infinity + ''); // 위에는 -가 붙지 않았는데 음의 무한대는 왜 붙었을까 생각해보자.
console.log({} + '');
console.log(Math + '');
console.log([] + '');
console.log([10, 20] + '');
// number type coercion
console.log(+'');
console.log(+null);
console.log(+[]); // 빈 문자열, 빈 배열, null, false는 0으로 변환된다.
// boolean type coercion
// false, undefined, null, 0, -0, NaN, 빈 문자열은 false
if ('') console.log('1'); // false
if (true) console.log('2'); // true
if (0) console.log('3'); // false
if ('str') console.log('4'); // true
if (null) console.log('5'); // false

// 문자열로 명시적 타입 변환
// String 생성자 함수를 이용해서 new 연산자 없이 호출
// Object.prototype.toString 메서드를 사용
// 문자열 연결 연산자 사용

// 숫자로 명시적 타입 변환
// Number 생성자 함수를 이용해서 new 연산자 없이 호출
// parseInt, parseFloat 함수를 사용 (숫자로 된 문자열만 변환 가능)
// + 단항 산술 연산자를 사용
// * 산술 연산자를 사용

// 불리언 타입으로 명시적 타입 변환
// Boolean 생성자 함수를 이용해서 new 연산자 없이 호출
// !부정 논리 연산자를 연속해서 두 번 사용

// 단축평가
// 논리연산자를 이용한 단축평가
// 객체의 값이 null이나 undefined일 경우 객체의 property를 참조하면 타입에러가 발생한다.
// 이 때 단축평가를 사용하면 에러를 발생시키지 않는다.
var elem = null;
var value;
console.log(value = elem && elem.value);
// 함수를 호출할때 인수를 전달하지 않으면 매개변수에는 undefind가 할당된다.
// 이 때 단축평가를 사용해 매개변수의 기본값을 설정하면 undefind로 인해 발생할 수 있는 에러를 방지할 수 있다.
function getStringLength(str){
    str = str || '';
    return str.length;
}
console.log(getStringLength());
console.log(getStringLength('hi'));
function getStringLength2 (str = ''){
    str = str || '';
    return str.length;
}
console.log(getStringLength2());
console.log(getStringLength2('hi'));
