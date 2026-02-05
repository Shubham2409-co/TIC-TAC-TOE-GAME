
let btn = document.querySelector("#b1");
let turn = 0;

btn.addEventListener("click", () => {
    if (btn.innerText !== "") return;

    if (turn === 0) {
        btn.innerText = "O";
        btn.style.color = "red";
        btn.style.fontSize = "40px";
        btn.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn.innerText = "X";
        btn.style.color = "blue";
        btn.style.fontSize = "40px";
        btn.style.fontWeight = "bold";
        turn = 0;

}
   win();
   win1();
   if (value !== "true") {
        draw();
    }
   
   
});
let btn2 = document.querySelector("#b2");


btn2.addEventListener("click", () => {
    if (btn2.innerText !== "") return;

    if (turn === 0) {
        btn2.innerText = "O";
        btn2.style.color = "red";
        btn2.style.fontSize = "40px";
        btn2.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn2.innerText = "X";
        btn2.style.color = "blue";
        btn2.style.fontSize = "40px";
        btn2.style.fontWeight = "bold";
        turn = 0;

}
win();
win1();
if (value !== "true") {
        draw();
    }

});





let btn3 = document.querySelector("#b3");


btn3.addEventListener("click", () => {
    if (btn3.innerText !== "") return;

    if (turn === 0) {
        btn3.innerText = "O";
        btn3.style.color = "red";
        btn3.style.fontSize = "40px";
        btn3.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn3.innerText = "X";
        btn3.style.color = "blue";
        btn3.style.fontSize = "40px";
        btn3.style.fontWeight = "bold";
        turn = 0;

}
win();
win1();
if (value !== "true") {
        draw();
    }

});
let btn4 = document.querySelector("#b4");


btn4.addEventListener("click", () => {
    if (btn4.innerText !== "") return;

    if (turn === 0) {
        btn4.innerText = "O";
        btn4.style.color = "red";
        btn4.style.fontSize = "40px";
        btn4.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn4.innerText = "X";
        btn4.style.color = "blue";
        btn4.style.fontSize = "40px";
        btn4.style.fontWeight = "bold";
        turn = 0;
        

}
win();
win1();
if (value !== "true") {
        draw();
    }

});





let btn5 = document.querySelector("#b5");


btn5.addEventListener("click", () => {
    if (btn5.innerText !== "") return;

    if (turn === 0) {
        btn5.innerText = "O";
        btn5.style.color = "red";
        btn5.style.fontSize = "40px";
        btn5.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn5.innerText = "X";
        btn5.style.color = "blue";
        btn5.style.fontSize = "40px";
        btn5.style.fontWeight = "bold";
        turn = 0;

}
win();
win1();
if (value !== "true") {
        draw();
    }

});
let btn6 = document.querySelector("#b6");


btn6.addEventListener("click", () => {
    if (btn6.innerText !== "") return;

    if (turn === 0) {
        btn6.innerText = "O";
        btn6.style.color = "red";
        btn6.style.fontSize = "40px";
        btn6.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn6.innerText = "X";
        btn6.style.color = "blue";
        btn6.style.fontSize = "40px";
        btn6.style.fontWeight = "bold";
        turn = 0;

}
win();
win1();
if (value !== "true") {
        draw();
    }

});





let btn7 = document.querySelector("#b7");


btn7.addEventListener("click", () => {
    if (btn7.innerText !== "") return;

    if (turn === 0) {
        btn7.innerText = "O";
        btn7.style.color = "red";
        btn7.style.fontSize = "40px";
        btn7.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn7.innerText = "X";
        btn7.style.color = "blue";
        btn7.style.fontSize = "40px";
        btn7.style.fontWeight = "bold";
        turn = 0;

}
win();
win1();
if (value !== "true") {
        draw();
    }

});
let btn8 = document.querySelector("#b8");


btn8.addEventListener("click", () => {
    if (btn8.innerText !== "") return;

    if (turn === 0) {
        btn8.innerText = "O";
        btn8.style.color = "red";
        btn8.style.fontSize = "40px";
        btn8.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn8.innerText = "X";
        btn8.style.color = "blue";
        btn8.style.fontSize = "40px";
        btn8.style.fontWeight = "bold";
        turn = 0;

}
win();
win1();
if (value !== "true") {
        draw();
    }

});
let btn9 = document.querySelector("#b9");
btn9.addEventListener("click", () => {
    if (btn9.innerText !== "") return;

    if (turn === 0) {
        btn9.innerText = "O";
        btn9.style.color = "red";
        btn9.style.fontSize = "40px";
        btn9.style.fontWeight = "bold";
        turn = 1;
    }
else if(turn===1)
{
    btn9.innerText = "X";
        btn9.style.color = "blue";
        btn9.style.fontSize = "40px";
        btn9.style.fontWeight = "bold";
        turn = 0;

}
win();
win1();
if (value !== "true") {
        draw();
    }

});
function showWinner() {
    let win1 = document.querySelector("#wr");
    win1.innerText = "PLAYER WITH 'O' WINS THE GAME!!";
    win1.style.color = "white";
    win1.style.fontSize = "22px";
    win1.style.fontWeight = "bold";
}
let value = 3;
function win() {

    
    if (btn.innerText==="O" && btn2.innerText==="O" && btn3.innerText==="O") {
        btn.style.backgroundColor = btn2.style.backgroundColor = btn3.style.backgroundColor = "green";
        value=4;
        showWinner();
        play1()
        return;
    }

    if (btn4.innerText==="O" && btn5.innerText==="O" && btn6.innerText==="O") {
        btn4.style.backgroundColor = btn5.style.backgroundColor = btn6.style.backgroundColor = "green";
        value=4;
        showWinner();
         play1()
        return;
    }

    if (btn7.innerText==="O" && btn8.innerText==="O" && btn9.innerText==="O") {
        btn7.style.backgroundColor = btn8.style.backgroundColor = btn9.style.backgroundColor = "green";
        value=4;
        showWinner();
         play1()
        return;
    }

    if (btn.innerText==="O" && btn4.innerText==="O" && btn7.innerText==="O") {
        btn.style.backgroundColor = btn4.style.backgroundColor = btn7.style.backgroundColor = "green";
        value=4;
        showWinner();
         play1()
        return;
    }

    if (btn2.innerText==="O" && btn5.innerText==="O" && btn8.innerText==="O") {
        btn2.style.backgroundColor = btn5.style.backgroundColor = btn8.style.backgroundColor = "green";
        value=4;
        showWinner();
         play1()
        return;
    }

    if (btn3.innerText==="O" && btn6.innerText==="O" && btn9.innerText==="O") {
        btn3.style.backgroundColor = btn6.style.backgroundColor = btn9.style.backgroundColor = "green";
        value=4;
        showWinner();
         play1()
        return;
    }

    if (btn.innerText==="O" && btn5.innerText==="O" && btn9.innerText==="O") {
        btn.style.backgroundColor = btn5.style.backgroundColor = btn9.style.backgroundColor = "green";
       value=4;
        showWinner();
         play1()
        return;
    }

    if (btn7.innerText==="O" && btn5.innerText==="O" && btn3.innerText==="O") {
        btn7.style.backgroundColor = btn5.style.backgroundColor = btn3.style.backgroundColor = "green";
        value=4;
        showWinner();
         play1()
        return;
    }
}


function showWinner1() {
    let win2 = document.querySelector("#wr1");
    win2.innerText = "PLAYER WITH 'X' WINS THE GAME!!";
    win2.style.color = "white";
    win2.style.fontSize = "22px";
    win2.style.fontWeight = "bold";
}

function win1() {
    

    if (btn.innerText==="X" && btn2.innerText==="X" && btn3.innerText==="X") {
        btn.style.backgroundColor = btn2.style.backgroundColor = btn3.style.backgroundColor = "green";
        value=4;
        showWinner1();
         play1()
        return;
    }

    if (btn4.innerText==="X" && btn5.innerText==="X" && btn6.innerText==="X") {
        btn4.style.backgroundColor = btn5.style.backgroundColor = btn6.style.backgroundColor = "green";
      value=4;
        showWinner1();
         play1()
        return;
    }

    if (btn7.innerText==="X" && btn8.innerText==="X" && btn9.innerText==="X") {
        btn7.style.backgroundColor = btn8.style.backgroundColor = btn9.style.backgroundColor = "green";
      value=4;
        showWinner1();
         play1()
        return;
    }

    if (btn.innerText==="X" && btn4.innerText==="X" && btn7.innerText==="X") {
        btn.style.backgroundColor = btn4.style.backgroundColor = btn7.style.backgroundColor = "green";
       value=4;
        showWinner1();
         play1()
        return;
    }

    if (btn2.innerText==="X" && btn5.innerText==="X" && btn8.innerText==="X") {
        btn2.style.backgroundColor = btn5.style.backgroundColor = btn8.style.backgroundColor = "green";
        value=4;
        showWinner1();
         play1()
        return;
    }

    if (btn3.innerText==="X" && btn6.innerText==="X" && btn9.innerText==="X") {
        btn3.style.backgroundColor = btn6.style.backgroundColor = btn9.style.backgroundColor = "green";
        value=4;
        showWinner1();
         play1()
        return;
    }

    if (btn.innerText==="X" && btn5.innerText==="X" && btn9.innerText==="X") {
        btn.style.backgroundColor = btn5.style.backgroundColor = btn9.style.backgroundColor = "green";
        value=4;
        showWinner1();
         play1()
        return;
    }

    if (btn7.innerText==="X" && btn5.innerText==="X" && btn3.innerText==="X") {
        btn7.style.backgroundColor = btn5.style.backgroundColor = btn3.style.backgroundColor = "green";
        value=4;
        showWinner1();
         play1()
        return;
    }
}
function draw() {
    if (value===3 &&
        btn.innerText !== "" &&
        btn2.innerText !== "" &&
        btn3.innerText !== "" &&
        btn4.innerText !== "" &&
        btn5.innerText !== "" &&
        btn6.innerText !== "" &&
        btn7.innerText !== "" &&
        btn8.innerText !== "" &&
        btn9.innerText !== ""
    ) {
        let d = document.querySelector("#draw");
        d.innerText = "GAME DRAW ";
        d.style.color = "yellow";
        d.style.fontSize = "22px";
        d.style.fontWeight = "bold";
        play1()
    }
}
 function play1() {
    let play2 = document.querySelector("#play");

    
    play2.style.display = "block";
    play2.innerText = "Play Again?";
    play2.style.color = "white";
    play2.style.fontWeight = "bolder";
    play2.style.fontSize = "40px";
    play2.style.backgroundColor = "skyblue";

    
    play2.onclick = () => {

        btn.innerText = btn2.innerText = btn3.innerText = "";
        btn4.innerText = btn5.innerText = btn6.innerText = "";
        btn7.innerText = btn8.innerText = btn9.innerText = "";

        btn.style.backgroundColor =
        btn2.style.backgroundColor =
        btn3.style.backgroundColor =
        btn4.style.backgroundColor =
        btn5.style.backgroundColor =
        btn6.style.backgroundColor =
        btn7.style.backgroundColor =
        btn8.style.backgroundColor =
        btn9.style.backgroundColor = "";

        document.querySelector("#wr").innerText = "";
        document.querySelector("#wr1").innerText = "";
        document.querySelector("#draw").innerText = "";

        turn = 0;
      value = 3;
        
        play2.style.display = "none";
    };
}
