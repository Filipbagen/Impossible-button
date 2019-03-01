const play = () => {
  const buttonElement = getElement('button')
  buttonElement.addEventListener('mouseenter', function (event) {
    moveButton(buttonElement)
  })
}

const getElement = (myClass) => {
  const element = document.querySelector('.' + myClass)
  return element
}

const win = () => {
  document.querySelector('body').classList.add('blinking')
  document.querySelector('.prompt').classList.add('win')
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