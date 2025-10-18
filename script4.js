function addZero(num) {
    return num < 10 ? '0' + num : num;
}

let now = new Date();
let day = addZero(now.getDate());
let month = addZero(now.getMonth() + 1);
let year = now.getFullYear();
let hour = addZero(now.getHours());
let min = addZero(now.getMinutes());
let sec = addZero(now.getSeconds());
let weekDays = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
let weekDay = weekDays[now.getDay()];

document.getElementById("currentDate").textContent = `${day}.${month}.${year}, ${weekDay}, ${hour}:${min}:${sec}`;

let endOfYear = new Date(year, 11, 31);
let daysLeft = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24));
document.getElementById("daysToEndOfYear").textContent = `До кінця року залишилось ${daysLeft} днів.`;

function calculateBirthday() {
    let birthInput = document.getElementById("birthDate").value;
    if (!birthInput) return;

    let birthDate = new Date(birthInput);
    let thisYearBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    let nextBirthday = thisYearBirthday < now ? new Date(now.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate()) : thisYearBirthday;

    let daysToBirthday = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));
    let age = now.getFullYear() - birthDate.getFullYear() + (thisYearBirthday < now ? 1 : 0);

    document.getElementById("daysToBirthday").textContent = `До наступного дня народження залишилось ${daysToBirthday} днів. ⭐️`;
    document.getElementById("age").textContent = `Вам виповниться ${age} років. ✨`;
}
