// interface 接口
interface Person {
  readonly id: number; // 只读
  name: string;
  age?: number; // 可选
}

let leslie: Person = {
  id: 123,
  name: 'leslie',
}