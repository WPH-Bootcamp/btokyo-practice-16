function createResponse(data) {
    return { data: data };
}
var res1 = createResponse("Sukses"); // ApiResponse<string>
var res2 = createResponse({ id: 1, name: "Andi" }); // ApiResponse<{id:number, name:string}>
var res3 = createResponse([1, 2, 3]); // ApiResponse<{id:number, name:string}>
console.log(res1);
console.log(res2);
console.log(res3);
