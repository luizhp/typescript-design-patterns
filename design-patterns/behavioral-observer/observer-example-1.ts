namespace Observer1 {
    interface Subject {
        registerObserver(o: Observer): void;
        removeObserver(o: Observer): void;
        notifyObservers(): void;
    }

    interface Observer {
        update(temperature: number): void;
    }

    class WeatherStation implements Subject {

        private temperature!: number;
        private observers: Observer[] = [];

        setTemperature(temp: number): void {
            console.log(`WeatherStation: new temperature measurement: ${temp}`);
            this.temperature = temp;
            this.notifyObservers();
        }

        registerObserver(o: Observer): void {
            if (this.observers.includes(o))
                throw new Error("Observer already registered");
            this.observers.push(o);
        }
        removeObserver(o: Observer): void {
            let obsItem = this.observers.indexOf(o);
            if (obsItem < 0)
                throw new Error("Observer not registered");
            this.observers.splice(obsItem, 1);
        }
        notifyObservers(): void {
            for (const observer of this.observers)
                observer.update(this.temperature);
        }


    }

    class TemperatureDisplay implements Observer {

        private subject!: Subject;

        constructor(weatherStation: Subject) {
            this.subject = weatherStation;
            weatherStation.registerObserver(this);
        }

        update(temperature: number): void {
            console.log('TemperatureDisplay: I need to update my display.')
            //Logic
        }
    }

    class Fan implements Observer {

        private subject!: Subject;

        constructor(weatherStation: Subject) {
            this.subject = weatherStation;
            weatherStation.registerObserver(this);
        }

        update(temperature: number): void {
            if (temperature > 25) {
                console.log('Fan: Its hot here, turning myself on');
                //Logic
            } else {
                console.log('Fan: Its nice and cool, turning myself off');
                //Logic
            }
        }
    }

    let weatherStation = new WeatherStation();

    let weatherDisplay = new TemperatureDisplay(weatherStation);
    let fan = new Fan(weatherStation);

    weatherStation.setTemperature(20);
    weatherStation.setTemperature(30);

}

// OUTPUT:
// └─▶ node observer.js
// WeatherStation: new temperature measurement: 20
// TemperatureDisplay: I need to update my display.
// Fan: Its nice and cool, turning myself off
// WeatherStation: new temperature measurement: 30
// TemperatureDisplay: I need to update my display.
// Fan: Its hot here, turning myself on

// https://www.udemy.com/course/typescript-design-patterns/learn/lecture/7514310#overview
// https://www.tutorialspoint.com/design_pattern/observer_pattern.htm

// -* Participants *-
// Subject - interface Subject
//    Subject to be observed. Defines methods to attach or notify observers.
//    A subject could also be a composite that contains sub-subjects, which allows
//    multiple states to be observed with the same interface.
//
// Concrete subject: WeatherStation
//    Contains state related to the subject, and implements methods or properties
//    to get and set their state.
//
// Observer - interface Observer
//    Defines the interface of an object that reacts when an observation notifies.
//    In JavaScript, it could also be an interface (or signature) of a function.
//
// Concrete observer: TemperatureDisplay, Fan
//    Defines the action that reacts to the notifications of subjects being observed.
//    Could be a callback function that matches the signature defined.
//


// Pattern scope
// Observer Pattern is a pattern that may easily structure half of the project.
// In MV* architectures, Observer Pattern can decouple the view from business logic.
// The concept of view can be applied to other scenarios related to displaying information as well.

