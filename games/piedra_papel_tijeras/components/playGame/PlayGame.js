import './style.css'
import { machina, options } from '../../utils/utils'
import { arrayOptions, styleResult, consult, Finish } from './utils'
import { Header } from '../welcome/Header'

let newScore
let newScoreM
export const PlayGame = (USER) => {
  newScore = USER
  newScoreM = machina
  const superDiv = document.querySelector('.containerGamePPT')
  const msg = document.createElement('p')
  superDiv.append(msg)
  const containerGame = document.createElement('div')
  containerGame.setAttribute('id', 'containerGamePPT')
  const containerUser = document.createElement('div')
  const containerMachina = document.createElement('div')
  containerUser.innerHTML = `
    <p>${USER.name}</p>
    <p id='scoresUser'>Puntos: ${newScore.score}</p>
    <div id="optionsUserPPT"></div>
    `
  containerMachina.innerHTML = `
    <p>${machina.name}</p>
    <p id='scoresMachinaPPT'>Puntos: ${machina.score}</p>
    <div id="optionsMachinaPPT"></div>
  `

  superDiv.append(containerGame)
  containerGame.append(containerUser, containerMachina)
  const optionsUser = document.querySelector('#optionsUserPPT')
  const optionsMachina = document.querySelector('#optionsMachinaPPT')
  const x = arrayOptions(options, optionsUser, false)
  arrayOptions(options, optionsMachina, true)
  optionsUser.addEventListener('click', (e) => {
    const select = Number(e.target.id.slice(2))
    const btn = optionsUser.querySelector(`#${e.target.id}`)
    const result = consult(select)
    const containerGame = document.querySelector('.containerGamePPT')
    const idBtnMachine = result[1].machina.toString()
    const btnMachinaStyle = document.querySelector(`#m_${idBtnMachine}`)
    if (result[2]) {
      const scoresUser = document.querySelector('#scoresUser')
      newScore.score++
      scoresUser.textContent = `Puntos: ${newScore.score}`
      styleResult(btn, 'var(--win-colorPPT)', msg)
      styleResult(btnMachinaStyle, 'var(--lose-colorPPT)', msg)
      msg.textContent = result[0].result.msg
      setTimeout(() => {
        msg.innerHTML = ``
      }, 2000)
    } else if (result[2] === false) {
      const scoresMachina = document.querySelector('#scoresMachinaPPT')
      newScoreM.score++
      scoresMachina.textContent = `Puntos: ${newScoreM.score}`
      styleResult(btn, 'var(--lose-colorPPT)', msg)
      styleResult(btnMachinaStyle, 'var(--win-colorPPT)', msg)
      msg.textContent = result[0].result.msg
      setTimeout(() => {
        msg.innerHTML = ``
      }, 2000)
    } else {
      styleResult(btn, 'var(--tie-colorPPT)', msg)
      styleResult(btnMachinaStyle, 'var(--tie-colorPPT)', msg)
      msg.textContent = result[0].result.msg
      setTimeout(() => {
        msg.innerHTML = ``
      }, 2000)
    }
    const resultEnd = Finish(newScoreM, newScore)
    if (resultEnd?.user || resultEnd?.machina) {
      ResulEnd(resultEnd, USER)
    }
  })
}

const ResulEnd = (resultEnd, USER) => {
  setTimeout(() => {
    if (resultEnd.user) {
      const confirmTurnInit = confirm(
        '¡Has Ganado!, Muchas gracias por jugarme. Quieres volver a jugar?'
      )
      if (confirmTurnInit) {
        REINIT()
        newScore.score = 0
        newScoreM.score = 0
        PlayGame(newScore)
      } else {
        newScoreM.score = 0
        DELETE()
        Header()
      }
    } else if (resultEnd.machina) {
      const confirmTurnInit = confirm(
        '¡Has perdido!, Muchas gracias por jugarme. Quieres volver a jugar?'
      )
      if (confirmTurnInit) {
        REINIT()
        newScore.score = 0
        newScoreM.score = 0
        PlayGame(newScore)
      } else {
        newScoreM.score = 0
        DELETE()
        Header()
      }
    }
  }, 1000)
  //FUNCTION DELETE AND TURN HEAD
  const DELETE = () => {
    document.querySelector('main').remove()
    document.querySelector('header').remove()
  }
  const REINIT = () => {
    document.querySelector('#containerGamePPT').remove()
    const parent = document.querySelector('.containerGamePPT')
    parent.querySelector('p').remove()
  }
}
