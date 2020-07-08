/**
 * 类(class)：定义一切事物的抽象特点
 * 对象(Object)：类的实例
 * 面向对象(OOP)三大特性：封装、继承、多态 
 * 访问控制符： public(默认公用) protected(受保护) readonly(只读)
 * 静态属性、方法
 * */

class Animal {
  public name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
console.log(Animal.categoies) // 静态属性
const snake = new Animal('lily')
console.log(snake.run())
console.log(Animal.isAnimal(snake)) // 静态方法

 /**
  * npm 包 ts-node
  * ts-node class.ts
  */

/** 继承 */
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

/**
 * 重写
 * super 关键字
*/
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'zao, ' + super.run()
  }
}

const maomao = new Cat('maomao')
console.log(maomao.run())

/**
 * 类和接口
 */

// 逻辑功能提取
interface Radio {
  switchRadio(): void
}

interface Battery {
  checkBatteryStatus()
}

class Car implements Radio {
  switchRadio() {}
}

class Cellphone implements Radio, Battery {
  switchRadio() {}
  checkBatteryStatus() {}
}

// 接口的继承
interface RadioWithBattery extends Radio {
  checkBatteryStatus()
}

class Cellphone2 implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}



