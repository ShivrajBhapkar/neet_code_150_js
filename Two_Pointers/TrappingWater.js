function calculate_water_trapper(heights) {
    let left = 0;
    let right = heights.length - 1;
    let lMax = heights[0];
    let rMax = heights[right];
    let ans = 0;
    while (left <= right) {
        if (lMax <= rMax) {
            lMax = Math.max(lMax, heights[left]);
            let val = Math.min(lMax, rMax) - heights[left];
            ans += val > 0 ? val : 0;
            left++;
        } else {
            rMax = Math.max(rMax, heights[right]);
            let val = Math.min(rMax, lMax) - heights[right];
            ans += val > 0 ? val : 0;
            right--;
        }
    }
    return ans;
}

console.log(calculate_water_trapper([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));