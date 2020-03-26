import RocketFactory from "./rocket-factory";
import FreightRocket from "./freight-rocket";
import Satellite from "./satellite";
import FirstStage from "./first-stage";
import SecondStage from "./second-stage";
import { FreightRocketStages } from "../types/freight-rocket-stages";

export default class FreightRocketFactory extends RocketFactory {

    nextSatelliteId = 0;

    createRocket(): FreightRocket {
        console.log('FreightRocketFactory -> createRocket');
        return new FreightRocket();
    }

    createPayload(): Satellite {
        console.log('FreightRocketFactory -> createPayload');
        return new Satellite(this.nextSatelliteId++);
    }

    createStages(): FreightRocketStages {
        console.log('FreightRocketFactory -> createStages');
        return [
            new FirstStage(),
            new SecondStage()
        ];
    }

}
