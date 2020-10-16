abstract class Account {
    accNo : number;
    accHolder : string;
    accBalance : number;
    constructor(no : number, name :string, balance : number) {
        this.accNo = no;
        this.accHolder = name;
        this.accBalance = balance;
    }
    credit(amount : number){
        this.accBalance += amount;
    }
    debit(amount : number){
        if(amount > this.accBalance)
            throw "Insufficient funds";
        this.accBalance -= amount
    }
    abstract calcInterest();
}

class SBAccount extends Account{
    calcInterest(){
        let r : number =6.5/100;
        let t : number = 1/4;
        let p : number = this.accBalance;
        let interest : number = p*t*r;
        super.credit(interest);

    }
}

let acc : Account = new SBAccount(123,"srisai",4000);
acc.credit(2300);
acc.calcInterest();
console.log(acc.accBalance);