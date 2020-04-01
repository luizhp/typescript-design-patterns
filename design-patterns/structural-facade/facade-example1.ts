//https://www.udemy.com/course/typescript-design-patterns/learn/lecture/7513954#overview
//tsc facade-example1.ts --target es2020
//node ./facade-example1.js

namespace Facade1 {

    class BlurayPlayer {
        on(): void {
            console.log('Bluray player turning on...');
        }

        turnOff(): void {
            console.log('Bluray turning off...');
        }

        play(): void {
            console.log('Playing bluray disc...');
        }
    }

    class Amplifier {
        on(): void {
            console.log('Amp player turning on...');
        }

        turnOff(): void {
            console.log('Amplifier turning off...');
        }

        setSource(source: string): void {
            console.log(`Setting source to ${source}`);
        }

        setVolume(volumeLevel: number): void {
            console.log(`Setting volume to ${volumeLevel}`);
        }
    }

    class Lights {
        dim(): void {
            console.log('Lights are dimming...');
        }
    }

    class TV {
        turnOn(): void {
            console.log('TV turning on...');
        }

        turnOff(): void {
            console.log('TV turning off...');
        }

    }

    class PopcornMaker {
        turnOn(): void {
            console.log('Popcorn maker turning on...');
        }

        turnOff(): void {
            console.log('Popcorn maker turning off...');
        }

        pop(): void {
            console.log('Popping corn!');
        }
    }

    class HomeTheaterFacade {

        #bluray!: BlurayPlayer;
        #amp!: Amplifier;
        #lights!: Lights;
        #tv!: TV;
        #popcornMaker!: PopcornMaker;

        constructor(amp: Amplifier, bluray: BlurayPlayer, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
            this.#amp = amp;
            this.#bluray = bluray;
            this.#lights = lights;
            this.#tv = tv;
            this.#popcornMaker = popcornMaker;
        }

        public watchMovie(): void {
            this.#popcornMaker.turnOn();
            this.#popcornMaker.pop();

            this.#lights.dim();

            this.#tv.turnOn();

            this.#amp.on();
            this.#amp.setSource('bluray');
            this.#amp.setVolume(11);

            this.#bluray.on();
            this.#bluray.play();
        }

        public endMovie(): void {
            this.#popcornMaker.turnOff();
            this.#amp.turnOff();
            this.#tv.turnOff();
            this.#bluray.turnOff();
        }
    }

    (function main(): void {
        const bluray = new BlurayPlayer();
        const amp = new Amplifier();
        const lights = new Lights();
        const tv = new TV();
        const popcornMaker = new PopcornMaker();

        let homeTheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);

        homeTheater.watchMovie();
    })();

}
