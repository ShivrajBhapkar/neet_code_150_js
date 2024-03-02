function FindWays(stairs_number) {
    const DP = [stairs_number+1];
    DP.fill(0);
    DP[0] = 1;
    DP[1] = 1;
    for (let indx = 2; indx <= stairs_number; indx++) {
        DP[indx] = DP[indx - 1] + DP[indx - 2];
    }
    return DP[stairs_number];
}
function FindWaysOptimize(stairs_number) {
    let first = 1;
    let second = 1;
    for (let indx = 2; indx <= stairs_number; indx++){
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}
const waysutil = FindWaysOptimize(5);
console.log(waysutil);
const ways = FindWays(3);
console.log(ways);
