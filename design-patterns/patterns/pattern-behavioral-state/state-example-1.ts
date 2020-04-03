//https://www.udemy.com/course/typescript-design-patterns/learn/lecture/7643120#overview
namespace State1 {

    interface State {
        order: Order;

        cancelOrder(): void;
        verifyPayment(): void;
        shipOrder(): void;

    }

    class Order {

        public readonly cancelledOrderState!: State;
        public readonly paymentPendingState!: State;
        public readonly orderShippedState!: State;
        public readonly orderBeingPreparedState!: State;

        #currentState!: State;

        constructor() {

            this.cancelledOrderState = new CancelOrderState(this);
            this.paymentPendingState = new PaymentPendingState(this);
            this.orderShippedState = new OrderShippedState(this);
            this.orderBeingPreparedState = new OrderBeingPreparedState(this);

            this.setState(this.paymentPendingState);

        }

        public setState(state: State): void {
            this.#currentState = state;
        }

        public getState(): State {
            return this.#currentState;
        }
    }

    class PaymentPendingState implements State {

        public order!: Order;

        constructor(order: Order) {
            this.order = order;
        }

        cancelOrder(): void {
            console.log('Cancelling your unpaind order...');
            this.order.setState(this.order.cancelledOrderState);
        }
        verifyPayment(): void {
            console.log('Payment Verified! Shipping soon.');
            this.order.setState(this.order.orderBeingPreparedState);
        }
        shipOrder(): void {
            console.log('Cannot ship the order when payment is pending!');
        }

    }

    class CancelOrderState implements State {

        public order!: Order;

        constructor(order: Order) {
            this.order = order;
        }

        cancelOrder(): void {
            console.log('Your order has been already cancelled');
        }
        verifyPayment(): void {
            console.log('Order cancelled, you cannot verify payment');
        }
        shipOrder(): void {
            console.log('Order cannot ship, it was cancelled');
        }

    }

    class OrderBeingPreparedState implements State {

        public order!: Order;

        constructor(order: Order) {
            this.order = order;
        }

        cancelOrder(): void {
            console.log('Cancelling your order...');
            this.order.setState(this.order.cancelledOrderState);
        }
        verifyPayment(): void {
            console.log('Already verified your payment');
        }
        shipOrder(): void {
            console.log('Shipping your order now!');
            this.order.setState(this.order.orderShippedState);
        }

    }

    class OrderShippedState implements State {

        public order!: Order;

        constructor(order: Order) {
            this.order = order;
        }

        cancelOrder(): void {
            console.log('You cannot cancel, already shipped...');
        }
        verifyPayment(): void {
            console.log('You cannot verify payment, already shipped...');
        }
        shipOrder(): void {
            console.log('You cannot ship it again, already shipped...');
        }

    }


    (function main() {

        const order = new Order();
        
        console.log(`[[Order state: ${(<any>order.getState()).constructor.name}]]`);

        console.log('\n<<test - ship before check payment>>');
        order.getState().shipOrder();

        console.log('\n<<test - check payment>>');
        order.getState().verifyPayment();

        console.log(`[[Order state: ${(<any>order.getState()).constructor.name}]]`);

        console.log('\n<<test - verify payment again>>');
        order.getState().verifyPayment();

        console.log('\n<<test - ship order>>');
        order.getState().shipOrder();
        console.log(`[[Order state: ${(<any>order.getState()).constructor.name}]]`);

        console.log('\n<<test - try to cancel a shipped order>>');
        order.getState().cancelOrder();

    })();

}
