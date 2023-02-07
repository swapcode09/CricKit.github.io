let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

let flag=0;    

flipBtn.addEventListener("click", () => {
    document.getElementById("tossresult").innerText="";
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        flag=0;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        flag=1;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats()
{
    if (flag==0)
    {
            document.getElementById("tossresult").innerHTML = `It is Heads`;
    }
    else
    {
            document.getElementById("tossresult").innerHTML = `It is Tails`;
    }
}



function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    document.getElementById("tossresult").innerText="";
});