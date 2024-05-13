import './style.css'
import { functionStartGame, formControl } from './utils_startGame'
import { options } from '../../utils/utils'
export const Start = () => {
  //Modificar el HEADER y tan solo dejar un boton de reiniciar juego
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
    <p>¡Bienvenido al juego de ${options.map(
      (val) => val
    )}! En este desafío, tu objetivo es vencer a la máquina seleccionando una de las tres opciones: ${options.map(
    (val) => val
  )}. El juego se compone de tres partidas, de 3 segundos cada una, para determinar quién será el ganador.<br><br>

    Antes de comenzar, introduce tu nombre para personalizar la experiencia. Es importante mencionar que tus datos no se almacenarán en las cookies ni en ningún otro lugar, garantizando tu privacidad.<br><br>
    
    ¡Diviértete jugando y que gane el mejor!<br>
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
