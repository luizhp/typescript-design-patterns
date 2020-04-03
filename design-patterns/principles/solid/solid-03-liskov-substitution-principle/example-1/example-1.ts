//https://samueleresca.net/solid-principles-using-typescript/
//The Liskov Substitution Principle (LSP)
//Child classes should never break the parent class’ type definitions.
//The concept of this principle was introduced by Barbara Liskov in a
//1987 conference keynote and later published in a paper together with
//Jeannette Wing in 1994.
//As simple as that, a subclass should override the parent class methods
//in a way that does not break functionality from a client’s point of view.

namespace LiskovSubstitutionPrinciple1 {

    abstract class PostalAddress {
        Addressee: string;
        Country: string
        PostalCode: string;
        City: string;
        Street: string
        House: number;

        /*
        * @returns Formatted full address
        */
        abstract WriteAddress(): string;
    }

    class ItalyPostalAddress extends PostalAddress {
        WriteAddress(): string {
            return `Italy ${this.City}`;
        }
    }
    class UKPostalAddress extends PostalAddress {
        WriteAddress(): string {
            return `UK ${this.City}`;
        }
    }
    class USAPostalAddress extends PostalAddress {
        WriteAddress(): string {
            return `USA ${this.City}`;
        }
    }

    class AddressWriter {
        PrintPostalAddress(writer: PostalAddress): string {
            return `Formatted Address ${writer.WriteAddress()}`;
        }
    }

    (function main() {

        const italyPostalAddress: PostalAddress = new ItalyPostalAddress();
        italyPostalAddress.City = 'Rome';

        const ukPostalAddress: PostalAddress = new UKPostalAddress();
        ukPostalAddress.City = 'London';

        const usaPostalAddress: PostalAddress = new USAPostalAddress();
        usaPostalAddress.City = 'Washington DC';

        const addressWriter = new AddressWriter();
        console.log(addressWriter.PrintPostalAddress(italyPostalAddress));
        console.log(addressWriter.PrintPostalAddress(ukPostalAddress));
        console.log(addressWriter.PrintPostalAddress(usaPostalAddress));

    })();

}
