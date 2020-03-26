//https://www.tutorialspoint.com/design_pattern/observer_pattern.htm
namespace Observer2 {

    class Subject {

        private observers: Observer[] = [];
        private state!: number;

        public getState(): number {
            return this.state;
        }

        public setState(state: number): void {
            this.state = state;
            this.notifyAllObservers();
        }

        public attach(observer: Observer): void {
            this.observers.push(observer);
        }

        public notifyAllObservers(): void {
            for (let observer of this.observers) {
                observer.update();
            }
        }
    }

    abstract class Observer {
        protected subject!: Subject;
        public abstract update(): void;
    }

    class BinaryObserver extends Observer {

        constructor(subject: Subject) {
            super();
            this.subject = subject;
            this.subject.attach(this);
        }

        dec2bin(dec: number): string {
            //return (dec >>> 0).toString(2);
            return (dec).toString(2);
        }

        public update(): void {
            console.log(`Binary String: ${this.dec2bin(this.subject.getState())}`);
        }
    }

    class OctalObserver extends Observer {

        constructor(subject: Subject) {
            super();
            this.subject = subject;
            this.subject.attach(this);
        }

        dec2oct(dec: number): string {
            //return (dec >>> 0).toString(8);
            return (dec).toString(8);
        }

        public update(): void {
            console.log(`Octal String: ${this.dec2oct(this.subject.getState())}`);
        }
    }

    class HexaObserver extends Observer {

        constructor(subject: Subject) {
            super();
            this.subject = subject;
            this.subject.attach(this);
        }

        dec2hex(dec: number): string {
            //return (dec >>> 0).toString(16);
            return (dec).toString(16);
        }


        public update(): void {
            console.log(`Hex String: ${this.dec2hex(this.subject.getState())}`);
        }
    }


    let subject: Subject = new Subject();

    new HexaObserver(subject);
    new OctalObserver(subject);
    new BinaryObserver(subject);

    console.log("First state change: 15");
    subject.setState(15);
    console.log("\n");
    console.log("Second state change: 10");
    subject.setState(10);

}
