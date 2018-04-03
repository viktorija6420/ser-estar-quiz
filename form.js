const answer1 = document.querySelector("#id1");
const answer2 = document.querySelector("#id2");
const answer3 = document.querySelector("#id3");
const answer4 = document.querySelector("#id4");
const answer5 = document.querySelector("#id5");
const answer6 = document.querySelector("#id6");
const answer7 = document.querySelector("#id7");
const answer8 = document.querySelector("#id8");
const answer9 = document.querySelector("#id9");
const answer10 = document.querySelector("#id10");
const demo = document.querySelector("#demo");


function countTotal() {
  const answers =
  [answer1.value === "está",
  answer2.value === "eres",
  answer3.value === "está",
  answer4.value === "soy",
  answer5.value === "está",
  answer6.value === "eres",
  answer7.value === "Estamos",
  answer8.value === "son",
  answer9.value === "son",
  answer10.value === "Estoy"]

  let total = 0;
  for (const prop in answers){
    if (answers[prop] === true) {
      total += 1;
    }
  };

  const a = document.querySelector("#demo");
    a.innerHTML = "Your total is" + " " + total;
    a.style.color = "black";

      if (total <= 5){
        a.innerHTML = "Your total is" + " " + total + "." + " Don't worry. Practice makes perfect.Try Again!";
        a.style.color = "purple";

      } else if (total === 10) {
        a.innerHTML = "You made it!You got all questions right!Good job!"
        a.style.color = "green";
      }
};


function seeAnswers () {
  const realAnswers =
    [answer1.value ="está",
    answer2.value ="eres",
    answer3.value ="está",
    answer4.value ="soy",
    answer5.value = "está",
    answer6.value = "eres",
    answer7.value = "Estamos",
    answer8.value = "son",
    answer9.value = "son",
    answer10.value = "Estoy"]

}
