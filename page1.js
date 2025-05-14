const inputspace=document.getElementsByClassName("inputspace")[0];

inputspace.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        const text=inputspace.value.trim();
        if(text!=""){
            document.getElementsByClassName("person")[0].style.display="block";
            document.getElementsByClassName("initialinput")[0].style.display="none";
            document.getElementsByClassName("s1")[0].style.display="block";
        }
    }
});

const choice1=document.querySelectorAll('input[name="choice1"]');
let s1="";
choice1.forEach((radio)=>{
    radio.addEventListener('change',()=>{
        if (radio.checked){
            s1=radio.value;
            console.log(s1);
            document.getElementsByClassName("s1")[0].style.display="none";
            document.getElementsByClassName("s2")[0].style.display="block";
        }
    });
});

const choice2=document.querySelectorAll('input[name="choice2"]');
let s2="";
choice2.forEach((radio)=>{
    radio.addEventListener('change',()=>{
        if (radio.checked){
            s2=radio.value;
            console.log(s2);
            document.getElementsByClassName("s2")[0].style.display="none";
            document.getElementsByClassName("s3")[0].style.display="block";
        }
    });
});

const choice3=document.querySelectorAll('input[name="choice3"]');
let s3="";
choice3.forEach((radio)=>{
    radio.addEventListener('change',()=>{
        if (radio.checked){
            s3=radio.value;
            console.log(s3);
            document.getElementsByClassName("s3")[0].style.display="none";
            document.getElementsByClassName("game")[0].style.display="flex";
        }
    });
});

const game=document.querySelectorAll('input[name="game"]');

let gm="";
game.forEach((radio)=>{
    radio.addEventListener('change',()=>{
        if (radio.checked){
            gm=radio.value;
            console.log(gm);
            let b=Math.floor(Math.random()*2);
            console.log(b);
            if ((gm==1 && b==0)||(gm==0 && b==2)||(gm==2 && b==1)) {
                document.getElementsByClassName("gametext")[0].textContent="You Won";
                document.getElementsByClassName("gametext")[0].style.display="block";
                document.getElementsByClassName("gametext")[0].style.color="green";
            }
            else{
                document.getElementsByClassName("gametext")[0].textContent="You lost";
                document.getElementsByClassName("gametext")[0].style.display="block";
                document.getElementsByClassName("gametext")[0].style.color="red";
            }
        }
    });
});

