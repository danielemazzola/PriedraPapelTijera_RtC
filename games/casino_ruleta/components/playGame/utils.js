import { tableNumber } from '../../helper/utils.js'
import { Header } from '../welcome/Header.js'
let result = {}
export const SpinRoulet = (userSelectNumber, userObject) => {
  const array = tableNumber(37)
  const randomNumber = Math.floor(Math.random() * array.length)
  console.log(randomNumber)
  for (const option of userSelectNumber) {
    if (option === randomNumber) {
      const updateCredits = userObject.credits + 36
      result = {
        random: randomNumber,
        userNumber: option,
        win: true,
        updateCredits
      }
      return result
    }
  }
  result = { random: randomNumber, userNumber: userSelectNumber, win: false }
  return result
}
export const DELETE = () => {
  document.querySelector('main').remove()
  document.querySelector('header').remove()
}
