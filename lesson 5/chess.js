"use strict";

// Задание 1

let chessboard = document.getElementById("chess");

let table = document.createElement('table');

let letters = ['A','B','C','D','E','F','G','H']

for(let i = 0; i<8; i++){
    let row = document.createElement('tr');
    for (let j = 0; j<8; j++) {
        let cell = document.createElement('td');
        cell.innerText = letters[j] + (i+1);
        if ((i + j) % 2 == 0 ){
            cell.className = 'black';
        }
        row.appendChild(cell);
    }
    table.appendChild(row)
}

chessboard.appendChild(table);