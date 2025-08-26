function identityString(value: string): string {
  return value;
}

function identityNumber(value: number): number {
  return value;
}

console.log(identityString('hello'));
// console.log(identityString(20));

function identity<T>(value: T): T {
  return value;
}

// function identityTwo<T,S>(value: T): S {
//   return value<S>;
// }

let a = identity("Halo"); // string
let b = identity(123);    // number
let c = identity(true);   // boolean

console.log(a);
console.log(b);