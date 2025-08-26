interface ApiResponse<T> {
  data: T;
  error?: string;
}

function createResponse<S>(data: S): ApiResponse<S> {
  return { data };
}

let res1 = createResponse("Sukses"); // ApiResponse<string>
let res2 = createResponse({ id: 1, name: "Andi" }); // ApiResponse<{id:number, name:string}>
let res3 = createResponse([1,2,3]); // ApiResponse<{id:number, name:string}>

console.log(res1);
console.log(res2);
console.log(res3);