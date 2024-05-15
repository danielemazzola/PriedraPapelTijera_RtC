import './style.css'
import { piedra_papel_tijera } from './games/piedra_papel_tijeras/app'
import { Ruleta } from './games/casino_ruleta/app'
import { learn_english } from './games/Learn_English/app'

const arrayGames = [
  { id: 1, name: 'Piedra, papel y tijeras' },
  { id: 2, name: 'Ruleta' },
  { id: 3, name: 'Learn English' }
]
export const Home = () => {
  const body = document.querySelector('body')
  const containerGames = document.createElement('header')
  body.append(containerGames)
  for (const arrayGame of arrayGames) {
    const btnGame = document.createElement('button')
    btnGame.id = arrayGame.id
    btnGame.textContent = arrayGame.name.toUpperCase()
    containerGames.append(btnGame)
    btnGame.style.cursor = 'pointer'
    btnGame.addEventListener('click', () => {
      containerGames.remove()
      if (btnGame.id === '1') {
        piedra_papel_tijera()
      } else if (btnGame.id === '2') {
        Ruleta()
      } else if (btnGame.id === '3') learn_english()
    })
  }
}
Home()
