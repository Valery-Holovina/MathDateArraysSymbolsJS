// 2.

let arrayNum = []
for (let i = 0; i < 21; i++) {
   let num = Math.floor(Math.random() * 101)-50;
   arrayNum.push(num)
    
}
document.body.innerHTML += `<b>Array: </b> ${arrayNum}❤️<br> `


let positiveCount = 0
let negativeCount = 0
let zeroCount = 0

for (let i = 0; i < arrayNum.length; i++) {
   if(arrayNum[i] > 0){
    positiveCount++
   }else if(arrayNum[i] < 0){
    negativeCount++
   }else{
    zeroCount++
   }
    
}

document.body.innerHTML += `<br><b>Positive:</b> ${positiveCount} 🩵 <br>`;
document.body.innerHTML += `<b>Negative:</b> ${negativeCount} 🩵 <br>`;
document.body.innerHTML += `<b>Zero:</b> ${zeroCount} 🩵 <br>`;


let sum = 0
for (let i = 0; i < arrayNum.length; i++) {
    sum += arrayNum[i]
    
}
document.body.innerHTML += `<b>Sum:</b> ${sum} 💛 <br>`;

let lengthNums = arrayNum.length
let avg = Math.floor(sum / lengthNums)

document.body.innerHTML += `<b>Avg:</b> ${avg} 🩷 <br>`;


let evenArray = []
for (let i = 0; i < arrayNum.length; i++) {
    if(arrayNum[i] % 2 == 0){
        evenArray.push(arrayNum[i])
    }
    
}
document.body.innerHTML += `<b>EvenArray:</b> ${evenArray} 💜 <br>`;

let min = Math.min(...arrayNum)
let max = Math.max(...arrayNum)

document.body.innerHTML += `<b>Min:</b> ${min} 🤍 <br>`;
document.body.innerHTML += `<b>Max:</b> ${max} 🤍 <br>`;
