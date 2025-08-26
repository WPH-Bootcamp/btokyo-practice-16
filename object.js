var a = 5; // ✅ valid
var b = "halo"; // ✅ valid
var c = []; // ✅ valid
// let d: object = 5;  // ❌ error (karena 5 bukan object)
var e = {}; // ✅ valid
var f = []; // ✅ valid
console.log(typeof c);
console.log(typeof f);
console.log(typeof c === typeof f);
