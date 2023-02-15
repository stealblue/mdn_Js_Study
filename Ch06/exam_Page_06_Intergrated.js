// Infinity, -Infinity, NaN
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * 'string');
// template literal
var template = `Template Literal`;
console.log(template);
//이 변수는 템플릿 리미털 중 mutil-line string이다.
// 일반 문자열에서는 줄바꿈이 허용되지 않는다.
// 일반 문자열에서는 공백을 표현하기 위해서는 백슬래시(\)로 시작하는 이스케이프 시퀀스를 사용해야 한다.
var str = `Hello 
World`;
//줄바꿈과 들여쓰기가 적용된 Html 문자열은 이스케이프 시퀀스를 사용하여 작성한다.
// ex) \n(LF,line feed) : 다음 행 이동, \r(CR, carriage Return) : 커서를 처음으로 이동
console.log(str);
var template2 = `<ul>\n\t<li><a href="#">Home</a></li>\n</ul>`;
console.log(template2);
// template literal로 작성시 이스케이프 시퀀스를 사용하지 않는다.
var template3 = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template3);
// 표현식 삽입
var first = 'Sang-Won';
var last = 'Lee';
// ES5 : 문자열 연결
console.log('My name is '+ first + ' '+ last + '.'); //일반 문자열
// ES6 : 문자열 삽입
// 백틱을 사용해야 함에 주의하자.
// 템플릿 리터럴이 아닌 일반 문자열에서의 표현식 삽입은 문자열로 취급
console.log(`My name is ${first} ${last}.`); //템플릿 리터럴
console.log(`1 + 2 = ${1 + 2}`); // 템플릿 리터럴
console.log('1 + 2 = ${1 + 2}'); // 일반 문자열 취급

//symbol 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol
// 객체 생성
var obj = {};
// 이름이 충돌한 위험이 없는 유일무이한 값인 symbol을 property key로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value
// 동적 타입 언어의 특징인 높은 유연성을 보여주기 위한 데이터 타입 체크
// typeof 보다 일치연산자로 타입체크를 하도록 하자

// 동적 타입 언어와 정적 타입 언어
// 정적 타입 언어(static/strong type)는 변수를 선언시 변수 값의 종류, 데이터 타입을 사전에 선언해야 한다(명시적 타입 선언).
// 정적 타입 언어는 컴파일 시점에서 타입 체크(선언한 데이터 타입에 맞는 값을 할당했는가 검사)를 수행한다.
// 동적 타입 언어는 타입을 선언하지 않는다.(변수 유형 키워드를 사용해 변수를 선언)
// 동적 타입 언어는 어떠한 데이터 타입의 값이라도 자유롭게 할당할 수 있고 할당에 의해 타입이 결정된다(타입 추론).
// 정적 타입 언어 (유연성 low, 신뢰성 high) / 동적 타입 언어 (유연성 high, 신뢰성 low)

// 데이터 타입이 필요한 이유
// 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해서 필요하다.
// 값을 참조할 때 한 번에 읽어 들어야 할 메모리 공간의 크기를 결정하기 위해서 필요하다.
// 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해서 필요하다.

var foo; // 변수 선언문
console.log(foo);
console.log(typeof foo); // undefined
foo = 3;
console.log(foo);
console.log(typeof foo); // number
foo = 'Hello';
console.log(foo);
console.log(typeof foo); // string
foo = true;
console.log(foo);
console.log(typeof foo); // boolean
foo = null;
console.log(foo);
console.log(typeof foo); // typeof에 null 타입 체크 항목이 누락되어 있어서 발생하는 자바스크립트 초기 버그이다.
                         // 따라서 object가 아니고 null이 맞다.
foo = Symbol();
console.log(foo);
console.log(typeof foo); // symbol
foo = {};
console.log(foo);
console.log(typeof foo); // object
foo = [];
console.log(foo);
console.log(typeof foo); // object(array)
foo = function (){};
console.log(foo);
console.log(typeof foo); // function


