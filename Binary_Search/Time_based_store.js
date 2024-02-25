class Time_Based_Store {
    constructor() {
        this.map = {};
    }
}

Time_Based_Store.prototype.get = function (key, timeStamp) {
    const basket = this.map[key];
    if (!basket || basket.length === 0) {
        return "";
    }
    let left = 0;
    let end = basket.length - 1;
    let result = "";
    while (left <= end) {
        const mid = Math.floor((left + end) / 2);
        const [value, time] = basket[mid];
        if (time === timeStamp) {
            return value;
        } else if (time < timeStamp) {
            result = value;
            left = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
};
Time_Based_Store.prototype.set = function (key, value, timeStamp) {
    const basket = this.map[key] || [];
    this.map[key] = basket;
    basket.push([value, timeStamp]);
};

const timeMap = new Time_Based_Store();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1));  // Output: "bar"
console.log(timeMap.get("foo", 3));  // Output: "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4));  // Output: "bar2"
console.log(timeMap.get("foo", 5));  // Output: "bar2"
