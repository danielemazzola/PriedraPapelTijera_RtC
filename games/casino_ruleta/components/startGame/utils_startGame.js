import { Header } from '../welcome/Header'
import { Init } from './Init'

//USER NAME STATE
let USER = {}

export const functionStartGame = () => {
  const btnRestart = document.querySelector('.btnStart')
  btnRestart.addEventListener('click', () => {
    document.querySelector('main').remove()
    document.querySelector('#header').remove()
    Header()
  })
}
//FORM CONTROL
export const formControl = () => {
  const handleForm = document.querySelector('#handleForm')
  handleForm.addEventListener('submit', (e) => {
    handleSubmitFormUser(e)
  })
}
const handleSubmitFormUser = (e) => {
  e.preventDefault()
  const name = document.querySelector('#saveNameUser').value
  USER = { name: name, credits: 10 }
  document.querySelector('.containerFormName').remove()
  Init(USER)
}
