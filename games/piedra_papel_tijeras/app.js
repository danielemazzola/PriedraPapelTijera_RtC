import './src/globals.css'
import { Header } from './components/welcome/Header'
import { functionHeader } from './components/welcome/utils_header'
import { Start } from './components/startGame/Start'
import {
  formControl,
  functionStartGame
} from './components/startGame/utils_startGame'
import { Init } from './components/startGame/Init'
import { PlayGame } from './components/playGame/PlayGame'

export const piedra_papel_tijera = () => {
  //SOLO QUEDARÄ EL HEADER
  Header()
  functionHeader()
  Start()
  //functionStartGame()
  formControl()
  Init('Dani')
  PlayGame({ name: 'Daniele', score: 0 })
}
/* 
import './src/globals.css'
import { Header } from './components/welcome/Header'
export const piedra_papel_tijera = () => {
  Header()
}
 */
