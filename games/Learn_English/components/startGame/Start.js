import './style.css'
import { functionStartGame, formControl } from './utils_startGame'

export const Start = () => {
  const returnBtn = document.querySelector('#return')
  if (returnBtn) returnBtn.remove()
  const main = document.createElement('main')
  const header = document.querySelector('header')
  header.setAttribute('style', 'height:auto; padding:10px 0;')
  const container = document.querySelector('.containerLE')
  if (!container) return
  container.remove()
  const btnRestart = (document.querySelector(
    '.btnStartLE'
  ).textContent = `Restart Game`)
  const containerName = document.createElement('div')
  containerName.classList.add('containerFormNameLE')
  containerName.innerHTML = `
    <p>¡Bienvenido al juego de Learn English! En este desafío, tu objetivo es acertar el significado en ingles de las imagenes.
    Cada respuesta acertada equivale a un punto, a ver cuantos puntos eres capaz de GANAR.<br><br>

    Antes de comenzar, introduce tu nombre para personalizar la experiencia. Es importante mencionar que tus datos no se almacenarán en las cookies ni en ningún otro lugar, garantizando tu privacidad.<br><br>
    
    ¡Diviértete jugando!<br>
    🚨Recuerda que es importante no recargar la página para evitar perder los datos y mantener la continuidad del juego.</p>
    <form id="handleFormLE">
      <label for='saveNameUserLE'>Escribe tu nombre</label>
      <input id='saveNameUserLE' required />
      <button type="submit" id='saveUserLE'>Este soy yo</button>
    </form>
  `
  document.querySelector('body').append(main)
  main.append(containerName)
  functionStartGame()
  formControl()
}
