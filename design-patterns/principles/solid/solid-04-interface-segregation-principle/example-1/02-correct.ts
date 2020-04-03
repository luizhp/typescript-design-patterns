//https://samueleresca.net/solid-principles-using-typescript/
namespace InterfaceSegregationPrinciple1Correct {
    interface Printer {
        printDocument(document: Document);
    }

    interface Stapler {
        stapleDocument(document: Document, tray: number);
    }

    interface Copier {
        copyDocument();
    }

    class SimplePrinter implements Printer {
        public printDocument(document: Document) {
            //...
        }
    }

    class SuperPrinter implements Printer, Stapler, Copier {
        public copyDocument() {
            //...
        }

        public printDocument(document: Document) {
            //...
        }

        public stapleDocument(document: Document, tray: number) {
            //...
        }
    }
}
