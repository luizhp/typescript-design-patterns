//https://samueleresca.net/solid-principles-using-typescript/
namespace DependencyInversionPrinciple1Wrong {
    class CarWindow {
        open() {
            //... 
        }

        close() {
            //...
        }
    }


    class WindowSwitch {
        private isOn = false;

        constructor(private window: CarWindow) {

        }

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
