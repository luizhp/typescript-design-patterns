import Rocket from "./components/rocket";
import FreightRocketFactory from "./components/freight-rocket-factory";
import RocketFactory from "./components/rocket-factory";

console.log('main -> let freightRocket = new FreightRocketFactory().buildRocket();');
let freightRocket: Rocket = new FreightRocketFactory().buildRocket();

console.log('freightRocket.payload');
console.log(freightRocket.payload);
console.log('freightRocket.stages');
console.log(freightRocket.stages);

console.log('\n\n');

console.log('main -> let rocket: Rocket = new Rocket();');
let rocket: Rocket = new RocketFactory().buildRocket();

console.log('rocket.payload');
console.log(rocket.payload);
console.log('rocket.stages');
console.log(rocket.stages);

// main -> let freightRocket = new FreightRocketFactory().buildRocket();
// RocketFactory -> buildRocket
// FreightRocketFactory -> createRocket
// FreightRocketFactory -> createPayload
// FreightRocketFactory -> createStages
// freightRocket.payload
// Satellite { weight: 120 }
// freightRocket.stages
// [
//   FirstStage { engines: [ [Engine], [Engine], [Engine], [Engine] ] },
//   SecondStage { engines: [ [Engine] ] }
// ]



// main -> let rocket: Rocket = new Rocket();
// RocketFactory -> buildRocket
// RocketFactory -> createRocket
// RocketFactory -> createPayload
// RocketFactory -> createStages
// rocket.payload
// Payload { weight: 0 }
// rocket.stages
// [ Stage { engines: [ [Engine] ] } ]