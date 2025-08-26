function identityString(value) {
    return value;
}
function identityNumber(value) {
    return value;
}
console.log(identityString('hello'));
console.log(identityString(20));
function identity(value) {
    return value;
}
var a = identity("Halo"); // string
var b = identity(123); // number
var c = identity(true); // boolean
console.log(a);
console.log(b);
