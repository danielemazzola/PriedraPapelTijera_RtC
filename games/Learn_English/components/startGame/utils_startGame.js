import { Header } from '../welcome/Header'
import { Init } from './Init'

//USER NAME STATE
let USER = {}

export const functionStartGame = () => {
  const btnRestart = document.querySelector('.btnStartLE')
  btnRestart.addEventListener('click', () => {
    document.querySelector('main').remove()
    document.querySelector('#headerLE').remove()
    Header()
  })
}
//FORM CONTROL
export const formControl = () => {
  const handleForm = document.querySelector('#handleFormLE')
  handleForm.addEventListener('submit', (e) => {
    handleSubmitFormUser(e)
  })
}
const handleSubmitFormUser = (e) => {
  e.preventDefault()
  const name = document.querySelector('#saveNameUserLE').value
  USER = { name: name, points: 0 }
  document.querySelector('.containerFormNameLE').remove()
  Init(USER)
}
