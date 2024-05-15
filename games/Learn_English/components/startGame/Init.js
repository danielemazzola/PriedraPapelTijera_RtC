import { PlayGame } from '../playGame/PlayGame'
export const Init = (USER) => {
  const main = document.querySelector('main')
  const container = document.createElement('div')
  const containerInfo = document.createElement('div')
  containerInfo.classList.add('containerInfoLE')
  const containerGame = document.createElement('div')
  containerGame.classList.add('containerGameLE')

  containerInfo.innerHTML = `
  <h3>Hi ${USER.name.toUpperCase()}!</h3>
  <p>Las reglas son simples, tendrás que elegir la opción correcta. Al alcanzar los 10 puntos, <br>GANARÁS!, pero si no aciertas, te robaré un punto 🤖</p>
  `
  containerGame.innerHTML = `
  <button id='playLE'>¿Play Game?</button>
  `
  main.append(container)
  container.append(containerInfo, containerGame)

  let play = document.querySelector('#playLE')
  play.addEventListener('click', () => {
    play.disabled = true
    let count = 3
    play.textContent = `Empezamos en`
    const interval = setInterval(() => {
      play.textContent = count
      count--
      if (count <= -1) {
        play.textContent = `Gooooo!!`
      }
      if (count <= -3) {
        play.remove()
        clearInterval(interval)
        PlayGame(USER)
      }
    }, 1000)
  })
}
