// TASK 1

function compareArrays(arr1, arr2) {
    return arr1.length !== arr2.length ? false : arr1.every((element, i) => element === arr2[i]);
}

function memorize(fn, limit) {
    let results = [];
    return function () {
        resX = results.find(result => compareArrays(result.args, Array.from(arguments)));
        if (resX) {
            console.log(`Результат из памяти: `); 
            return resX.result;
        } else {
            results.push({args: Array.from(arguments), result: fn(...arguments)})
            if (results.length > limit) results.shift();
            //console.log(results);
            console.log(`Результат не из памяти: `);
            return results[results.length - 1].result;
        }
    }
}

// CHECK IN

console.log(compareArrays([8, 1, 2], [8, 1, 2]));
console.log(compareArrays([4, 1, 2], [4, 1, 2, 5, 1, 8]));

const sum = function(...arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return (sum);
}

const mSum = memorize(sum, 3);

console.log(mSum(5, 4, 2));

console.log(mSum(7, 4));

console.log(mSum(5, 4));

console.log(mSum(7, 4));

console.log(mSum(7, 4));

console.log(mSum(7, 3, 1));

console.log(mSum(3, 4));

console.log(mSum(3, 4));