//https://samueleresca.net/solid-principles-using-typescript/
namespace DependencyInversionPrinciple1Correct {
    interface IWindow {
        open(): void;
        close(): void;
    }

    class CarWindow implements IWindow {
        open(): void {
            //...
        }

        close(): void {
            //...
        }
    }

    class WindowSwitch {
        private isOn = false;

        constructor(private window: IWindow) { }

        onPress() {
            if (this.isOn) {
                this.window.close();
                this.isOn = false;
            } else {
                this.window.open();
                this.isOn = true;
            }
        }
    }
}
