namespace Builder1 {
    enum Size {
        Small,
        Medium,
        Big
    };

    type menu = "burger" | "fries" | "cola";

    type mealOrderOptions = {
        [optionType: string]: Object;
    };

    type mealOrder = {
        name?: string;
        options: mealOrderOptions;
        size?: Size;
    };

    type meal = {
        [key in menu]: mealOrder | void;
    };

    interface FastFoodBuilder {
        buildBurger(name: string, options: mealOrderOptions): FastFoodBuilder;
        buildFries(size: Size, options: mealOrderOptions): FastFoodBuilder;
        buildCola(size: Size, options: mealOrderOptions): FastFoodBuilder;
        getMeal(): FastFood;
    }

    class FastFood {

        private _burger: mealOrder | void;
        private _fries: mealOrder | void;
        private _cola: mealOrder | void;

        constructor(burger: mealOrder | void, fries: mealOrder | void, cola: mealOrder | void) {
            this._burger = burger;
            this._fries = fries;
            this._cola = cola;
        }

        get burger(): mealOrder | void {
            return this._burger;
        }

        get fries(): mealOrder | void {
            return this._fries;
        }

        get cola(): mealOrder | void {
            return this._cola;
        }
    }

    class Mcdonalds implements FastFoodBuilder {

        private _meal: meal = {
            burger: undefined,
            fries: undefined,
            cola: undefined
        };

        constructor(options: mealOrderOptions) {
            console.log('basic info');
        }

        buildBurger(name: string, options: mealOrderOptions): FastFoodBuilder {
            this._meal.burger = {
                name,
                options
            }
            return this;
        }

        buildFries(size: Size, options: mealOrderOptions): FastFoodBuilder {
            this._meal.fries = {
                size,
                options
            }
            return this;
        }

        buildCola(size: Size, options: mealOrderOptions): FastFoodBuilder {
            this._meal.cola = {
                size,
                options
            }
            return this;
        }

        getMeal(): FastFood {
            const meal: FastFood = new FastFood(this._meal.burger, this._meal.fries, this._meal.cola);
            return meal;
        }
    }

    (function main() {
        const mcd: Mcdonalds = new Mcdonalds({ location: 'Zhujiang New Town, Canton, China' });
        const meal: FastFood = mcd
            .buildBurger('Big Mac', { sauce: false })
            //.buildCola(Size.Medium, { ice: false })
            .buildFries(Size.Big, { 'sauce-amount': 2 })
            .getMeal();
        console.log(meal);
    })();

}
