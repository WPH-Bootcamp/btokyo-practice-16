let a: {} = 5;      // ✅ valid
let b: {} = "halo"; // ✅ valid
let c: {} = [];     // ✅ valid

// let d: object = "hello";  // ❌ error (karena 5 bukan object)
let e: object = {}; // ✅ valid
let f: object = []; // ✅ valid

console.log(typeof c);
console.log(typeof f);
console.log(typeof c === typeof f);
