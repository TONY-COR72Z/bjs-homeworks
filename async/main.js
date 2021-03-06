// TASK 1

function setDailyRhythm(wakeUpTime, bedTime) {
    const wakeUpCall = setAlarm(wakeUpTime, goodMorning);
    const bedTimeCall = setAlarm(bedTime, goodNight);

    console.log(`Установлены будильники на время:\n${wakeUpTime} и\n${bedTime}`);

    function checkZero(i) {
        return (i < 10) ? '0' + i : i;
    }
    let wakeIntId = setInterval(() => {
        let currentTime = `${checkZero(new Date().getHours())}:${checkZero(new Date().getMinutes())}`;
        wakeUpCall(currentTime, wakeIntId);
    }, 1000);
    let sleepIntId = setInterval(() => {
        let currentTime = `${checkZero(new Date().getHours())}:${checkZero(new Date().getMinutes())}`;
        bedTimeCall(currentTime, sleepIntId);
    }, 1000);
}

function setAlarm(time, callback) {
    return (timeX, intId) => {
        if(timeX === time) {
            clearInterval(intId);
            return callback();
        }
    }
}

const goodMorning = () => alert('Доброе утро!');
const goodNight = () => alert('Спокойной ночи!');

setDailyRhythm('11:36', '11:37');