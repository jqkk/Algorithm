const circle = {
  center: { x: 1.0, y: 2.0 },
  radius: 2.5,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area());
