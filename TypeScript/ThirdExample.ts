class employee{
    name :string;
    address : string;
    phone : number;

    constructor(name : string, address : string, phone :number){
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    display()
    {
        return `${this.name} from ${this.address}`
    }
}

const temp = new employee("srisai","Nizamabad",74385787);
console.log(temp.display());