//https://samueleresca.net/solid-principles-using-typescript/
//The Open-closed Princple (OCP)
//Software entities should be open for extension but closed for modification.
//The risk of changing an existing class is that you will introduce  an inadvertent change in behaviour.
//The solution is create another class that overrides the behaviour of  the original class.
//By following the OCP, a component is more likely to contain maintainable and re-usable code.
var OpenClosedPrinciple1;
(function (OpenClosedPrinciple1) {
    class CreditCard {
        constructor(code, Expiration, MonthlyCost) {
            this.Code = code;
            this.Expiration = Expiration;
            this.MonthlyCost = MonthlyCost;
        }
        getCode() {
            return this.Code;
        }
        getExpiration() {
            return this.Expiration;
        }
        monthlyDiscount() {
            return this.MonthlyCost * 0.02;
        }
    }
    class GoldCreditCard extends CreditCard {
        monthlyDiscount() {
            return this.MonthlyCost * 0.05;
        }
    }
    class SilverCreditCard extends CreditCard {
        monthlyDiscount() {
            return this.MonthlyCost * 0.03;
        }
    }
    (function main() {
        const cc = new CreditCard("123", new Date(), 10);
        console.log(`Credit Card - Monthly Discount: ${cc.monthlyDiscount()}`);
        const ccGold = new GoldCreditCard("123", new Date(), 10);
        console.log(`Gold Credit Card - Monthly Discount: ${ccGold.monthlyDiscount()}`);
        const ccSilver = new SilverCreditCard("123", new Date(), 10);
        console.log(`Silver Credit Card - Monthly Discount: ${ccSilver.monthlyDiscount()}`);
    })();
})(OpenClosedPrinciple1 || (OpenClosedPrinciple1 = {}));
