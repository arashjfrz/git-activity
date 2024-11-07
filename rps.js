let user ;
const choices=["rock","paper","scissors"];

function getvalue(){
     user = prompt("enter rock or paper or scissors").toLowerCase();   
}
getvalue();
function rps(){
    let userS=0;
    let compS=0;
    
    while(true){
        const compChoices= choices[Math.floor(Math.random()*3)];
        if(user===""){
            break;
        }
        if(!choices.includes(user)){
            alert("invalid value...try true one");
            getvalue();
            continue;
        }
        alert(`your choice${user} computer choice${compChoices}`);
        if(user===compChoices){
            alert("same value");
            getvalue();
            continue;
        }
        if((user==="rock" && compChoices==="paper")||
        (user==="scissors" && compChoices==="rock")||
        (user==="paper" && compChoices==="scissors")){
            alert("computer won this round");
            compS++;
        }
        if((user==="rock" && compChoices==="scissors")||
        (user==="scissors" && compChoices==="paper")||
        (user==="paper"&& compChoices==="rock")){
            alert("you won this raund");
            userS++;
        }
        alert(`final score : ${userS}-${compS}`);
        getvalue();
    }
    
}
rps();

