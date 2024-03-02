function houserobber(houses) {
    let length = houses.length;
    const DP = [];
    if (length === 1) {
        return 0;
    }
    if (length === 2) {
        return Math.max(houses[0], houses[1]);
    }

    DP[0] = houses[0];
    DP[1] = Math.max(houses[0], houses[1]);
    for (let indx = 2; indx < length; indx++) {
        DP[indx] = Math.max(DP[indx - 1], DP[indx - 2] + houses[indx]);
    }
    return DP[length - 1];
}

const result = houserobber([2, 7, 9, 3, 1]);
console.log(result);
