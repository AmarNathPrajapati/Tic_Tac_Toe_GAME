console.log("welcome to tic tac toc ");
//music for background , during change turn, gameOver
 music = new Audio("music.mp3");
// let turnMusic= new Audio("ting.mp3");
// let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn = () =>{
    return turn==="X" ?"0" : "X";
}
// fuction to check for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('box');
    let wins = [
        [0,1,2,3,7,0],
        [3,4,5,3,23,0],
        [6,7,8,3,38,0],
        [0,3,6,-8,22,90],
        [1,4,7,2,22,90],
        [2,5,8,18,21,90],
        [0,4,8,3,23,45],
        [2,4,6,1,24,135]
    ]
    wins.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
                isgameover = true;
                document.querySelector('.info').innerText ="🥇"+boxtext[e[0]].innerText + "🥇WON";
                document.querySelector('.line').style.width="40vw";
                document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            }
    })
}
//game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    element.addEventListener('click',(e)=>{/* to select item in box use element.querySelector */
        let boxText = element.querySelector('.boxtext');
        if(boxText.innerText===""){
            music.play();
            boxText.innerText=turn;
            turn =changeTurn();
            // turnMusic.play();
            checkWin();
            if(isgameover==false){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})
// logic of reset button
let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');//querySelectorAll means select all character
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
        isgameover=false;
        document.querySelector('.line').style.width="0vw";
    })
});
