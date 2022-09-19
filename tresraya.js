let board;
let jugador = 2;
let hayganador = false;
let hayempate = false;
let casillasjugadas = 0;
function createBoard(numRows, numCols) {
    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []

        // crear casillas
        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                signo : " "
            })
        }

        rows.push(casillas)
    }

    return rows
}

function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

//function getValue(board, row, col) {
const getValue = (board, row, col) => {
    return board[row][col]
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) // string interpolation
            if (casillas[j].seMuestra) {
                butCasilla.innerHTML = casillas[j].signo
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}
const detectarGanador = (board) => {
    // detectar XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    //detectar horizontal
    if(board[0][0].signo == "X" & board[0][1].signo == "X" & board[0][2].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }else if(board[1][0].signo == "X" & board[1][1].signo == "X" & board[1][2].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }else if(board[2][0].signo == "X" & board[2][1].signo == "X" & board[2][2].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }
    //detectar vertical
    else if(board[0][0].signo == "X" & board[1][0].signo == "X" & board[2][0].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }else if(board[0][1].signo == "X" & board[1][1].signo == "X" & board[2][1].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }else if(board[0][2].signo == "X" & board[1][2].signo == "X" & board[2][2].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }
    //diagonales
    else if(board[0][0].signo == "X" & board[1][1].signo == "X" & board[2][2].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }else if(board[0][2].signo == "X" & board[1][1].signo == "X" & board[2][0].signo == "X"){
        console.log("Gano un jugador")
        console.log("X")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 1 (X)"
    }
    //detectar  OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
    if(board[0][0].signo == "O" & board[0][1].signo == "O" & board[0][2].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }else if(board[1][0].signo == "O" & board[1][1].signo == "O" & board[1][2].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }else if(board[2][0].signo == "O" & board[2][1].signo == "O" & board[2][2].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }
    //detectar vertical
    else if(board[0][0].signo == "O" & board[1][0].signo == "O" & board[2][0].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }else if(board[0][1].signo == "O" & board[1][1].signo == "O" & board[2][1].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }else if(board[0][2].signo == "O" & board[1][2].signo == "O" & board[2][2].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }
    //diagonales
    else if(board[0][0].signo == "O" & board[1][1].signo == "O" & board[2][2].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }else if(board[0][2].signo == "O" & board[1][1].signo == "O" & board[2][0].signo == "O"){
        console.log("Gano un jugador")
        console.log("O")
        hayganador = true
        const ganador = document.getElementById("Titulo")
        ganador.innerHTML = "GANO EL JUGADOR 2 (O)"
    }
}

const detectarEmpate = () => {
    if(casillasjugadas == 9){
        hayempate = true;
        const empate = document.getElementById("Titulo")
        empate.innerHTML = "HAY EMPATE"
    }
}

const casillaOnClick = (row, col) => {
    const casilla = getValue(board, row, col)
    if(hayganador == false & hayempate == false){
        if(jugador%2 == 0){
            casilla.seMuestra = true
            casilla.signo = "X" 
        }else{
            casilla.seMuestra = true
            casilla.signo = "O"
        }
        jugador = jugador + 1
        casillasjugadas = casillasjugadas + 1
        console.log(casillasjugadas)
        renderizarBoard(board)
        detectarGanador(board)
        detectarEmpate(board)
    }
}

const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)

}

main()
