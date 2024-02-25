// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

function findTemparature(temps) {
    const result = Array(temps.length).fill(0);
    const st = [];
    let indx = temps.length - 2;
    st.push(temps.length-1);
    result[temps.length - 1] = 0;
    while (indx >= 0) {
        while (temps[indx] >= temps[st[st.length - 1]]) {
            st.pop();
        }
        if(st.length>0){
            result[indx]=  st[st.length - 1]-indx;
        }
        st.push(indx);
        indx--;
    }
    return result;
}
console.log(findTemparature([73, 74, 75, 71, 69, 72, 76, 73]));