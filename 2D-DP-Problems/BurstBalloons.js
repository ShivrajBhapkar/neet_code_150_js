class Solution {
    maxCoins(nums) {
        const index = (nums, i) => {
            const n = nums.length;
            if (i >= 0 && i < n) {
                return nums[i];
            }
            return 1;
        };

        const n = nums.length;
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return nums[0];
        }
        if (n === 2) {
            return nums[0] * nums[1] + Math.max(nums[0], nums[1]);
        }

        return Math.max(
            ...Array.from(
                { length: n },
                (_, i) =>
                    index(nums, i - 1) * index(nums, i) * index(nums, i + 1) +
                    this.maxCoins(nums.slice(0, i).concat(nums.slice(i + 1)))
            )
        );
    }
}
class Solution2 {
    constructor() {
        this.d = {};
    }
    maxCoins(nums) {
        const key = JSON.stringify(nums);
        if (key in this.d) {
            return this.d[key];
        }
        const index = (nums, i) => {
            const n = nums.length;
            if (i >= 0 && i < n) {
                return nums[i];
            }
            return 1;
        };
        const n = nums.length;
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            this.d[key] = nums[0];
            return nums[0];
        }
        if (n === 2) {
            const maxCoins = nums[0] * nums[1] + Math.max(nums[0], nums[1]);
            this.d[key] = maxCoins;
            return maxCoins;
        }
        const maxCoins = Math.max(
            ...Array.from(
                { length: n },
                (_, i) =>
                    index(nums, i - 1) * index(nums, i) * index(nums, i + 1) +
                    this.maxCoins(nums.slice(0, i).concat(nums.slice(i + 1)))
            )
        );
        this.d[key] = maxCoins;
        return maxCoins;
    }
}

const solution = new Solution();
const solution2 = new Solution2();
const nums = [3, 1, 5, 8];
const result = solution.maxCoins(nums);
const result2 = solution2.maxCoins(nums);
console.log(result2);
console.log(result);
