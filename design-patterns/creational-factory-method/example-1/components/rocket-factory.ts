import Rocket from "./rocket";
import Payload from "./payload";
import Stage from "./stage";
import Engine from "./engine";

export default class RocketFactory {

    buildRocket(): Rocket {
        console.log('RocketFactory -> buildRocket');
        let rocket = this.createRocket();

        let payload = this.createPayload();
        let stages = this.createStages();

        rocket.payload = payload;
        rocket.stages = stages;

        return rocket;
    }

    createRocket(): Rocket {
        console.log('RocketFactory -> createRocket');
        return new Rocket();
    }

    createPayload(): Payload {
        console.log('RocketFactory -> createPayload');
        return new Payload(0);
    }

    createStages(): Stage[] {
        console.log('RocketFactory -> createStages');
        let engine = new Engine(1000);
        let stage = new Stage([engine]);

        return [stage];
    }
}
