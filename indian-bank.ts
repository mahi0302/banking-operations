import { Bank } from "./Bank-operation";

class IndianBank implements Bank {
    balance: number;
    accNo: string;
    name: string;
    IFSC: string;

    constructor(accNo: string, name: string, IFSC: string, initialBalance: number) {
        this.accNo = accNo;
        this.name = name;
        this.IFSC = IFSC;
        this.balance = initialBalance;
    }

    withdraw(amount: number): void {
        switch (true) {
            case amount <= 0:
                console.log("Welcome to IndinBank Bank!");
                console.log('Available Balance: ' +this.balance);
                console.log('Invalid amount for withdrawal.');
                break;
            case amount > this.balance:
                console.log("Welcome to IndinBank Bank!");
                console.log('Available Balance: ' +this.balance);
                console.log('Insufficient balance.');
                break;
            default:
                this.balance -= amount;
                console.log(`Withdrawn ${amount} successfully. Remaining balance: ${this.balance}`);
        }
    }

    deposit(amount: number): void {
        switch (true) {
            case amount <= 0:
                console.log("Welcome to IndinBank Bank!");
                console.log('Available Balance: ' +this.balance);
                console.log('Invalid amount for deposit.');
                break;
            default:
                console.log("Welcome to IndinBank Bank!");
                console.log('Available Balance: ' +this.balance);
                this.balance += amount;
                console.log(`Deposited ${amount} successfully. Updated balance: ${this.balance}`);
        }
    }

    checkBalance(): void {
        console.log(`Account balance: ${this.balance}`);
    }
}

//Testing
const indianBank = new IndianBank('0987654321', 'Jane Smith', 'IDIB0000123', 3000);

indianBank.deposit(1500);
indianBank.withdraw(500);
indianBank.checkBalance();