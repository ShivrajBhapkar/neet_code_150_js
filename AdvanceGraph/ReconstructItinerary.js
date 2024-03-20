function findItinerary(tickets) {
    const graph = [];
    const result = [];
    for (const [from, to] of tickets) {
        if (!(from in graph)) {
            graph[from] = [];
        }
        graph[from].push(to);
    }

    for (city in graph) {
        graph[city].sort();
    }
    function dfs(node) {
        const destinations = graph[node];
        while (destinations && destinations.length > 0) {
            const nextNode = destinations.shift();
            dfs(nextNode);
        }
        result.push(node);
    }
    dfs("JFK");
    // Watch this video if you don't understand why we reverse result :-https://www.youtube.com/watch?v=WYqsg5dziaQ
    // Explanation :- basically we have perform DFS so node which does not have neighbours will get add in first position of the result array so we need to reverse it.
    return result.reverse();
}
const tickets = [
    ["JFK", "KUN"],
    ["JFK", "NMK"],
    ["NMK", "JFK"],
];
const result = findItinerary(tickets);
console.log(result);
