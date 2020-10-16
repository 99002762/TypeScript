//let fruits : string[] = [];
let elements : number[] = [];
elements.push(123);
elements.push(124);
elements.push(125);
elements.push(126);
elements.push(127);
for(const e of elements){
    console.log(e);
}

let fruits = Array<string>();
fruits = ["Apple","Mango","Orange","PineApple"];
for(const fruit of fruits){
    console.log(fruit);
}

let fruitAndPrices : (string | number)[] =[
    "Apples", 340, "Mangoes", 100, "Banana", 200
]

for (const e of fruitAndPrices) {
    console.log(e);
}
const emp : [ number, string] = [1, "srisai"];
const custBill :[string, number] = ["sai", 650];
//no idea of datatype then any.
var obj : any ="srisai";
console.log(typeof(obj));
console.log(emp);
console.log(custBill);

//Creating classess.