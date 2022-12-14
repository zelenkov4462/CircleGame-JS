const startBtn = document.querySelector('#start')

const screens = document.querySelectorAll(".screen")

const timeList = document.querySelector("#time-list")

const timeEl = document.querySelector('#time')

const board = document.querySelector("#board")

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']


let time = 0
let score = 0

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains("time-btn")) {
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createrandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createrandomCircle()

   setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        timeEl.innerHTML = `00:${current}`
    }

}

function setTime(value) {
    if (value < 10) {
    timeEl.innerHTML = `00:0${value}`
} else {
    timeEl.innerHTML = `00:${value}`
} }

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<div>
    <h1>Cчет: <span class="primary">${score}</span></h1>
<!--    <a href="/index">-->
            <h4>Спасибо за игру! <br/><hr/>Страница обновится автоматически.</h4>
<!--</a>-->
</div> `
    setTimeout(() => {
        window.location.reload()
    }, 2500)
}

function createrandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const
    {
        width, height
    } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    const index = getRandomNumber(0, colors.length - 1 )
    circle.style.background=`${colors[index]}`


    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}




