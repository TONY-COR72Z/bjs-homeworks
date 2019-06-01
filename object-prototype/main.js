// TASK 1
function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal === undefined) {
        return null;
    } else {
        return sound;
    }
}

// TASK 2
function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += parseInt(marks[i]);
    }
    let average = sum / marks.length;
    console.log(average);
    let roundedAverage = Math.round(average);
    console.log(roundedAverage);
    return roundedAverage;
}

// TASK 3
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    let birthDate = new Date(birthday);
    let diff = now - birthDate;
    let someDays = 0;
    for (let i = birthDate.getFullYear(); i <= now.getFullYear(); i++) {
        if ((i % 4 == 0) && (i % 100 > 0) || (i % 400 == 0)) {
            someDays++;
        }
    }
    let msPerYear = 365 * 24 * 60 * 60 * 1000;
    let age = Math.floor(diff / (msPerYear + someDays));
    console.log(age);
    return age >= 18;
}