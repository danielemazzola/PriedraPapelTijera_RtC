import './style.css'
import { functionHeader } from './utils_header'
export const Header = () => {
  const body = document.getElementById('app')
  const header = document.createElement('header')
  header.setAttribute('id', 'headerLE')
  header.setAttribute('style', 'flex:1')
  header.innerHTML = `
    <div class="containerHeaderLE">
      <div class="containerLE">
        <h1>Learn English</h1>
      </div>
        <button class="btnStartLE">Start</button>
    </div>
  `
  body.append(header)
  functionHeader()
}
