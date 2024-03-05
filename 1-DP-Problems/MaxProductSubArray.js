function MaximumSubArray(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let max = nums[0];

    for (let indx = 1; indx < nums.length; indx++) {
        if (nums[indx] < 0) {
            let temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }
        maxProd = Math.max(maxProd * nums[indx], nums[indx]);
        minProd = Math.min(minProd * nums[indx], nums[indx]);
        max = Math.max(max, maxProd);
    }
    return max;
}
function FindMaximumSubArrayProduct(nums) {
    let prefix = nums[0];
    let max = prefix;
    for (let indx = 1; indx < nums.length; indx++) {
        prefix *= nums[indx];
         max = Math.max(max, prefix);
        if (prefix === 0) {
            prefix = 1;
        }
        
    }

    let sufix = nums[nums.length - 1];
    max = Math.max(max, sufix);
    for (let indx = nums.lenght - 2; indx >= 0; indx--) {
        sufix *= nums[indx];
        max = Math.max(max, sufix);
        if (sufix === 0) {
            sufix = 1;
        }
        
    }
    return max;
}
let nums1 = [2, 3, -2, 4];
const newResult = FindMaximumSubArrayProduct(nums1);
const result = MaximumSubArray(nums1);
console.log(result);
console.log(newResult);
