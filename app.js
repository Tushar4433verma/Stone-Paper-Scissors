let userPts=0;
let compPts=0;
let choices =document.querySelectorAll('.choice');
let content=document.querySelector("#content");

let Score=(userPts,compPts)=>{

    let userPt=document.getElementById("user-score");
    let compPt=document.getElementById("comp-score");

    // userPt.append(document.createTextNode(userPts));
      userPt.innerText=userPts;
      compPt.innerText=compPts;
      userPt.style.color="green";
      compPt.style.color="green";

}



let letsPlayGame=(userChoice,compChoice)=>{

    console.log("User Choice is:",userChoice);
    console.log("Comp Choice is:",compChoice);

    if(userChoice==="paper")
    {
        if(compChoice==="paper")
        {
            // console.log("Game Drawn!!");
            content.innerText="Game Drawn!!!";
            content.style.backgroundColor="#5DB9CB";
            
        }
        else if(compChoice==="scissors")
        {
            // console.log("You Loose!!");
            content.innerText="You Loose!!!";
            content.style.backgroundColor="red";
            content.style.color="#ffffff";
            compPts++;
        }
        else
        {
            // console.log("You Won!!");
            content.innerText="You Won!!!";
            content.style.backgroundColor="green";
            content.style.color="#ffffff";
            userPts++;
        }
    }
    else if(userChoice==="stone")
    {
        if(compChoice==="stone")
        {
            // console.log("Game Drawn!!");
            content.style.backgroundColor="#5DB9CB";
            content.innerText="Game Drawn!!!";
        }
        else if(compChoice==="scissors")
        {
            // console.log("You Won!!");
            content.innerText="You Won!!!";
            content.style.backgroundColor="green";
            content.style.color="#ffffff";
            userPts++;
        }
        else
        {
            // console.log("You Loose!!");
            content.innerText="You Loose!!!";
            content.style.backgroundColor="red";
            content.style.color="#ffffff";
            compPts++;
        }
    }
    else
    {
        //userchoose scissors
        if(compChoice==="scissors")
        {
            // console.log("Game Drawn!!");
            content.innerText="Game Drawn!!!";
            content.style.backgroundColor="#5DB9CB";
        }
        else if(compChoice=="paper")
        {
            // console.log("You won!!");
            content.innerText="You Won!!!";
            content.style.backgroundColor="green";
            content.style.color="#ffffff";
            userPts++;
        }
        else 
        {
            // console.log("You Loose!!");
            content.style.backgroundColor="red";
            content.innerText="You Loose!!!";
            content.style.color="#ffffff";
            compPts++;
        }
    }

    Score(userPts,compPts);
}

let computerChoice=(userChoice)=>{

    let possibleChoices=new Array("stone","paper","scissors");
    let randomIndex=Math.floor(Math.random()*3);
    // console.log("Random number is:",randomIndex);
    const randomChoice=possibleChoices[randomIndex];
    letsPlayGame(userChoice,randomChoice);
}

let userChoice=(userCh)=>{
    // console.log("User Choice is:",userCh);
    //computer choice generate
    computerChoice(userCh);
}




choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userCh=choice.getAttribute("id");
        userChoice(userCh);
    })

});
  
     