const cards = document.querySelectorAll(".cards");
const front = document.querySelectorAll(".front");
const retsart = document.getElementById("restart");
const msg = document.getElementById("msg")

//! handleload function
const handlestart = () => {
  cards.forEach((element) => {
    const final = [...Array(cards.length).keys()];
    const random = Math.floor(Math.random() * cards.length);
    element.style.order = final[random];
  });
};

//! card flip function
flippedcards();
function flippedcards(){
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      front[i].classList.add("flipcard");
      const flippedcard = document.querySelectorAll(".flipcard");
      if (flippedcard.length === 2) {
        checkpairs(flippedcard[0], flippedcard[1]);
      }
    });
  }
}

//! check pairs

function checkpairs(cardOne, cardTwo) {
  if (cardOne.dataset.set === cardTwo.dataset.set) {
    cardOne.classList.remove("flipcard");
    cardTwo.classList.remove("flipcard");

    cardOne.classList.add("matched");
    cardTwo.classList.add("matched");
    const matchedcards = document.querySelectorAll(".matched");
    if(matchedcards.length === cards.length){
      winning();
      retsartgame();
    }

  } else {
    setTimeout(() => {
      cardOne.classList.remove("flipcard");
      cardTwo.classList.remove("flipcard");
    }, 500);
  }
}

//! winning message

function winning(){
  msg.innerHTML=" 🎉You Won the Game🎉"
}
//! restart functions
retsartgame();
function retsartgame(){
  for(let i=0;i<cards.length;i++ ){
  retsart.addEventListener("click",()=>{
    front[i].classList.remove("matched")
    handlestart();
    msg.innerHTML="";
})
}
}