let timer = 60;
let hitrn = 0;
let score = 0;
function makebubble() {
    let clutter = "";
    for (let i = 1; i <= 170; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#cont").innerHTML = clutter;
}


function runTimer() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#cont").innerHTML = `<h1>Game Ovear</h1>`
        }
    }, 1000)
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function increaseScore() {

    score += 10;
    document.querySelector("#scoreval").textContent = score;

}
document.querySelector("#cont").addEventListener("click", function (dets) {
    let clickednum = Number(dets.target.textContent);

    if (clickednum === hitrn) {
        increaseScore();
        makebubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makebubble();






















// let i = 2;
// while (i <= 4) {
//     let j = 0;
//     while (j <= 4) {
//         if (i == 2) {
//             break;
//         }
//         for (let k = 1; k <= 5; k++) {
//             if (j == 3) {
//                 continue;
//             }
//             console.log("vikas", i, j, k);
//         }
//         j++;
//     }
//     i++
// }