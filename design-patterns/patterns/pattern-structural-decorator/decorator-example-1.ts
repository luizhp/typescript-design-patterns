namespace Decorator1 {
    abstract class Car {

        public description: string = "";

        public getDescription(): string {
            return this.description;
        }

        public abstract cost(): number;

    }

    class ModelS extends Car {

        public description = "Model S";

        public cost(): number {
            return 73000;
        }

    }

    class ModelX extends Car {

        public description = "Model X";

        public cost(): number {
            return 77000;
        }

    }

    abstract class CarOptions extends Car {

        decoratedCar!: Car;

        public abstract getDescription(): string;

        public abstract cost(): number;

    }

    class EnhancedAutoPilot extends CarOptions {

        constructor(car: Car) {
            super();
            this.decoratedCar = car;
        }

        public getDescription(): string {
            return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
        }
        public cost(): number {
            return this.decoratedCar.cost() + 5000;
        }

    }

    class RearFacingSeats extends CarOptions {

        constructor(car: Car) {
            super();
            this.decoratedCar = car;
        }

        public getDescription(): string {
            return this.decoratedCar.getDescription() + ', Rear facing seats';
        }
        public cost(): number {
            return this.decoratedCar.cost() + 4000;
        }

    }

    let myTesla = new ModelS();
    console.log(myTesla.getDescription());
    console.log(myTesla.cost());
    console.log('\n');

    myTesla = new RearFacingSeats(myTesla);
    console.log(myTesla.getDescription());
    console.log(myTesla.cost());
    console.log('\n');

    myTesla = new EnhancedAutoPilot(myTesla);
    console.log(myTesla.getDescription());
    console.log(myTesla.cost());
    console.log('\n');

}

// Outputs
// Model S
// 73000
//
// Model S, Rear facing seats
// 77000
//
// Model S, Rear facing seats, Enhanced AutoPilot
// 82000


//UML:
//We have 4 components
//
//We have 2 abstract classes
//The first abstract class is called component and it has an operation: in my example this was the abstract car class with the operation costs.
//We also have the abstract decorator class: in my example this was the abstract class car options
//
//Then we have concrete classes for both of these
//So in my example the concrete components were "Model S" and "Model X"
//and the concrete components for decorator were the "Rear Facing Seats" and the "Enhanced Auto Pilot"
//
//As you see in the diagram, the decorator also keeps a reference to the component that is decorating and it also
//overrides the same operation


// Participants
// The participants of classical Decorator Pattern implementation include:
//
// Component: Car
// Defines the interface of the objects that can be decorated.
//
// ConcreteComponent: ModelS, ModelX
// Defines additional functionalities of the concrete component.
//
// Decorator: CarOptions
// Defines a reference to the component to be decorated, and manages the
// context. Conforms the interface of a component with proper behaviors.
//
// ConcreteDecorator: EnhancedAutoPilot , RearFacingSeats
// Defines additional features and exposes API if necessary

