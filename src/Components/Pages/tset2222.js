// let arr = [10, 2, -2, 2, -8, 7, 2, 10, 2]

const counts = {};
const sampleArray = [10, 2, -2, 2, -8, 7, 2, 10, 2];
debugger
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)
