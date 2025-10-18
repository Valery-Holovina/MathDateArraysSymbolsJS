//1.

function CheckText(){

    if(document.getElementById("textarea1").value !== "" && document.getElementById("textarea1").value !== " "){
    let text = document.getElementById("textarea1").value;

    // count all letters
     let arrayLetters = text.split('');
      console.log(arrayLetters);
      let count = 0
      
      for (let i = 0; i < arrayLetters.length; i++) {
        if (arrayLetters[i] != " "){
            count++
        }else{
            count += 0
        }
        
      }
      console.log(`Count letters: ${count}`);

    // count how many words
    let array = text.split(' ');
    let countWords = array.length;
    console.log(array);
    console.log(`Count words: ${countWords}`);
    
    // count (аеєиіїоуюя)
    const LettersTest = /[аеєиіїоуюя]/g;
    let testLetters = text.match(LettersTest).length
    console.log(`Count (аеєиіїоуюя): ${testLetters}`)

    // the longest word
    let firstLength = array[0].length;
    let item = array[0]
    for (let i = 0; i < array.length; i++) {
        if(array[i].length>firstLength){
            firstLength = array[i].length
            item = array[i]
        }
    }
      console.log(`The longest word: ${item} - ${firstLength} long`)



      let view = `<p>Count letters: ${count} 🌸</p>`;
      let view2 = `<p>Count words: ${countWords} 🪷</p>`;
      let view3 = `<p>count (аеєиіїоуюя): ${testLetters} 🌷</p>`;
    let view4 = `<p>The longest word: ${item} - ${firstLength} 🌺</p>`;
      document.body.innerHTML += view + view2 + view3 + view4

    }else{
        alert("Enter Text!!")
    }



}
document.getElementById("buttonCheck").onclick = CheckText;