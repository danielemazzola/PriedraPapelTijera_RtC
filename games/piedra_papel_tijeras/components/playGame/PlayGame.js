import './style.css'
import { machina, options } from '../../utils/utils'
import { arrayOptions, styleResult, consult, Finish } from './utils'

export const PlayGame = (USER) => {
  let newScore = USER
  let newScoreM = machina
  const superDiv = document.querySelector('.containerGame')
  const containerGame = document.createElement('div')
  containerGame.setAttribute('id', 'containerGame')
  const containerUser = document.createElement('div')
  const containerMachina = document.createElement('div')
  containerUser.innerHTML = `
    <p>${newScore.name}</p>
    <p id='scoresUser'>Puntos: ${newScore.score}</p>
    <div id="optionsUser"></div>
    `
  containerMachina.innerHTML = `
    <p>${machina.name}</p>
    <p id='scoresMachina'>Puntos: ${machina.score}</p>
    <div id="optionsMachina"></div>
  `

  superDiv.append(containerGame)
  containerGame.append(containerUser, containerMachina)
  const optionsUser = document.querySelector('#optionsUser')
  const optionsMachina = document.querySelector('#optionsMachina')
  const x = arrayOptions(options, optionsUser, false)
  arrayOptions(options, optionsMachina, true)
  optionsUser.addEventListener('click', (e) => {
    const select = Number(e.target.id.slice(2))
    const btn = optionsUser.querySelector(`#${e.target.id}`)
    const result = consult(select)
    const msg = document.createElement('p')
    const containerGame = document.querySelector('.containerGame')
    const idBtnMachine = result[1].machina.toString()
    const btnMachinaStyle = document.querySelector(`#m_${idBtnMachine}`)
    if (result[2]) {
      const scoresUser = document.querySelector('#scoresUser')
      newScore.score++
      scoresUser.textContent = `Puntos: ${newScore.score}`
      styleResult(btn, 'rgba(72, 182, 86, 0.5)', msg)
      styleResult(btnMachinaStyle, 'rgba(255, 79, 79, 0.507)', msg)
      msg.textContent = result[0].result.msg
      setTimeout(() => {
        msg.innerHTML = ``
      }, 2000)
    } else if (result[2] === false) {
      const scoresMachina = document.querySelector('#scoresMachina')
      newScoreM.score++
      scoresMachina.textContent = `Puntos: ${newScoreM.score}`
      styleResult(btn, 'rgba(255, 79, 79, 0.507)', msg)
      styleResult(btnMachinaStyle, 'rgba(72, 182, 86, 0.5)', msg)
      msg.textContent = result[0].result.msg
      setTimeout(() => {
        msg.innerHTML = ``
      }, 2000)
    } else {
      styleResult(btn, 'rgba(255, 227, 69, 0.445)', msg)
      styleResult(btnMachinaStyle, 'rgba(255, 227, 69, 0.445)', msg)
      msg.textContent = result[0].result.msg
      setTimeout(() => {
        msg.innerHTML = ``
      }, 2000)
    }
    Finish(newScoreM, newScore)
    containerGame.append(msg)
  })
}
