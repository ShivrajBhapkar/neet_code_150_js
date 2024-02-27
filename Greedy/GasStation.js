function FindStartPoint(gas, pricing) {
    let start = 0;
    let petrol = 0;
    let remaining = 0;
    let total = 0;
    for (let indx = 0; indx < gas.length; indx++) {
        remaining = gas[indx] - pricing[indx];
        if (petrol >= 0) {
            petrol += remaining;
        } else {
            petrol = 0;
            start = indx;
        }
        total += remaining;
    }
    if (total === 0) {
        return start;
    } else {
        return -1;
    }
}

const start_point = FindStartPoint([2, 3, 4], [3, 4, 3]);
console.log(start_point);
