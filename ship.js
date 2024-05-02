export default class Ship {
    constructor(length, timesHit = 0, isSunken = false) {
        this.length = length;
        this.timesHit = timesHit;
        this.isSunken = isSunken;
    }

    hit() {
        this.timesHit++;
    }


}

