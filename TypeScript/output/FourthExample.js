class Account {
    constructor(no, name, balance) {
        this.accNo = no;
        this.accHolder = name;
        this.accBalance = balance;
    }
    credit(amount) {
        this.accBalance += amount;
    }
    debit(amount) {
        if (amount > this.accBalance)
            throw "Insufficient funds";
        this.accBalance -= amount;
    }
}
class SBAccount extends Account {
    calcInterest() {
        let r = 6.5 / 100;
        let t = 1 / 4;
        let p = this.accBalance;
        let interest = p * t * r;
        super.credit(interest);
    }
}
let acc = new SBAccount(123, "srisai", 4000);
acc.credit(2300);
acc.calcInterest();
console.log(acc.accBalance);
