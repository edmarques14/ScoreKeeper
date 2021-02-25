

const p1 = {
    score: 0,
    display: document.querySelector('#p1Score_display'),
    button: document.querySelector("#p1Btn")
}

const p2 = {
    score: 0,
    display: document.querySelector('#p2Score_display'),
    button: document.querySelector("#p2Btn")
}

//RESET Button
const resetBtn = document.querySelector('#reset');

// SELECT DROPDOWN
const selectInput = document.querySelector('#playto');


let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//BUTTON 1
    p1.button.addEventListener('click', function () {
        updateScores(p1,p2)
} )


//BUTTON 2
    p2.button.addEventListener('click', function () {
        updateScores(p2,p1)
} )

    
// p2_button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             p1Score_display.classList.add('has-text-danger');
//             p2Score_display.classList.add('has-text-success');
//             p1_button.disabled = true;
//             p2_button.disabled = true; 
//         }
//         p2Score_display.textContent = p2Score;
// }
// })

// Reset Button
resetBtn.addEventListener('click', reset)

// SELECT DROPDOWN
selectInput.addEventListener('change', function (e) {
    winningScore = parseInt(this.value)
    reset();
})


//reset funtion
    function reset() {
         isGameOver = false;
        for (let p of [p1, p2]) {
            p.score = 0;
            p.display.classList.remove('has-text-success', 'has-text-danger');
            p.display.textContent = 0;
            p.button.disabled = false;
        }

}