function subsetsWithDup(nums) {
    const result = [];

    // Sort the array to handle duplicates
    nums.sort((a, b) => a - b);

    function backtrack(start, currentSubset) {
        // Check if the currentSubset is already in the result
        const key = JSON.stringify(currentSubset);
        if (!AlreadyExit(currentSubset)) {
            result.push([...currentSubset]);
        }

        for (let i = start; i < nums.length; i++) {
            // Skip duplicates
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            currentSubset.push(nums[i]);
            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }
    function AlreadyExit(array) {
        const key = JSON.stringify(array);
        const isExit = result.some(
            (currarr) =>
                JSON.stringify(currarr) === key &&
                currarr.length === array.length
        );
        return isExit;
    }
    backtrack(0, []);

    return result;
}

// Example usage:
const nums1 = [1, 2, 2];
const result1 = subsetsWithDup(nums1);
console.log(result1);

const nums2 = [0];
const result2 = subsetsWithDup(nums2);
console.log(result2);
