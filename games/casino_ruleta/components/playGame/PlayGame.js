import './style.css'
import { tableNumber } from '../../helper/utils.js'
import { DELETE, SpinRoulet } from './utils'
import { Header } from '../welcome/Header'

let userObject = {}
let last_number = []
let userSelectNumber = []
export const PlayGame = (USER) => {
  userObject = USER
  const superDiv = document.querySelector('.containerGame')
  const container = document.createElement('div')
  const infoUser = document.createElement('div')
  const containerUser = document.createElement('div')
  const pUser = document.createElement('p')
  const pCredits = document.createElement('p')
  const containerMsg = document.createElement('div')
  containerMsg.id = 'lastNumbers'
  infoUser.append(containerMsg)
  container.id = 'containerGame'
  superDiv.append(infoUser)
  infoUser.id = 'info_user'
  pUser.id = 'pUser'
  pCredits.id = 'pCredits'
  pUser.textContent = `User: ${userObject.name}`
  pCredits.textContent = `Credits: ${userObject.credits}`
  infoUser.append(containerUser)
  containerUser.append(pUser)
  containerUser.append(pCredits)
  superDiv.append(container)
  const arrayNumbers = tableNumber(37)
  const containerNumbers = document.createElement('div')
  containerNumbers.id = 'containerNumber'
  container.append(containerNumbers)
  arrayNumbers.forEach((number) => {
    const btnNumber = document.createElement('button')
    btnNumber.classList.add('btnNumbers')
    btnNumber.textContent = number
    btnNumber.id = number
    containerNumbers.append(btnNumber)
    btnNumber.addEventListener('click', () => {
      if (userObject.credits > 0) {
        userSelectNumber.push(number)
        userObject.credits--
        pCredits.textContent = ``
        pCredits.textContent = `Credits: ${userObject.credits}`
        btnNumber.style.backgroundColor = 'var(--info-color-bgR)'
        btnNumber.disabled = true
      } else if (userSelectNumber.length > 0) {
        alert(
          'No tienes más saldo, debes esperar el SPIN y consumir los creditos apostados.'
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
          }
        }
      }
    })
  })
  timeSpin(userSelectNumber, userObject, last_number)
}

const timeSpin = () => {
  const infoUser = document.querySelector('#info_user')
  const containerNumbers = document.querySelector('#containerNumber')
  const containerMsg = document.querySelector('#lastNumbers')
  const pCredits = document.querySelector('#pCredits')
  const timeInfo = document.createElement('button')
  timeInfo.id = 'timeInfo'
  timeInfo.classList.add('btnNumbers')
  timeInfo.style.backgroundColor = 'var(--yellow-colorR)'
  let time = 10
  const interval = setInterval(() => {
    timeInfo.textContent = time
    if (!infoUser) return
    containerNumbers.append(timeInfo)
    time--
    if (time <= -1) {
      clearInterval(interval)
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
          btn.style.backgroundColor = 'var(--white-colorR)'
          btn.disabled = false
        }
      } else if (!result.win) {
        userSelectNumber = []
        for (const btn of btns) {
          btn.style.backgroundColor = 'var(--white-colorR)'
          btn.disabled = false
        }
      }
      const msg = document.createElement('p')
      last_number.push(result.random)
      last_number.map((number) => {
        msg.textContent = number
        containerMsg.append(msg)
      })
      const deleteTargetLastNumbers = containerMsg.querySelectorAll('p')
      if (deleteTargetLastNumbers.length >= 33) {
        containerMsg.innerHTML = ``
      }
      timeInfo.remove()
      timeSpin(userSelectNumber, userObject, last_number)
    }
  }, 1000)
}
