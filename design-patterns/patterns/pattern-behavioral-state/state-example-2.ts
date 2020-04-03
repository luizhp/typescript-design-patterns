//https://www.tutorialspoint.com/design_pattern/state_pattern.htm
namespace State2 {

    interface State {
        doAction(context: Context): void;
    }

    class Context {
        #state!: State;

        constructor() { }

        public setState(state: State): void {
            this.#state = state;
        }

        public getState(): State {
            return this.#state;
        }
    }


    class StartState implements State {

        public doAction(context: Context): void {
            console.log("Player is in start state");
            context.setState(this);
        }

        public toString(): string {
            return "Start State";
        }
    }

    class StopState implements State {

        public doAction(context: Context): void {
            console.log("Player is in stop state");
            context.setState(this);
        }

        public toString(): string {
            return "Stop State";
        }
    }

    (function main() {

        const context: Context = new Context();

        const startState: StartState = new StartState();
        startState.doAction(context);

        console.log(context.getState().toString());

        const stopState: StopState = new StopState();
        stopState.doAction(context);

        console.log(context.getState().toString());

    })();

}
