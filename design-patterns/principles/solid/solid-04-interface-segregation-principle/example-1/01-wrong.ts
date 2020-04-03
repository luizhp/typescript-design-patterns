//https://samueleresca.net/solid-principles-using-typescript/
namespace InterfaceSegregationPrinciple1Wrong {
    interface Printer {
        copyDocument();
        printDocument(document: Document);
        stapleDocument(document: Document, tray: Number);
    }

    class SimplePrinter implements Printer {

        public copyDocument() {
            //...
        }

        public printDocument(document: Document) {
            //...
        }

        public stapleDocument(document: Document, tray: Number) {
            //...
        }

    }
}
