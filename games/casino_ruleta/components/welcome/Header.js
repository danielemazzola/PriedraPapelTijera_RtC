import { Home } from '../../../../main'
import './style.css'
import { functionHeader } from './utils_header'
export const Header = () => {
  const body = document.getElementById('app')
  const header = document.createElement('header')
  header.setAttribute('id', 'header')
  header.setAttribute('style', 'flex:1')
  header.innerHTML = `
    <div class="containerHeader">
      <div class="container">
        <h1>Ruleta</h1>
      </div>
        <button class="btnStart">Start</button>
        <button id="return" class="btnReturn">Return</button>
    </div>
  `
  body.append(header)
  functionHeader()
  const btnReturn = document.querySelector('#return')
  btnReturn.addEventListener('click', () => {
    header.remove()
    Home()
  })
}
