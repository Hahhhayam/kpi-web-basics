addEventListener("DOMContentLoaded", () => {
    const origin = document.getElementById("origin");

    const variantId = 22;
    const variantX = 3;
    const variantY = 3;

    const cellsIdsToDbClickPaint = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            var id = i * 6 + j + 1;
            origin.innerHTML += `<div id=${id}>${id}</div>`
            if (i <= variantX && j <= variantY) {
                cellsIdsToDbClickPaint.push(id);
            }
        }
    }

    const variantCell = document.getElementById(variantId.toString());
    let permaColor = variantCell.style.backgroundColor;
    variantCell.onmouseover = () => {
        variantCell.style.backgroundColor = getRandomColor()
    }
    variantCell.onmouseout = () => {
        variantCell.style.backgroundColor = permaColor
    }
    variantCell.onclick = () => {
        permaColor = document.querySelector("input").value
        variantCell.style.backgroundColor = permaColor
    }
    variantCell.ondblclick = () => {
        for (let cellId of cellsIdsToDbClickPaint) {
            const cell = document.querySelector(`div[id="${cellId}"]`);
            cell.style.backgroundColor = permaColor
        }
    }
})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color= '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}