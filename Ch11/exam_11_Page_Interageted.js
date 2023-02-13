// 원시 타입(primitive type)과 객체 타입(object/referernce type)
// 원시 타입 / 객체 타입
// 변경 불가능한 값 / 변경 가능한 값
// 변수에 실제 값이 저장 / 변수에 참조 값이 저장
// 원시 값을 가지는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달
// 객체를 가르키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달 (참조에 의한 전달 = pass by reference)
// 한 번 생성된 원시 값은 읽기 전용 값으로서 변경할 수 없다. (변경 불가능하다는 것은 변수가 아니라 원시 값 자체에 대한 진술)
// 상수(재할당이 금지된 변수)와 변경 불가능한 값은 동일시 되지 않는다.
const o = {}; // const 키워드를 사용 (재할당이 금지된 변수)
o.a = 1; // 상수에 할당한 원시 값은 변경할 수 없지만 할당한 객체는 변경할 수 있다.
console.log(o); // {a : 1}

// 원시 값은 어떤한 일이 있어도 불변하기에 데이터 신뢰성을 보장한다고 볼 수 있다.
// 원시 값을 재할당시 새로운 메모리 공간을 확보 후 재할당한 값을 저장 후 변수가 참조하던 메모리 공간의 주소를 변경(불변성)
// 때문에 상태 변경을 추적하기 쉽도록 한다고 볼 수 있다.

// 변수에서 문자열로 초기화 후 재할당하면 초기화했던 문자열, 재할당한 문자열 둘 다 메모리에 존재한다.
// 문자열은 유사 배열 객체(array-like object)이면서 이터러블(반복가능한 객체)이므로 배열과 유사하게 접근할 수 있다.
var s = 'string';
console.log(s[0]);
s[0] = 'd';
console.log(s[0]); // Error는 발생하지 않지만 원시값은 변경 불가능하다는 것을 보여준다.
// 값에 의한 전달
var score = 80;
var copy = score;
console.log(score);
console.log(copy);
score = 100;
console.log(score);
console.log(copy);
copy = score;
console.log(score, copy);
console.log(score === copy); // 타입과 값은 같지만 다른 메모리에 저장된 별개의 값이다.
// score 변수의 값을 변경해도 copy 변수의 값에 영향을 주지 않는다.

// 객체(변경 가능한 값)
var person = {
    name : 'Lee'
};
console.log(person);
person.name = 'Kim'; // 프로퍼티 값 갱신
person.address = 'Seoul'; // 프로퍼티 동적 생성
console.log(person); // {name : 'Kim', address : 'Seoul'}

// 객체에는 메모리의 효율성과 성능을 위해 변경 가능한 값으로 설계되었다.
// 객체의 단점은 원시 값과 다르게 여러 개의 식별자가 하나의 객체를 공유할 수 있다

// 얕은 복사(shadow copy)와 깊은 복사(deep copy)
const o1 = {x : {y : 1}};
// shadow copy
const c1 = {...o1}; // 스프레드 문법(spread syntax)은 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서 개별적인 값의 목록으로 만든다.
console.log(c1 === o1); // false
console.log(c1.x === o1.x); // Error
// deep copy
// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후 Node.js 환경에서 실행
const _ = require('lodash');
const c2 = _.cloneDeep(o1);
console.log(c2 === o1); // false
console.log(c2.x === o1.x); // false
// 얕은 복사와 깊은 복사로 생성된 객체는 원본과는 다른 객체이다.(참조 값이 다른 별도의 객체이다.)
// 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사한다.
// 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼 완전한 복사본을 만든다.
const v = 1;
// 원시 값을 할당한 변수를 다른 변수에 할당하는 것을 깊은 복사라고 부르기도 한다.
const c1_1 = v;
console.log(c1_1 === v);
const o2 = {x : 1};
// 객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라도 부르기도 한다.
const c2_1 = o2;
console.log(c2_1 === o2);

// 참조에 의한 전달
// 원본 person을 사본 copy에 할당하면 원본 person의 참조 값을 복사해서 copy에 저장한다.
// 두 객체 다 저장된 메모리 주소는 다르지만 동일한 참조 값을 가진다. (=동일한 객체를 가르킨다.)
// 두 개의 식별자가 하나의 객체를 공유한다는 것은 원본이나 사본 중에서 객체를 변경하면 서로 영향을 받는다.
// 객체의 프로퍼티 값을 변경, 프로퍼티 추가 및 삭제
var person2 = {
    name : 'Lee'
};
var copy = person2;