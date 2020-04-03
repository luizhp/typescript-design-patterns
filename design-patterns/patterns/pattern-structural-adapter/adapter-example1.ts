//https://www.udemy.com/course/typescript-design-patterns/learn/lecture/7510450#overview
namespace Adapter1 {

    interface IPhone {
        useLightning(): void;
    }

    interface Android {
        useMicroUSB(): void;
    }

    class IPhone7 implements IPhone {
        useLightning(): void {
            console.log('Using lightning port...');
        }
    }

    class GooglePixel implements Android {
        useMicroUSB(): void {
            console.log('Using micro USB...');
        }
    }

    class LightningtoMicroUSBAdapter implements Android {
        constructor(private iphoneDevice: IPhone) { }

        useMicroUSB(): void {
            console.log('Want to use microUSB, converting to Lightning...');
            this.iphoneDevice.useLightning();
        }
    }

    class MicroUSBtoLightningAdapter implements IPhone {

        constructor(private androidDevice: Android) { }

        useLightning(): void {
            console.log('Want to use Lightning, converting to micro USB');
            this.androidDevice.useMicroUSB();
        }

    }

    (function main(): void {

        const iphone: IPhone7 = new IPhone7();
        const pixel: GooglePixel = new GooglePixel();

        const iphoneChargeAdapter: LightningtoMicroUSBAdapter = new LightningtoMicroUSBAdapter(iphone);
        iphoneChargeAdapter.useMicroUSB();

        const androidChargeAdapter: MicroUSBtoLightningAdapter = new MicroUSBtoLightningAdapter(pixel);
        androidChargeAdapter.useLightning();

    })();

}
