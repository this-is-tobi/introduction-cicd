import './style.css'
import { moinsUn, plusUn } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://github.com/this-is-tobi/introduction-cicd" target="_blank">
      <img src="/marianne.png" class="logo vanilla" alt="Marianne logo" />
    </a>
    <div class="container">
      <div class="card">
        <button id="compteur-moins" type="button">-</button>
      </div>
      <h1 id="compteur-affichage"></h1>
      <div class="card">
        <button id="compteur-plus" type="button">+</button>
      </div>
    </div>
  </div>
`

document
  .querySelector('#compteur-moins')
  .addEventListener("click", () => {
    compteur = moinsUn(compteur)
    rafraichirAffichageCompteur()
  })

document
  .querySelector('#compteur-plus')
  .addEventListener("click", () => {
    compteur = plusUn(compteur)
    rafraichirAffichageCompteur()
  })

function rafraichirAffichageCompteur () {
  document.querySelector('#compteur-affichage').innerHTML = compteur
}

let compteur = 0

rafraichirAffichageCompteur()