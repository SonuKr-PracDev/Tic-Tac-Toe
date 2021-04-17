let boxvar = document.getElementsByClassName("box");

let player = "O"; // Assuming first player is always O.
let arr = new Uint8Array(9)

function Winner(){
    if (player == "X")
        player = "O";
    else
        player = "X";
    alert(`Player ${player} winner winner`)
    location.reload();
}
function CheckWinner(player){
        // console.log(arr); For Checking
    // Column Win
    for(let i = 0; i<9;i+=3){
        if(arr[i] == arr[i+1] && arr[i+1]== arr[i+2] && arr[i+2] == player){
           setTimeout(Winner, 200);
        }
    }

    // Row Win
    for(let i = 0; i<3;i++){
        if(arr[i] == arr[i+3] && arr[i+3] == arr[i+6] && arr[i+6]== player){
        setTimeout(Winner, 200);
        }
    }
    // Diagonal Win
    if(arr[0] == arr[4]&& arr[4]== arr[8] &&arr[8] == player){
        setTimeout(Winner, 200);
        }
        
    else if(arr[2] == arr[4] && arr[4]== arr[6] && arr[6] == player){
        setTimeout(Winner, 200);
        }

}
let count = 0;
/*Logic for inputing O or X when user clicks on the box*/ 
function box1(a){
    count++;
    console.log(count)
    if(count>=9){
        setTimeout(() => {
            alert("GAME OVER");
            location.reload();
        }, 200);
    }
    if (arr[a] == 1 || arr[a] == 2){
        // console.log("Hello");
        return
    }
    if (player == "O"){
        boxvar[a].innerHTML = '<h1>O</h1>';
        arr[a] = 1
        CheckWinner(1);
        player = "X";
    }
    else{
        boxvar[a].innerHTML = '<h1>X</h1>';
        arr[a] = 2
        CheckWinner(2);
        player = "O";
    }
}