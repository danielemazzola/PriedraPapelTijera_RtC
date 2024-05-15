import './style.css'
export const Header = () => {
  const body = document.querySelector('body')
  const header = document.createElement('header')
  const main = document.createElement('main')
  header.innerHTML = `
    <div class='containerHeader'>
      <h1>Learn English</h1>
      <button>Restart</button>
    </div>
  `

  body.append(header, main)
}
