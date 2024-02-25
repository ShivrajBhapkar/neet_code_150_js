function encode(strings) {
    return strings.join(":;") + ":;";
}
function decode(strings) {
    return strings.split(":;").slice(0, -1);
}

const input1 = ["lint", "code", "love", "you"];
const encoded1 = encode(input1);
console.log("Encoded:", encoded1);
const decode1 = decode(encoded1);
console.log("Decodes:", decode1);
