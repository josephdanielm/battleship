import Ship from "./ship";

describe('hit method on ship object increments timesHit property', () => {
    let testShip = new Ship(3);

    beforeEach(() => {
        testShip = new Ship(3);
    });
    afterEach(() => {
        testShip = {};
    });

    test('testShip.timesHit is 1 after being hit 1 time', () => {
        testShip.hit();
        expect(testShip.timesHit).toBe(1);
    });
    test('testShip.timesHit is 2 after being hit 2 times', () => {
        testShip.hit();
        testShip.hit();
        expect(testShip.timesHit).toBe(2);
    });
});


describe('a ship is sunken when it\'s timesHit property equals it\'s length', () => {
    let testShip2 = new Ship(5);

    beforeEach(() => {
        testShip2 = new Ship(5);
    });
    afterEach(() => {
        testShip2 = {};
    });


});