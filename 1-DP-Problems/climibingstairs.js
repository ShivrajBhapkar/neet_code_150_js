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

const ways = FindWays(3);
console.log(ways);
