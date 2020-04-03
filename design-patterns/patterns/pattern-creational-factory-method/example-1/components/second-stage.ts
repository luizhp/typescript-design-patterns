import Stage from "./stage";
import Engine from "./engine";

export default class SecondStage extends Stage {

    constructor() {

        super([
            new Engine(1000)
        ]);

    }

}
