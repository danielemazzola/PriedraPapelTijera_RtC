import { options } from '../../utils/utils'
import { Header } from '../welcome/Header'
export const arrayOptions = (array, user, machina) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    const button = document.createElement('button')
    if (machina) {
      button.setAttribute('id', `m_${index}`)
    } else {
      button.setAttribute('id', `p_${index}`)
    }
    button.textContent = element
    user.append(button)
  }
}
export const consult = (user) => {
  const machina = Math.floor(Math.random() * options.length)
  const messages = [
    { msg: '¡haz ganado!' },
    { msg: 'haz perdido' },
    { msg: 'empate' }
  ]

  if (user === machina) {
    return [{ result: messages[2] }, { user: user, machina: machina }, null]
  } else if (
    (user === 0 && machina === 2) ||
    (user === 2 && machina === 1) ||
    (user === 1 && machina === 0)
  ) {
    return [{ result: messages[0] }, { user: user, machina: machina }, true]
  } else {
    return [{ result: messages[1] }, { user: user, machina: machina }, false]
  }
  return result
}
export const styleResult = (btn, color, msg) => {
  btn.setAttribute('style', `background-color:${color}`)
  btn.disabled = true
  setTimeout(() => {
    btn.setAttribute('style', 'background-color:white')
    btn.disabled = false
  }, 2000)
}
export const Finish = (newScoreM, scoresUser) => {
  let result = {}
  if (newScoreM.score >= 3) {
    result = { user: false, machina: true }
  }
  if (scoresUser.score >= 3) {
    result = { user: true, machina: false }
  }
  return result
}
