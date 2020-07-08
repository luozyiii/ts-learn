// 原始类型
let isDone: boolean = false
let a: number = 20
let b: number = 0b1111
let cname: string = 'leslie'
let d: undefined = undefined
let e: null = null

let f: number = undefined

// undefined 和 null 是所有类型的子类型

// any 类型
let notSure: any = 4
notSure = 'string'
notSure = true
notSure.myName
notSure.getName()

// 联合类型
let numberOrString: number | string = 234
numberOrString = 'string'

// array
let arrOfNumber: number[] = [1,2,3,4]
arrOfNumber.push(5)

// 类数组
function test() {
  console.log(arguments)
  arguments.length
  arguments[1]
}

// tuple 元组
let user: [string, number] = ['leslie', 20]

