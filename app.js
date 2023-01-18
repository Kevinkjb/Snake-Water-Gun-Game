const divCon = document.getElementById("div-container")
const headCon = document.getElementById("head-con")
const vsOne = document.getElementById("snake-champion")
const titleChamp = document.getElementById("title-champ")
const snake = document.getElementById("snake")
const water = document.getElementById("water")
const gun = document.getElementById("gun")
const snakeBtn = document.getElementById("snake-btn")
const waterBtn = document.getElementById("water-btn")
const gunBtn = document.getElementById("gun-btn")

let randomNumber = Math.floor(Math.random() * 3)
let champion = ["snake.png", "water.png", "space-gun.png"]
let randomChampion = champion[randomNumber]



snakeBtn.addEventListener("click", function(){

    divCon.innerHTML = `
        <div class="champion-one">
            <img class="game-img"  src="imgs/snake.png" alt="snake">
        </div>

        <div class="champion-two" >
            <img class="game-img" id="snake" src="imgs/vs.png" alt="">
        </div>

        <div class="champion-three" >
            <img class="game-img" id="snake" src="imgs/${randomChampion}" alt="">
        </div>

        `
    if(champion[0] == randomChampion){
        titleChamp.textContent = "Draw!"
    } 
    else if(randomChampion == champion[1]){
        titleChamp.textContent = "You Win!"
    }else{
        titleChamp.textContent = "You lose!"
    }
    headCon.innerHTML += 
    `<button class="btn" id="play-again">PLAY AGAIN</button>`
    const playAgain = document.getElementById("play-again")
    playAgain.addEventListener("click", function(){
        location.reload();
    })
})
waterBtn.addEventListener("click", function(){
    divCon.innerHTML = `
    <div class="champion-one">
        <img class="game-img"  src="imgs/water.png" alt="water">
    </div>

    <div class="champion-two" >
        <img class="game-img" id="snake" src="imgs/vs.png" alt="">
    </div>

    <div class="champion-three" >
        <img class="game-img" id="snake" src="imgs/${randomChampion}" alt="">
    </div>
    `
    if(champion[1] == randomChampion){
        titleChamp.textContent = "Draw!"
    } 
    else if(randomChampion == champion[2]){
        titleChamp.textContent = "You Win!"
    }else{
        titleChamp.textContent = "You lose!"
    }
    headCon.innerHTML += 
    `<button class="btn" id="play-again">PLAY AGAIN</button>`
    const playAgain = document.getElementById("play-again")
    playAgain.addEventListener("click", function(){
        location.reload();
    })
})

gunBtn.addEventListener("click", function(){
    divCon.innerHTML = `
    <div class="champion-one">
        <img class="game-img"  src="imgs/space-gun.png" alt="gun">
    </div>

    <div class="champion-two" >
        <img class="game-img" id="snake" src="imgs/vs.png" alt="">
    </div>

    <div class="champion-three" >
        <img class="game-img" id="snake" src="imgs/${randomChampion}" alt="">
    </div>
    `
    if(champion[2] == randomChampion){
        titleChamp.textContent = "Draw!"
    } 
    else if(randomChampion == champion[0]){
        titleChamp.textContent = "You Win!"
    }else{
        titleChamp.textContent = "You lose!"
    }
    headCon.innerHTML += 
    `<button class="btn" id="play-again">PLAY AGAIN</button>`
    const playAgain = document.getElementById("play-again")
    playAgain.addEventListener("click", function(){
        location.reload();
    })
})

