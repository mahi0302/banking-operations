export interface Bank {
    balance: number;
    accNo: string;
    name: string;
    IFSC: string;

    withdraw(amount: number): void;
    deposit(amount: number): void;
    checkBalance(): void;
}
