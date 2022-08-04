export class Money {
    pp: number;
    gp: number;
    sp: number;
    cp: number;

    static getValue(money: Money): string {
        let moneyStr = "";

        if (money.pp > 0)
        {
            moneyStr += `${money.pp } пм. `;
        }

        if (money.gp > 0)
        {
            moneyStr += `${money.gp} зм. `;
        }

        if (money.sp > 0)
        {
            moneyStr += `${money.sp} см. `;
        }

        if (money.cp > 0)
        {
            moneyStr += `${money.cp} мм. `;
        }

        return moneyStr;
    }
}