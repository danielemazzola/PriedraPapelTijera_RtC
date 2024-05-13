import { options } from '../../utils/utils'
export const SpinRoulet = (userSelectNumber, userObject) => {
  let result = {}
  const array = options(37)
  const randomNumber = Math.floor(Math.random() * array.length)
  //const resulRandom = options[randomNumber]
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
