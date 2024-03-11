function FindSubSets(nums) {
    const DP = [];
    function FindSubSetsUtil(indx, temp = []) {
           DP.push([...temp]);
        for (let i = indx; i < nums.length; i++) {
            temp.push(nums[i]);
            FindSubSetsUtil(i + 1, temp);
            temp.pop();
        }
    }
    FindSubSetsUtil(0, []);
    return DP;
}
const result = FindSubSets([1, 2, 3]);
console.log(result);
