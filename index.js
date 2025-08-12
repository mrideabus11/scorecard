let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("awayScore")
let scoreH = 0
let scoreA = 0

function homeInc1(){
    scoreH +=1
    homeScore.textContent = scoreH
}
function homeInc2() {
    scoreH += 2
    homeScore.textContent = scoreH
}

function homeInc3() {
    scoreH +=3
    homeScore.textContent = scoreH
}

function awayInc1(){
    scoreA +=1
    guestScore.textContent = scoreA
}
function awayInc2() {
    scoreA += 2
    guestScore.textContent = scoreA
}

function awayInc3() {
    scoreA += 3
    guestScore.textContent = scoreA
}