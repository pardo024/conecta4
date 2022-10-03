document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div') //Todos los cuadros del grid
    const result = document.querySelector('#result')
    const displayCurrent1 = document.querySelector('#c-1') //Barra
    const displayCurrent2 = document.querySelector('#c-2')
    const displayPlayer1 = document.querySelector('.player1') //Cuadro jugador 1
    const displayPlayer2 = document.querySelector('.player2')

    let currentPlayer = 1,
        score1 = 0,
        score2 = 0,
        StopGame = true
    var board

    var initBoard = () => {

        board = new Array(6);
        //Bucle para meter en cada posición otros array de 10
        for (var i = 0; i < 6; i++) {
            board[i] = new Array(7);
            for (let j = 0; j < 7; j++) {
                board[i][j] = 0
            }
        }
    }

initBoard()

for (let i = 0, assingClass = 0; i < squares.length; i++) { //asigna un id a cada div de la grid
    squares[i].setAttribute('id', assingClass)
    assingClass++
    if (assingClass >= 7)
        assingClass = 0
}

for (var i = 0; i < squares.length; i++) {
    (function(index) {
        squares[i].onclick = function() {
            var array = []

            squares.forEach(element => {
                if (element.getAttribute('id') === squares[index].getAttribute('id')) {
                    array.push(element)
                    y = element.getAttribute('id');

                }
            })
            if (StopGame) {
                for (let rec = array.length - 1; rec > -1; rec--) {
                    if (array[rec].classList.contains('taken')) {
                        continue
                    } else {
                        if (currentPlayer === 1) {
                            array[rec].classList.add('taken')
                            array[rec].classList.add('player-one')

                            //change the player
                            currentPlayer = 2
                            displayCurrent2.classList.add('current-2')
                            displayCurrent1.classList.remove('current-1')


                            board[rec][y] = 1

                            



                        } else if (currentPlayer === 2) {
                            array[rec].classList.add('taken')
                            array[rec].classList.add('player-two')

                            displayCurrent1.classList.add('current-1')
                            displayCurrent2.classList.remove('current-2')
                                //cambio de jugador
                            currentPlayer = 1
                                //displayCurrentPlayer.innerHTML = currentPlayer

                            board[rec][y] = 2

                        }
                        break
                    }
                }
            }
        }
            })(i)
        }

        function checkboard() {
            var win = 0
            const m = board
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 7; j++) {
    
                    if (i + 3 < 6) {
                        if (m[i][j] == 1 && m[i + 1][j] == 1 && m[i + 2][j] == 1 && m[i + 3][j] == 1) {
                            win = 1;
                        }
                    }
                    if (j + 3 < 7) {
                        if (m[i][j] == 1 && m[i][j + 1] == 1 && m[i][j + 2] == 1 && m[i][j + 3] == 1) {
                            win = 1;
                        }
                    }
    
                    if (i + 3 < 6 && j + 3 < 7) {
                        if (m[i][j] == 1 && m[i + 1][j + 1] == 1 && m[i + 2][j + 2] == 1 && m[i + 3][j + 3] == 1) {
                            win = 1;
                        }
                    }
                    if (j - 3 > -1 && i + 3 < 6) {
                        if (m[i][j] == 1 && m[i + 1][j - 1] == 1 && m[i + 2][j - 2] == 1 && m[i + 3][j - 3] == 1) {
                            win = 1;
                        }
                    }
                    if (j + 3 < 7 && i - 3 > -1) {
                        if (m[i][j] == 1 && m[i - 1][j + 1] == 1 && m[i - 2][j + 2] == 1 && m[i - 3][j + 3] == 1) {
                            win = 1;
                        }
                    }
    
                    if (i + 3 < 6) {
                        if (m[i][j] == 2 && m[i + 1][j] == 2 && m[i + 2][j] == 2 && m[i + 3][j] == 2) {
                            win = 2;
                        }
                    }
                    if (j + 3 < 7) {
                        if (m[i][j] == 2 && m[i][j + 1] == 2 && m[i][j + 2] == 2 && m[i][j + 3] == 2) {
                            win = 2;
                        }
                    }
    
                    if (i + 3 < 6 && j + 3 < 7) {
                        if (m[i][j] == 2 && m[i + 1][j + 1] == 2 && m[i + 2][j + 2] == 2 && m[i + 3][j + 3] == 2) {
                            win = 2;
                        }
                    }
                    if (j - 3 > -1 && i + 3 < 6) {
                        if (m[i][j] == 2 && m[i + 1][j - 1] == 2 && m[i + 2][j - 2] == 2 && m[i + 3][j - 3] == 2) {
                            win = 2;
                        }
                    }
                    if (j + 3 < 7 && i - 3 > -1) {
                        if (m[i][j] == 2 && m[i - 1][j + 1] == 2 && m[i - 2][j + 2] == 2 && m[i - 3][j + 3] == 2) {
                            win = 2;
                        }
                    }
                }
    
            }
            if (StopGame)
            if (win == 1) {
                result.style.color = 'red'
                result.innerHTML = 'Jugador 1 gano!!!'
                score1++
                displayPlayer1.innerHTML = 'Jugador 1 :: ' + score1
                StopGame = false
            } else if (win == 2) {
            score2++
            displayPlayer2.innerHTML = 'Jugador 2 :: ' + score2
            result.style.color = 'blue'
            result.innerHTML = 'Jugador 2 gano!!!'
            StopGame = false

        }

           
        }

        squares.forEach(square=> square.addEventListener('click',checkboard))
    
        resetGame = () => {
            initBoard()
            StopGame = true
            for (var i = 0; i < squares.length - 7; i++) {
                squares[i].classList.remove('taken')
                squares[i].classList.remove('player-one')
                squares[i].classList.remove('player-two')
    
            }
            result.innerHTML = ""
        }
}) 
