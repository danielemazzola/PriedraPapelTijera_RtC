import './style.css'
import { options } from '../../utils/utils'
import { SpinRoulet } from './utils'
import { Header } from '../welcome/Header'

let userObject = {}
let userSelectNumber = []
let last_number = []
export const PlayGame = (USER) => {
  userObject = USER
  const superDiv = document.querySelector('.containerGame')
  const container = document.createElement('div')
  const infoUser = document.createElement('div')
  const pUser = document.createElement('p')
  const pCredits = document.createElement('p')
  const spin = document.createElement('button')
  const containerMsg = document.createElement('div')
  containerMsg.id = 'lastNumbers'
  infoUser.append(containerMsg)
  container.id = 'containerGame'
  superDiv.append(infoUser)
  infoUser.id = 'info_user'
  pUser.textContent = `User: ${userObject.name}`
  pCredits.textContent = `Credits: ${userObject.credits}`
  spin.textContent = 'SPIN'
  spin.id = 'spin'
  infoUser.append(pUser)
  infoUser.append(pCredits)
  infoUser.append(spin)
  superDiv.append(container)

  let arrayNumbers = options(37)
  const containerNumbers = document.createElement('div')
  containerNumbers.id = 'containerNumber'
  container.append(containerNumbers)
  arrayNumbers.forEach((number) => {
    const btnNumber = document.createElement('button')
    btnNumber.classList.add('btnNumbers')
    btnNumber.textContent = number
    containerNumbers.append(btnNumber)
    btnNumber.addEventListener('click', () => {
      if (userObject.credits > 0) {
        userSelectNumber.push(number)
        userObject.credits--
        pCredits.textContent = ``
        pCredits.textContent = `Credits: ${userObject.credits}`
        btnNumber.style.backgroundColor = 'var(--info-color-bg)'
        btnNumber.disabled = true
      } else if (userSelectNumber.length > 0) {
        alert(
          'No tienes más saldo, debes dar click en SPIN y consumir los creditos restantes ya apostados.'
        )
      } else {
        const consult = confirm('No tienes más creditos... Deseas recargar?')
        if (consult) {
          const addCredit = confirm(
            'Te podré abonar otros 10 creditos, estas de acuerdo?'
          )
          if (addCredit) {
            userObject.credits = 10
            pCredits.textContent = ``
            pCredits.textContent = `Credits: ${userObject.credits}`
          } else {
            alert('Gracias por participar en este juego.')
            DELETE()
            Header()
          }
        } else {
          alert('Gracias por participar en este juego.')
          DELETE()
          Header()
        }
      }
    })
  })
  spin.addEventListener('click', () => {
    if (userSelectNumber.length <= 0) {
      return alert('Debes seleccionar al menos un número.')
    }
    const result = SpinRoulet(userSelectNumber, userObject)
    const btns = containerNumbers.querySelectorAll('button')
    if (result.win) {
      if (result.updateCredits >= 100) {
        alert(
          `Has GANADO EL JUEGO con ${result.updateCredits} creditos! Que maquina eres!`
        )
        DELETE()
        Header()
        return
      }
      userSelectNumber = []
      userObject.credits = result.updateCredits
      pCredits.textContent = ``
      pCredits.textContent = `Credits: ${userObject.credits}`
      for (const btn of btns) {
        btn.style.backgroundColor = 'var(--white-color)'
        btn.disabled = false
      }
    } else if (!result.win) {
      userSelectNumber = []
      for (const btn of btns) {
        btn.style.backgroundColor = 'var(--white-color)'
        btn.disabled = false
      }
    }
    const msg = document.createElement('p')
    last_number.push(result.random)
    msg.textContent = ``
    for (const number of last_number) {
      msg.textContent = number
      containerMsg.append(msg)
    }
  })
}

const DELETE = () => {
  document.querySelector('main').remove()
  document.querySelector('header').remove()
}
