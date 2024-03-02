function houseRobberRecursive(houses) {
    let length = houses.length;
    function houseUtil(start, end, memo) {
        if (start > end) {
            return 0;
        }
        if (memo[start] === undefined) {
            memo[start] = houses[start];
        }
        let firstExeculde = houseUtil(start + 1, end, {});
        let includeCurrent = houses[start] + houseUtil(start + 2, end - 1, {});
        const result = Math.max(firstExeculde, includeCurrent);
        return result;
    }

    if (length === 1) {
        return 0;
    }
    if (length === 2) {
        return houses[0];
    }
    const firstSkip = houseUtil(1, length - 1, {});
    const robbefirst = houses[0] + houseUtil(2, length - 2, {});
    return Math.max(firstSkip, robbefirst);
}

function FindMaximumProfit(houses) {
    function calculateProfit(newhouses) {
        let length = newhouses.length;
        const DP = [length];
        DP[0] = newhouses[0];
        DP[1] = Math.max(newhouses[0], newhouses[1]);
        for (let indx = 2; indx < length; indx++) {
            DP[indx] = Math.max(DP[indx - 1], DP[indx - 2] + newhouses[indx]);
        }
        return DP[length - 1];
    }
    const skipFirst = calculateProfit(houses.slice(1));
    const robbFirst = calculateProfit(houses.slice(0, houses.length - 1));
    return Math.max(skipFirst, robbFirst);
}
const nums2 = [1, 2, 3, 1];
console.log(houseRobberRecursive(nums2));
console.log(FindMaximumProfit(nums2));
