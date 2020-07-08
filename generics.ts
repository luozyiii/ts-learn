/**
 * 泛型(generics) 
 * 参数类型不确定
 */

/**
 * 函数使用泛型
 */

// 参数是一个值
function echo<T>(arg:T):T {
  return arg
}
const str:string = 'string'
console.log(echo(str))
console.log(echo('string2'))

// 参数是两个值
function swap<T, U>(tuple: [T, U]):[U, T] {
  return [tuple[1], tuple[0]]
}
console.log(swap(['string', 123]))


// 参数是数组
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
console.log(echoWithArr([1,2,3]))

// 约束泛型
interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

console.log(echoWithLength('str'))
console.log(echoWithLength({length: 10}))
console.log(echoWithLength([1,2,3]))
// console.log(echoWithLength(123))


/**
 * 类使用泛型
 */

class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop():T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
// queue.push('str')
console.log(queue.pop().toFixed())
// console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)


interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 123, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'str', value: 123}

let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]


interface IPlus<T> {
  (a: T, b: T) :T
}

function plus(a:number, b:number):number {
  return a + b
}

function connect(a:string, b:string):string {
  return a + b
}

const a: IPlus<number> = plus
const b: IPlus<string> = connect