3.

let shop = {
"Ноутбук": 32000,
"Мишка": 800,
"Клавіатура": 1500,
"Монітор": 12000,
"Навушники": 2200,



};

function getAll(){
    for (let item in shop) {
      console.log(`${item} - ${shop[item]} грн`);
        
    }
}

function ofAllPrice(){
    let sum = 0
    for (let item in shop) {
      sum += shop[item]
     
        
    }
    console.log(`Sum: ${sum}`)
}

function maxPrice() {
  let max = 0;
  let maxItem = "";

  for (let item in shop) {
    if (shop[item] > max) {
      max = shop[item];
      maxItem = item;
    }
  }

  console.log(`Max: ${maxItem} - ${max} грн`);
}

function minPrice() {
  let min = Infinity; 
  let minItem = "";

  for (let item in shop) {
    if (shop[item] < min) {
      min = shop[item];
      minItem = item;
    }
  }
   console.log(`Min: ${minItem} - ${min} грн`);
}

function applyDiscount() {
  let discount = parseFloat(prompt("Введіть знижку (%)"));
  if (isNaN(discount) || discount < 0 || discount > 100) {
    console.log("Error");
    return;
  }

  console.log(`\nWith discount ${discount}%:`);
  for (let item in shop) {
    let newPrice = shop[item] - (shop[item] * discount / 100);
    console.log(`${item} - ${newPrice.toFixed(2)} грн`);
  }
}

getAll();
ofAllPrice();
maxPrice();
minPrice();
applyDiscount();



