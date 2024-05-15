import './style.css'
import { functionHeader } from './utils_header'
export const Header = () => {
  const body = document.getElementById('app')
  const header = document.createElement('header')
  header.setAttribute('id', 'headerPPT')
  header.setAttribute('style', 'flex:1')
  header.innerHTML = `
    <div class="containerHeaderPPT">
      <div class="containerPPT">
        <h1>GAME</h1>
        <ul class="listIconPPT">
          <li>🪨</li>
          <li>🧻</li>
          <li>✂️</li>
        </ul>
      </div>
        <button class="btnStartPPT">Start</button>
    </div>
  `
  body.append(header)
  functionHeader()
}
