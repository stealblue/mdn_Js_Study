// 프로토타입(protoType)
// 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍 언어이다.

// 객체지향 프로그래밍은 여러 개의 독립적 단위, 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.
// 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 표현하는 것을 추상화(abstraction)라고 한다.
// 객체는 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 말한다.
// 객체는 프로퍼티(객체의 상태를 나타내는 데이터), 메서드(상태 데이터를 조작할 수 있는 동작)을 하나의 논리적인 단위로 묶은 복합적인 자료구조이다.
const person = {
    name: 'Lee',
    address: 'Seoul'
};
console.log(person);

const circle = {
    radius: 5,
    getDiameter() { // 원의 지름
        return 2 * this.radius;
    },
    getPerimeter() { // 원의 둘레
        return 2 * Math.PI * this.radius;
    },
    getArea() { // 원의 넓이
        return Math.PI * this.radius ** 2;
    }
};
console.log(circle);
console.log(circle.getDiameter());
console.log(circle.getPerimeter());
console.log(circle.getArea());
// 상속(inheritance)
// 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
// 자바스크립트는 상속을 통해 불필요한 중복을 제거한다.
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

const circle01 = new Circle(1);
const circle02 = new Circle(2);
console.log(circle01.getArea === circle02.getArea); // false
console.log(circle01.getArea());
console.log(circle02.getArea());

// 자바스크립트는 프로토타입을 통해 상속을 구현한다.
function Circle2(radius) {
    this.radius = radius;
    Circle2.prototype.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}
const circle001 = new Circle2(1);
const circle002 = new Circle2(2);
console.log(circle001.getArea === circle002.getArea); // true
console.log(circle001.getArea());
console.log(circle002.getArea());

// 객체가 생성될때 객체 생성 방식에 따라 프로토타입이 결정되고 [[prototype]]에 저장된다.
// 모든 객체는 하나의 프로토타입을 갖는다. 그리고 모든 프로토타입은 생성자 함수와 연결되어 있다.

