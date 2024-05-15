import { Header } from '../../components/welcome/Header'
import './style.css'
import { randomFruit, fruits, DELETE } from './utils'

const optionsUserSelect = 5
export const PlayGame = (USER) => {
  let userCopy = USER
  const containerGame = document.querySelector('.containerGameLE')
  const optionsList = document.querySelector('#optionsList')
  const pointsTarget = document.querySelector('.infoPointsLE')
  const figure = document.querySelector('.fruit')

  const getFruit = randomFruit(fruits, optionsUserSelect)
  containerGame.innerHTML = `
    <div class="containLE">
      <div class="containInfoLE">
        <p class="infoNameLE">User: ${userCopy.name}</p>
        <p class="infoPointsLE">Points: ${userCopy.points}</p>
      </div>
      <div id="containerGameLE">
        <div id="containerSelect">
          <p class="fruit">${getFruit.selectedFruit.figure}</p>
        </div>
        <div id="options">
          <ul id="optionsList">
          ${getFruit.options
            .map(
              (option) =>
                `<li class="listLi" data-id="${option.id}">${option.name}</li>`
            )
            .join('')}
          </ul>
        </div>
      </div>
    </div>
  `

  const optionsListArray = document.querySelectorAll('.listLi')
  for (let index = 0; index < optionsListArray.length; index++) {
    const element = optionsListArray[index]
    element.addEventListener('click', (e) => {
      const selectedId = e.target.dataset.id
      processSelection(selectedId, getFruit, userCopy)
    })
  }
  /* const { options } = element
  for (let index = 0; index < options.length; index++) {
    const el = options[index]
    listLi.classList.add('listLi')
    listLi.textContent = el.name
    listLi.value = el.id
    optionsList.append(listLi)
    listLi.addEventListener('click', (e) => {
      const compareOptions = comprove(e, element, userCopy)
      console.log(compareOptions)
      pointsTarget.innerHTML = ``
      pointsTarget.textContent = `Points: ${compareOptions.userCopy.points}`
      if (compareOptions.win) {
        const updateFruit = randomFruit(fruits, optionsUserSelect)
        
        figure.innerHTML = ``
        figure.textContent = updateFruit.selectedFruit.figure
        optionsList.innerHTML = ``
        const { options } = updateFruit
        for (let i = 0; i < options.length; i++) {
          const el = options[i]
          const listLi = document.createElement('li')
          listLi.classList.add('listLi')
          listLi.textContent = el.name
          listLi.value = el.id
          optionsList.append(listLi)
        }
      }
    })
  }*/
}
const processSelection = (selectedId, getFruit, userCopy) => {
  const { selectedFruit } = getFruit

  if (Number(selectedId) === selectedFruit.id) {
    userCopy.points += 1
    const getFruit = randomFruit(fruits, optionsUserSelect)
    if (userCopy.points === 10) {
      alert(`Has "GANADO", eres un maquina! Total puntos: ${userCopy.points}`)
      DELETE()
      Header()
      return
    }
  } else if (userCopy.points > 0) {
    userCopy.points -= 1
  }
  const containerGame = document.querySelector('.containerGameLE')
  containerGame.innerHTML = ``
  PlayGame(userCopy)
}
