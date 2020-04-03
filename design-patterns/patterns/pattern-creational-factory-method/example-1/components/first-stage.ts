import Stage from "./stage";
import Engine from "./engine";

export default class FirstStage extends Stage {
    constructor() {
        super([
            new Engine(1000),
            new Engine(1000),
            new Engine(1000),
            new Engine(1000)
        ]);
    }
}
