class BkashAccount {
    public phone:string
    private balance:number
    pin:number
    history:any=[]

    constructor(phone:string, balance:number, pin:number) {
        this.phone = phone
        this.balance = balance
        this.pin = pin
    }

const getBalance():number {
    if(this.pin === pin){
        return this.balance
    }
    return `PIN is wrong`
}
};
const bkashAcc = new BkashAccount("01310201273", 500000, 23423);
bkashAcc.balance = 0
console.log(bkashAcc.balance, bkashAcc.pin);