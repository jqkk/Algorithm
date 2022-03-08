//클래스 선언문
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle({ x: 0, y: 0 }, 2);
console.log(c.area());

//클래스 표현식

// const Circle = class Kreis {
//   constructor(center, radius) {
//     this.center = center;
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// };
