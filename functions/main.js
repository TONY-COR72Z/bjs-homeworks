// TASK 1
function getSolutions(a, b, c) {
    let D = (b ** 2) - 4 * a * c;
    let x1, x2;
    if (D < 0) {
        return {D};
    }
    else if (D == 0) {
        x1 = -b / (2 * a);
        return {
            roots: [x1], 
            D: D
        };
    }
    else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            roots: [x1, x2],
            D: D
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    else if (result.D > 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// TASK 2
function getAverageScore(data) {
    let marksList = {};
    let averageMark = 0;
    let disciplinesCounter = 0;
    for (let discipline in data) {
        let average = averDis(data[discipline]);
        marksList[discipline] = average;
        averageMark += average;
        disciplinesCounter++;
    }
    marksList.average = averageMark / disciplinesCounter;
    return marksList;
}
function averDis(value){
    let averageValue = 0;
    for (let i = 0; i < value.length; i++) {
        averageValue += value[i];
    }
    return averageValue / value.length;
}

console.log(getAverageScore({
     algebra: [5, 5, 5, 5, 5, 5],
    geometry: [4, 4, 4, 3, 3],
     russian: [4, 4, 4, 4],
      french: [5, 5, 5]
}));

// TASK 3
function getPersonData(secretData) {
    let arr = ["Родриго", "Эмильо"];
    return {
        firstName: arr[secretData.aaa],
         lastName: arr[secretData.bbb]
    };
}

console.log(getPersonData({
   aaa: 0,
   bbb: 0
}));
console.log(getPersonData({
   aaa: 1,
   bbb: 0
}));
console.log(getPersonData({
   aaa: 0,
   bbb: 1
}));
console.log(getPersonData({
   aaa: 1,
   bbb: 1
}));