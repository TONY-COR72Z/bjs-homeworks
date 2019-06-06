"use strict"

// TASK 1 & TASK 2
class Weapon {
    constructor (name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.durabilityX30 = durability * 0.3;
    }
    takeDamage(damage) {
        if (this.durability - damage < 0) {
            this.durability = 0;
        } else {
            this.durability -= damage;
        }
    }
    getDamage() {
        if (this.durability == 'Infinity' || this.durability >= this.durabilityX30) {
            return this.attack;
        } else if (this.durability <= this.this.durabilityX30 && this.durability > 0) {
            return this.attack / 2;
        } else {
            return 0;
        }
    }
    isBroken() {
        return this.durability == 0;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}
class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3);
    }
}
class Sword extends Weapon {
    constructor() {
        super('Меч', 25, 500, 1);
    }
}
class Knife extends Weapon {
    constructor() {
        super('Нож', 5, 300, 1);
    }
}
class Stick extends Weapon {
    constructor() {
        super('Посох', 8, 300, 21);
    }
}
class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный Лук';
        this.attack = 15;
        this.range = 4;
    }
}
class Ax extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}
class StickOfTheStorm extends Stick {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

let arm = new Arm();
let bow = new Bow();
let sword = new Sword();
let knife = new Knife();
let stick = new Stick();
let longBow = new LongBow();
let ax = new Ax();
let stickOfTheStorm = new StickOfTheStorm();

console.log(arm.name);
console.log(arm.attack);
console.log(arm.durability);
console.log(arm.range);
console.log(arm);
console.log(bow);
console.log(sword);
console.log(knife);
console.log(stick);
console.log(longBow);
console.log(ax);
console.log(stickOfTheStorm);

arm.takeDamage(6);
console.log(arm.durability);
arm.getDamage();
console.log(arm.getDamage());
console.log(arm.isBroken());

sword.takeDamage(5);
console.log(sword.durability);
  
sword.takeDamage(600);
console.log(sword.durability);


// TASK 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.disciplines = [];
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        let index = -1;
        for (let i = 0; i < this.disciplines.length; i++) {
            if (this.disciplines[i].discipline == subject) {
                index = i;
            }
        }

        if (index == -1) {
            this.disciplines.push({discipline: subject, marks: []});
            index = this.disciplines.length - 1;
        } 

        if (isNaN(grade) || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
        } else {
            this.disciplines[index].marks.push(grade);
        }
        return this.disciplines[index].marks.length;
    }

    getAverageBySubject(subject) {
        for (let i = 0; i < this.disciplines.length; i++) {
            if (this.disciplines[i].discipline == subject) {
                let averageMark = 0;
                for (let j = 0; j < this.disciplines[i].marks.length; j++){
                    averageMark += this.disciplines[i].marks[j];
                }
                return averageMark / this.disciplines[i].marks.length;
            }
        }
        return 0;
    }

    getTotalAverage() {
        let sum = 0;
        let marksCounter = 0;
        for (let subject of this.disciplines) {
            for (let i = 0; i < subject.marks.length; i++) {
                sum += subject.marks[i];
                marksCounter++;
            }
        }
        if (marksCounter > 0) {
            let average = sum / marksCounter;
            console.log(average);
            return average.toFixed(2);
        } else {
            return 0;
        }
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
log.addGrade(3, 'chemistry');
log.addGrade(4, 'chemistry');
log.addGrade('good', 'chemistry');
log.addGrade(-1, 'chemistry');

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('chemistry'));
console.log(log.getAverageBySubject('phisics'));
console.log(log.getTotalAverage()); // 3.6666666666666665 (3.67)