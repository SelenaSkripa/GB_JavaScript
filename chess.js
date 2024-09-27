var chessBoard = document.getElementById('chessboard');

function initBoard() {
    var cell = document.createElement('div');
    cell.className = 'cell';
    chessBoard.appendChild(cell);

}

for (var n = 0; n != 110; n++) {
    window.onload = initBoard();
}

var bgColor = document.querySelectorAll('.cell');
for (var i = 0; i < bgColor.length; i++) {
    var colorCell;
    if (i % 2 == 0) {
        colorCell = 'black';
    } else {
        colorCell = 'white';
    }
    bgColor[i].style.background = colorCell;
}
//Спрятала лишний столбец
for (i = 10; i < bgColor.length; i += 11) {
    bgColor[i].style.opacity = '0';
}
//Строки с буквами
for (i = 0; i <= 9; i++) {
    bgColor[i].style.background = 'grey';
}
for (i = 99; i <= 108; i++) {
    bgColor[i].style.background = 'grey';
}

bgColor[1].innerText = 'A';
bgColor[100].innerText = 'A';
bgColor[2].innerText = 'B';
bgColor[101].innerText = 'B';
bgColor[3].innerText = 'C';
bgColor[102].innerText = 'C';
bgColor[4].innerText = 'D';
bgColor[103].innerText = 'D';
bgColor[5].innerText = 'E';
bgColor[104].innerText = 'E';
bgColor[6].innerText = 'F';
bgColor[105].innerText = 'F';
bgColor[7].innerText = 'G';
bgColor[106].innerText = 'G';
bgColor[8].innerText = 'H';
bgColor[107].innerText = 'H';

//Столбцы с цифрами
for (i = 11; i < bgColor.length; i += 11) {
    bgColor[i].style.background = 'grey';
}
for (i = 9; i < bgColor.length; i += 11) {
    bgColor[i].style.background = 'grey';
}

bgColor[11].innerText = '1';
bgColor[20].innerText = '1';
bgColor[22].innerText = '2';
bgColor[31].innerText = '2';
bgColor[33].innerText = '3';
bgColor[42].innerText = '3';
bgColor[44].innerText = '4';
bgColor[53].innerText = '4';
bgColor[55].innerText = '5';
bgColor[64].innerText = '5';
bgColor[66].innerText = '6';
bgColor[75].innerText = '6';
bgColor[77].innerText = '7';
bgColor[86].innerText = '7';
bgColor[88].innerText = '8';
bgColor[97].innerText = '8';
//Пешки
for (i = 23; i <= 30; i++) {
    bgColor[i].innerHTML = "<img src='img/bp.png'>";
}

for (i = 78; i <= 85; i++) {
    bgColor[i].innerHTML = "<img src='img/wp.png'>";
}
//Ладья
bgColor[12].innerHTML = "<img src='img/br.png'>";
bgColor[19].innerHTML = "<img src='img/br.png'>";
bgColor[89].innerHTML = "<img src='img/wr.png'>";
bgColor[96].innerHTML = "<img src='img/wr.png'>";
//Конь
bgColor[13].innerHTML = "<img src='img/bn.png'>";
bgColor[18].innerHTML = "<img src='img/bn.png'>";
bgColor[90].innerHTML = "<img src='img/wn.png'>";
bgColor[95].innerHTML = "<img src='img/wn.png'>";
//Слон
bgColor[14].innerHTML = "<img src='img/bb.png'>";
bgColor[17].innerHTML = "<img src='img/bb.png'>";
bgColor[91].innerHTML = "<img src='img/wb.png'>";
bgColor[94].innerHTML = "<img src='img/wb.png'>";
//Ферзи и короли
bgColor[15].innerHTML = "<img src='img/bq.png'>";
bgColor[16].innerHTML = "<img src='img/bk.png'>";
bgColor[92].innerHTML = "<img src='img/wq.png'>";
bgColor[93].innerHTML = "<img src='img/wk.png'>";


//шахматы учителя

function chessboard() {
    function addRow(board, rowNum, figures) {
        var row = board.insertRow(-1);
        row.insertCell(-1).innerText = rowNum;
        for (var fig of figures) {
            row.insertCell(-1).innerText = fig;
        }
        row.insertCell(-1).innerText = rowNum;
    }
    var board = document.createElement('table');
    addRow(board, '', ['A','B','C','D','E','F','G','H']);
    addRow(board, '1', ['♖','♘','♗','♕','♔','♗','♘','♖']);
    addRow(board, '2', ['♙','♙','♙','♙','♙','♙','♙','♙']);
    for (var i=3; i<=6; i++) {
        addRow(board, i, '        ');
    }
    addRow(board, '7', ['♟','♟','♟','♟','♟','♟','♟','♟']);
    addRow(board, '8', ['♜','♞','♝','♚','♛','♝','♞','♜']);
    addRow(board, '', ['A','B','C','D','E','F','G','H']);
    for (var i=1; i<=8; i++) {
        for (var j=1; j<=8; j++) {
            if (i % 2 + j % 2 === 1) {
                board.rows[i].cells[j].style.backgroundColor = 'grey';
            }
        }
    }
    document.body.appendChild(board);
};

chessboard();

 

