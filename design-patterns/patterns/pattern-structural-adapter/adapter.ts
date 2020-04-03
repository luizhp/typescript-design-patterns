interface Adapter {
    request(newParam: string): void;
}

class InterfaceAdapter implements Adapter {
    request(newParam: string): void {
        const old = new OldInterface();
        old.requestInOldWay(newParam);
    };
}

class OldInterface {
    requestInOldWay(oldParam: string): void {
        console.log(`old interface: requestedParam ${oldParam}`);
    };
}

(function main(): void {

    const adapter = new InterfaceAdapter();
    adapter.request('param');

})();
