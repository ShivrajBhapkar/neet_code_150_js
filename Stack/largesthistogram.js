function Solve_Histogram(arr) {
     const len = arr.length;
     let nextSmall = new Array(len);
     let previousSmall = new Array(len);

     nextSmall.fill(len);
     previousSmall.fill(-1);
    let st = [];
    let st1 = [];
    st.push(len);
    for (let indx = len - 2; indx >= 0; indx--) {
        while (st.length > 0 && arr[st[st.length - 1]] >= arr[indx]) {
            st.pop();
        }
        if (st.length === 0) {
            nextSmall[indx] = len;
        } else {
            nextSmall[indx] = st[st.length - 1];
        }
        st.push(indx);
    }
    previousSmall[0] = 0;
    st1.push(0);
    for (let indx = 1; indx < len; indx++) {
        while (st1.length > 0 && arr[st1[st1.length - 1]] >= arr[indx]) {
            st1.pop();
        }
        if (st1.length === 0) {
            previousSmall[indx] = len;
        } else {
            previousSmall[indx] = st1[st1.length - 1];
        }
        st1.push(indx);
    }

   let maxArea = 0;

   for (let i = 0; i < len; i++) {
       maxArea = Math.max(
           maxArea,
           (nextSmall[i] - previousSmall[i] - 1) * arr[i]
       );
   }
   console.log("maxArea =", maxArea);
   return maxArea;
}

Solve_Histogram([2, 1, 5, 6, 2, 3]);
