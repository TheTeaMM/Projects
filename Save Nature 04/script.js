let lbl = document.getElementById('countlbl');
let plusbtn = document.getElementById('plus');

let count = parseInt(lbl.textContent);

plusbtn.onclick = function() {
    count++;
    lbl.textContent = count;
};
