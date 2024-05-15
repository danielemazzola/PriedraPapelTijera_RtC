import { Start } from '../startGame/Start'
//CALL START
export const functionHeader = () => {
  const start = document.querySelector('.btnStartLE')
  start.addEventListener('click', (e) => {
    Start()
  })
}
