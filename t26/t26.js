let words = ["словник", "статуєтка", "будинок", "собака"];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray.push("_");
}

let remainingLetters = word.length;
while (remainingLetters > 0) {
  alert(answerArray.join(" "));

  let guess = prompt(
    "Укажіть першу букву. Або залишіть пустим поле, щоб вийти з гри"
  );

  if (guess === null) {
    break;
  } else if (guess.length === 0) {
    break;
  } else if (guess.length > 1) {
    alert("Введіть лише 1 букву, лох!");
  } else {
    let atLeasteOneLetterGuessed = false;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        answerArray[i] = guess;
        atLeasteOneLetterGuessed = true;
        remainingLetters--;
      }
    }
    if(!atLeasteOneLetterGuessed){
      alert("TRY HARDER, THIS IS INCORRECT");
    }
  }
}

alert(answerArray.join(""));