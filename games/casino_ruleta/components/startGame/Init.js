import { PlayGame } from '../playGame/PlayGame'
export const Init = (USER) => {
  const main = document.querySelector('main')
  const container = document.createElement('div')
  const containerInfo = document.createElement('div')
  containerInfo.classList.add('containerInfo')
  const containerGame = document.createElement('div')
  containerGame.classList.add('containerGame')

  containerInfo.innerHTML = `
  <h3>Hi ${USER.name.toUpperCase()}!</h3>
  <p>Las reglas son simples, tendrás que elegir el número ganador. Al alcanzar los 100 creditos GANARÁS!</p>
  `
  containerGame.innerHTML = `
  <button id='play'>¿Play Game?</button>
  `
  main.append(container)
  container.append(containerInfo, containerGame)

  let play = document.querySelector('#play')
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
