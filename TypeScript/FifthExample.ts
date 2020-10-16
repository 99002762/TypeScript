interface Customer{
    cstId : number;
    cstAddress : string;
    cstName : string
}
//interfaces could be created for representng JSON 
//data that u fetch from the REST services
let cst : Customer = {
    cstId : 123,
    cstName :"srisai",
    cstAddress : "Nizamabad"
}
//u could use 
console.log(cst.cstName)