let totalAttemts=5;
let attempts=0;
let totalWons=0;
let totalLost=0;

const form=document.querySelector('form');
const cardBody=document.querySelector('.card-body');
const guessingNumber=form.querySelector("#gueesingNumber");
const Checkbutton=form.querySelector("#check");
const resultText=cardBody.querySelector("#resultText");
const lostWonMessage=document.createElement("p");
const  remaingingAttaemps=cardBody.querySelector("#remainningAttempt");

console.log(form,cardBody,guessingNumber,Checkbutton,resultText,remaingingAttaemps);

form.addEventListener("submit",(event)=>{
 event.preventDefault();
  checkFunction(guessingNumber.value);
  attempts++;
  if(attempts===5){
     guessingNumber.disabled=true;
     Checkbutton.disabled=true;
  }else if( attempts<6){
   let guessNumber=Number(guessingNumber.value);
   checkFunction(guessNumber);
   remaingingAttaemps.innerHTML=`
   Remaining attempts:${totalAttemts-attempts}
   `
  }
  else{
    checkFunction(guessingNumber.value);
    remaingingAttaemps.innerHTML=`Remaining Attems :${totalAttemts-attempts}
  `
  }
  guessingNumber.value=" ";
})



function checkFunction(gueesingNumber){
   const randomNumber=getRandomNumber(5);
    if(guessingNumber===randomNumber)
    {
        resultText.innerHTML=`You have won`;
        totalWons++;
    }
    else{
    resultText.innerHTML=`You hav lost;Random Number was ${randomNumber}`
    totalLost++;
    }
    lostWonMessage.innerHTML=`Won:${totalWons} Lost:${totalLost}`;
    lostWonMessage.classList.add("large-text");
    cardBody.append(lostWonMessage);
}

function getRandomNumber(limit){
 return Math.floor(Math.random()*limit)+1;
}
