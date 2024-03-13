const first = document.getElementById("firstBtn");
const second = document.getElementById("secondBtn");
const thrd = document.getElementById("thrdBtn");

let count1 = 0;
let count2 = 0;
let count3 = 0;

const firstLabel = document.getElementById("firstLabel");
const secondLabel = document.getElementById("secondLabel");
const thrdLabel = document.getElementById("thrdLabel");

first.onclick = function() {
    count1++;
    firstLabel.textContent = count1;
}

second.onclick = function() {
    count2++;
    secondLabel.textContent = count2;
}

thrd.onclick = function() {
    count3++;
    thrdLabel.textContent = count3;
}