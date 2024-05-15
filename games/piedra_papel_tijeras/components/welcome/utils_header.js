import { Start } from '../startGame/Start'
//CALL START
export const functionHeader = () => {
  const start = document.querySelector('.btnStartPPT')
  start.addEventListener('click', (e) => {
    Start()
  })
}
