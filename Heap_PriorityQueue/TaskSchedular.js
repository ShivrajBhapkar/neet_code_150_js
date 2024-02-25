function find_minimum_idletime(chars, idle_time) {
    let frequency = Array(26).fill(0);
    for (let char of chars) {
        frequency[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    frequency.sort((a, b) => a - b);
    let max_freq = frequency[25] - 1;
    let max_idel_slots = max_freq * idle_time;
    for (let indx = 24; indx >= 0 && frequency[indx] > 0; indx--) {
        max_idel_slots -= Math.min(frequency[indx], max_freq);
    }

    return max_idel_slots > 0 ? chars.length + max_idel_slots : chars.length;
}

let charcters = ["A", "A", "A", "B", "B", "B"];
let idel = 2;
let result = find_minimum_idletime(charcters, idel);
console.log(result);
