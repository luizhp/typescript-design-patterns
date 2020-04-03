import Payload from "./payload";

export default class Satellite extends Payload {

    constructor(
        public id: number
    ) {
        super(200);
    }

}
