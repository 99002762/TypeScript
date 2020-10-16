class employee {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    display() {
        return `${this.name} from ${this.address}`;
    }
}
const temp = new employee("srisai", "Nizamabad", 74385787);
console.log(temp.display());
