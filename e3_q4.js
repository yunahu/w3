class Shape {
  constructor() {
    if (this.constructor === Shape)
      throw new Error("This is an abstract class");
  }

  area() {
    throw new Error("This method needs to be implemented");
  }

  parameter() {
    throw new Error("This method needs to be implemented");
  }
}

class Square extends Shape {
  constructor(width) {
    super();
    this.height = width;
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }

  perimeter() {
    return this.height * 4;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
