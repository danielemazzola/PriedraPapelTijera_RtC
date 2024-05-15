import './style.css'
import { functionStartGame, formControl } from './utils_startGame'

export const Start = () => {
  document.querySelector('#return').remove()
  const main = document.createElement('main')
  header.setAttribute('style', 'height:auto; padding:10px 0;')
  const container = document.querySelector('.container')
  if (!container) return
  container.remove()
  const btnRestart = (document.querySelector(
    '.btnStart'
  ).textContent = `Restart Game`)
  const containerName = document.createElement('div')
  containerName.classList.add('containerFormName')
  containerName.innerHTML = `
    <p>¡Bienvenido al juego de Ruleta! En este desafío, tu objetivo es acertar el numero aleatorio. Te daremos 10 creditos para que incies a jugar, en caso de no acertar, perderás tu apuesta, en caso contrario, te daremos 36 creditos por cada 1 credito apostado.<br><br>

    Antes de comenzar, introduce tu nombre para personalizar la experiencia. Es importante mencionar que tus datos no se almacenarán en las cookies ni en ningún otro lugar, garantizando tu privacidad.<br><br>
    
    ¡Diviértete jugando!<br>
    🚨Recuerda que es importante no recargar la página para evitar perder los datos y mantener la continuidad del juego.</p>
    <form id="handleForm">
      <label for='saveNameUser'>Escribe tu nombre</label>
      <input id='saveNameUser' required />
      <button type="submit" id='saveUser'>Este soy yo</button>
    </form>
  `
  document.querySelector('body').append(main)
  main.append(containerName)
  functionStartGame()
  formControl()
}
