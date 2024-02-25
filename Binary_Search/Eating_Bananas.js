// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

function Find_Bananas(bananas, hours) {
    let low = 1;
    let high = 0; // Initialize with 0 instead of Number.MIN_SAFE_INTEGER
    for (let indx = 0; indx < bananas.length; indx++) {
        high = Math.max(high, bananas[indx]);
    }
    while (low < high) {
        // Change the condition to low < high
        let mid = Math.floor((low + high) / 2);
        if (is_Possible(mid, hours, bananas)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function is_Possible(eat_at_time, hours, bananas) {
    let total_hours = 0;
    for (let indx = 0; indx < bananas.length; indx++) {
        let time = Math.floor(bananas[indx] / eat_at_time);
        total_hours += time;
        if (bananas[indx] % eat_at_time !== 0) {
            total_hours++;
        }
    }
    return total_hours <= hours;
}

console.log(Find_Bananas([30, 11, 23, 4, 20], 5));
