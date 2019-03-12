const rand = cap => Math.floor(Math.random() * cap) + 1
let goalNum
let currNum = 0
let isFinished = false

// initializes application
const init = _ => {
  isFinished = false
  // sets random number for user to try matching
  goalNum = rand(100)
  // reset current user progress
  currNum = 0
  // displays goal number
  document.querySelector('#goalNum').textContent = goalNum
  // displays user's current progress
  document.querySelector('#currNum').textContent = 0
  // empties button div
  document.querySelector('#buttons').innerHTML = ''

  document.querySelector('#result').textContent = 'Click A Button to get closer to the number displayed.'
 
//   var btnImages = ['./assets/images/glasses.png', './assets/images/hat.png', './assets/images/timepiece.png', './assets/images/teapot.png']
//   for (let y = 0; y < btnImages.length; y++) {
//      let images = document.getElementById('btnImages');
//      images.appendChild(btnImages[y];
//   }

  // generates four buttons with random values
  for (let i = 0; i < 4; i++) {
    let btn = document.createElement('button')
    btn.className = 'someNum'
    btn.textContent = '???'
    btn.setAttribute('data-value', rand(20))
    document.querySelector('#buttons').append(btn)
  }
}

const reset = _ => {
  if (isFinished) {
    init()
  }
}

const check = _ => {
  if (currNum === goalNum) {
    isFinished = true
    document.querySelector('#result').textContent = 'Congratulations! You Matched The Number!'
  } else if (currNum > goalNum) {
    isFinished = true
    document.querySelector('#result').textContent = 'Oh No! You seriously suck at this!'
  } else {
    document.querySelector('#result').textContent = 'Keep Going...'
  }
}

document.addEventListener('click', e => {
  if (e.target.className === 'someNum' && !isFinished) {
    currNum += parseInt(e.target.dataset.value)
    document.querySelector('#currNum').textContent = currNum
    check()
  }
})

// starts app initial state
init()