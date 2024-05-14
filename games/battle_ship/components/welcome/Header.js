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
        <h1>Battle Ship</h1>
        </div>
        <button class="btnStart">Start</button>
    </div>
  `

  body.append(header)
  //functionHeader()
  /*LUEGO ELIMINAR ESTO Y DEVOLVER EL functionHeader() */
  const alertP = document.querySelector('.btnStart')
  alertP.addEventListener('click', () => {
    alert('Aun estoy trabajando, en breve estará listo')
  })
  /*END LUEGO ELIMINAR ESTO*/
}
