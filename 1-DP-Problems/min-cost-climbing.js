function FindMinimumCost(costs) {
    let length = costs.length;
    if (length === 2) {
        return Math.min(costs[0], costs[1]);
    }

    const DP = new Array(length+ 1).fill(0);
    for (let indx = 2; indx <= length; indx++) {
        DP[indx] = Math.min(
            DP[indx - 1] + costs[indx - 1],
            DP[indx - 2] + costs[indx - 2]
        );
    }
    return DP[length];
}
const minCost = FindMinimumCost([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
console.log(minCost);
