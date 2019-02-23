const play = () => {
  const buttonElement = getElement('button')
  console.log(buttonElement)
  buttonElement.addEventListener('mouseenter', function (event) {
    moveButton(buttonElement)
  })
}

const getElement = (myClass) => {
  const element = document.querySelector('.' + myClass)
  return element
}

const win = () => {
  document.querySelector('#bg2').classList.toggle('blinking')
}

const getRand = () => {
  return Math.random() * 90
}

const moveButton = () => {
  const button = getElement('button')
  button.style.top = getRand() + '%'
  button.style.left = getRand() + '%'
}

const music = () => {
  document.querySelector('honey.mp3').play
}
