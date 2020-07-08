// 函数

// 函数声明 ?: 可选
function add(x: number, y: number, z?:number) {
  if(typeof z === 'number') {
    return x + y + z
  }else {
    return x + y 
  }
}

let result = add(2,2)
let result2 = add(2,3,4)

// 函数表达式
const add2 = function(x:number, y:number, z:number = 10): number {
  if(typeof z === 'number') {
    return x + y + z
  }else {
    return x + y 
  }
}

const add3: (x:number, y:number, z?:number) => number = add

// 类型推断 ab被推断成string类型
let ab = 'string'
ab = 2

