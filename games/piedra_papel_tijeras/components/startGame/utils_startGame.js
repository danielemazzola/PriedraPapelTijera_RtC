import { Header } from '../welcome/Header'
import { Init } from './Init'

//USER NAME STATE
let USER = {}

export const functionStartGame = () => {
  const btnRestart = document.querySelector('.btnStartPPT')
  btnRestart.addEventListener('click', () => {
    document.querySelector('main').remove()
    document.querySelector('#headerPPT').remove()
    Header()
  })
}
//FORM CONTROL
export const formControl = () => {
  const handleForm = document.querySelector('#handleFormPPT')
  handleForm.addEventListener('submit', (e) => {
    handleSubmitFormUser(e)
  })
}
const handleSubmitFormUser = (e) => {
  e.preventDefault()
  const name = document.querySelector('#saveNameUserPPT').value
  USER = { name: name, score: 0 }
  document.querySelector('.containerFormNamePPT').remove()
  Init(USER)
}
