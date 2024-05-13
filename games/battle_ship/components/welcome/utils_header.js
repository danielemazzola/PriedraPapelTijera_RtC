import { Start } from '../startGame/Start'
//CALL START
export const functionHeader = () => {
  const start = document.querySelector('.btnStart')
  start.addEventListener('click', (e) => {
    Start()
  })
}
