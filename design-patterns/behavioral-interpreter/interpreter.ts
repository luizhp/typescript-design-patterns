class Context {
    private _output!: string;
    private _input!: string;

    constructor(input: string) {
        this._input = input;
    }

    set input(value: string) {
        this._input = value;
    }

    get output(): string {
        return this._output;
    }
}

interface Expression {
    interpret(context: Context): void;
}

class CommaExpression implements Expression {
    interpret(context: Context): void {
        // process comma
        console.log('interpret comma')
    }
}

class VariableExpression implements Expression {
    interpret(context: Context): void {
        // process variable
        console.log('interpret variable')
    }
}

(function main() {
    const context: Context = new Context('1 bird can fly');
    const list = [];
    list.push(new CommaExpression());
    list.push(new VariableExpression());

    list.map((exp: Expression) => {
        exp.interpret(context);
    });
})();
