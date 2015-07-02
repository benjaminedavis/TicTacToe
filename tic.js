var allSquares = document.querySelectorAll('.square');
var Square1 = allSquares[0];
var Square2 = allSquares[1];
var Square3 = allSquares[2];
var Square4 = allSquares[3];
var Square5 = allSquares[4];
var Square6 = allSquares[5];
var Square7 = allSquares[6];
var Square8 = allSquares[7];
var Square9 = allSquares[8];

var count = 0;

var move = function() {
  if(this.innerText ==='X' || this.innerText ==='O'){
    return null;
  } else if(count%2 === 0){
    this.innerText = "X";
    count++;
  } else {
    this.innerText = "O";
    count++;
  }
  getWinner();
};

  for(var i = 0; i < 9; i++){
allSquares[i].addEventListener('click', move);
}

// function clearBoard ()
// document.querySelectorAll('.square') = "";
// button.addEventListener('click', function clearBoard() );


function getWinner (){
  if (allSquares[0].innerText === "X" && allSquares[1].innerText === "X" && allSquares[2].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[0].innerText === "O" && allSquares[1].innerText === "O" && allSquares[2].innerText === "O")
  console.log("O Wins!");
  else if (allSquares[3].innerText === "X" && allSquares[4].innerText === "X" && allSquares[5].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[3].innerText === "O" && allSquares[4].innerText === "O" && allSquares[5].innerText === "O")
  console.log("O Wins!");
  else if (allSquares[6].innerText === "X" && allSquares[7].innerText === "X" && allSquares[8].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[6].innerText === "O" && allSquares[7].innerText === "O" && allSquares[8].innerText === "O")
  console.log("O Wins!");
  else if (allSquares[0].innerText === "X" && allSquares[3].innerText === "X" && allSquares[6].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[0].innerText === "O" && allSquares[3].innerText === "O" && allSquares[6].innerText === "O")
  console.log("O Wins!");
  else if (allSquares[1].innerText === "X" && allSquares[4].innerText === "X" && allSquares[7].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[1].innerText === "O" && allSquares[4].innerText === "O" && allSquares[7].innerText === "O")
  console.log("O Wins!");
  else if (allSquares[2].innerText === "X" && allSquares[5].innerText === "X" && allSquares[8].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[2].innerText === "O" && allSquares[5].innerText === "O" && allSquares[8].innerText === "O")
  console.log("O Wins!");
  else if (allSquares[0].innerText === "X" && allSquares[4].innerText === "X" && allSquares[8].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[0].innerText === "O" && allSquares[4].innerText === "O" && allSquares[8].innerText === "O")
  console.log("O Wins!");
  else if (allSquares[2].innerText === "X" && allSquares[4].innerText === "X" && allSquares[6].innerText === "X")
  console.log("X Wins!");
  else if (allSquares[2].innerText === "O" && allSquares[4].innerText === "O" && allSquares[6].innerText === "O")
  console.log("O Wins!");
  else console.log("It's a Tie!");
}
