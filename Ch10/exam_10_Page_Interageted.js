var person = {
    name: 'Lee',
    sayHello: function () {
        console.log('Hello, My name is ${this.name}');
    }
};
console.log(typeof person);
console.log(person);
var empty = {};
console.log(typeof empty);
console.log(empty); // 빈 객체
person = {
    name: 'Lee',
    age: 20
};
console.log(person); // property key를 symbol로 사용할 수 있지만 일반적으로 문자열을 사용
person = {
    firstName: 'SangWon', // 식별자 네이밍 규칙을 준수(따옴표 생략가능)
    'last-name': 'Lee' // 식별자 네이밍 규칙을 준수하지 않을 경우는 SyntaxError가 발생하기에 따옴표로 감싸야 한다.
};
console.log(person);
var obj = {};
var key = 'Hello';

// ES5 : 프로퍼티 키 동적 생성
obj[key] = 'World';
// ES6 : 계산된 프로퍼티 이름
// var obj = {[key] : 'World'};
console.log(obj);

// 프로퍼티 키로 빈 문자열을 사용해도 에러는 뜨지 않지만 키로서의 의미를 갖지 못하므로 권장 X
// 문자열과 심볼 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 된다.
// funcion, var 같은 예약어를 프로퍼티 키로 사용해도 에러는 발생하지 않지만 예상치 못한 에러가 생길 수 있기에 권장 X
// 이미 존재하는 프로퍼티 키를 중복 선언시 마지막에 선언한 프로퍼티가 덮어쓴다. 에러는 발생하지 않는다.

// 프로퍼티의 값이 함수일 경우 method라고 부른다. (객체에 묶여 있는 함수를 의미)
var circle = {
    radius : 5, // property
    getDiameter : function () { // 원의 지름
        return 2 * this.radius; // this는 객체 자신을 가르키는 참조변수
    }

};
console.log(circle.getDiameter()); // 10
// 프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름이면 마침표 표기법과 대괄호 표기법을 모두 사용 가능
person = {
    name : 'Lee',
    'name-2' : 'Kim',
    1 : 10
};
console.log(person.name); // 마침표 표기법에 의한 프로퍼티 접근
console.log(person['name']); // 대괄호 표기법에 의한 프로퍼티 접근 (프로퍼티 키는 반드시 따옴표로 감싼 문자열)
console.log(person['name-2']); // 식별자 네이밍 규칙을 준수하지 프로퍼티 키도 대괄호 접근 연산자는 사용할 수 있다.
console.log(person[1]); // 프로퍼티 키가 숫자로만 이뤄질 경우 대괄호 접근번에서 따옴표 생략가능
console.log(person);
person.age = 20; // 존재하지 않는 프로퍼티에 값을 할당
console.log(person); // 프로퍼티가 동적 생성되어 프로퍼티 값이 할당되었음을 볼 수 있다.
delete person.age; // age property delete
delete person.aaa; // aaa라는 property가 존재하지 않아 에러가 발생될 거 같지만 발생 X
console.log(person);
// 프로퍼티 축약 표현
// ES6에서는 프로퍼티 값으로 변수를 사용할 시 변수와 프로퍼티 키가 동일한 이름일때 프로퍼티 키를 생략가능.
// 프로퍼티 키는 변수 이름으로 자동 생성된다.
var x = 1, y = 2; // 변수 선언 및 초기화
obj = {
    x : x,
    y : y
}; // ES5
console.log(obj);
let x1= 1; y1 = 2;
const obj2 = {x1, y1}; // ES6 : 프로퍼티 축약 표현
console.log(obj2);
// 계산된 프로퍼티 이름
const perfix = 'prop';
let i = 0;
const obj3 = {
    [`${perfix}-${++i}`] : i,
    [`${perfix}-${++i}`] : i,
    [`${perfix}-${++i}`] : i
}; // 객체 리미털 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
console.log(obj3);
const obj4 = {
    name : 'Lee',
    sayHi(){ // 메서드 축약 표현
        console.log('Hi '+this.name);
    }
};
console.log(obj4.sayHi());