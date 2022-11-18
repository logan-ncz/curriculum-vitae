import PhotoCV from './assets/photo_CV.jpg'
import Musculation from './assets/musculation.png'
import Controller from './assets/controller.png'

function App() {
  return (
    <div className="bloc_page">
      <aside>
        <div className="photo_cv">
          <img src={PhotoCV} alt="Photo_de_Logan" />
        </div>

        <div className="identite">
          <h1>
            <span>Logan</span> Nochez
          </h1>
          <div className="statut">
            <p>
              <span>Dévelo</span>ppeur Front-End
            </p>
          </div>
        </div>
        <section className="a_propos_de_moi">
          <h2>À propos de moi</h2>
          <div className="aside_container">
            <p>
              Développement Front-End spécialisé dans le framework React,
              déterminé, motivé et curieux, je suis toujours prêt à acquérir de
              nouvelles compétences.
            </p>
            <ul>
              <li>21 ans</li>
              <li>📍 Les Sables d'Olonne</li>
              <li>
                <a href="https://www.linkedin.com/in/logan-ncz">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>{' '}
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/logan-ncz">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>{' '}
                  Github
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="hard_skills">
          <h2>Hard skills</h2>
          <div className="aside_container">
            <p>Flexbox</p>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Sass</p>
            <p>Redux et React Redux</p>
            <p>Git et Github</p>
            <p>Figma</p>
            <p>Photoshop</p>
          </div>
        </section>

        <section className="langues">
          <h2>langues</h2>
          <div className="aside_container">
            <p>
              <strong>Anglais</strong>
            </p>
            <p>Niveau B2</p>
          </div>
        </section>

        <section className="loisirs">
          <h2>loisirs</h2>
          <p>
            <img src={Musculation} alt="Musculation" />
            <img src={Controller} alt="Jeux vidéos" />
          </p>
        </section>
      </aside>
      <section className="contenu">
        <div className="identite">
          <h1>
            <span>Logan</span> Nochez
          </h1>
          <div className="statut">
            <p>
              <span>Dévelo</span>ppeur Front-End
            </p>
          </div>
        </div>
        <section className="diplomes_et_formations">
          <h2>Diplômes et formations</h2>
          <p>
            <strong>
              Développeur Application JavaScript React - Bac +3/4 - diplôme
              enregistré au RNCP
            </strong>
            <br />
            OpenClassrooms St Malo, France De mars 2021 à mai 2022
            <br />
          </p>
          <div className="projets">
            <p>
              Projets :<br />
            </p>
            <ul>
              <li>
                <strong>Analyser les besoins</strong> à partir du cahier des
                charges défini par le client ou le chef de projet
              </li>
              <li>
                Implémenter des <strong>mockups</strong> avec du code de qualité
              </li>
              <li>
                <strong>Optimiser</strong> le temps de chargement des pages
              </li>
              <li>
                Communiquer avec les <strong>développeurs back-end</strong> pour
                assurer l’échange d’information dans l’application
              </li>
              <li>
                Utiliser les bonnes pratiques pour structurer le code{' '}
                <strong>HTML, CSS et Javascript</strong>
              </li>
              <li>
                Utiliser des <strong>frameworks comme React</strong> pour
                construire des applications puissantes et modulaires
              </li>
              <li>
                <strong>Tester</strong> le bon fonctionnement de l’application
                et corriger le code quand c’est nécessaire
              </li>
              <li>
                Assurer le <strong>support technique</strong> du site et
                produire une <strong>documentation</strong> technique et
                fonctionnelle du site pour le client
              </li>
            </ul>
          </div>

          <p>
            <strong>Prép'Web</strong>
            <br />
            OpenClassrooms St Malo, France De décembre 2019 à juin 2020
            <br />
          </p>
          <ul>
            <li>Définir la structure d'une page web à partir d'une maquette</li>
            <li>
              Adapter l'affichage d'un site web à des écrans de petite taille
            </li>
            <li>
              Utiliser un système de gestion de versions pour le suivi du projet
              et son hébergement
            </li>
            <li>Mettre en œuvre des effets CSS graphiques avancés</li>
            <li>Optimiser le référencement d'un site web</li>
            <li>Écrire un code HTML et CSS propre</li>
            <li>Assurer l'accessibilité d'un site web</li>
          </ul>

          <p>
            <strong>Baccalauréat technologique STI2D</strong>
            <br />
            Lycée Maupertuis Saint-Malo, France De septembre 2018 à juillet 2019
          </p>
        </section>

        <section className="experiences_professionnelles">
          <h2>Expériences professionnelles</h2>
          <p>
            <strong>Plongeur en restauration</strong>
            <br />
            La Licorne Saint-Malo, France De juillet 2020 à août 2020
          </p>
          <p>
            <strong>Valet de chambre</strong>
            <br />
            HOTEL LA GRASSINAIS Saint-Malo, France Août 2019
            <br />
            Entretien des chambres
          </p>
        </section>

        <section className="soft_skills">
          <h2>Soft skills</h2>
          <p>La curiosité</p>
          <p>L'ambition</p>
          <p>L'esprit d'entreprendre</p>
        </section>
      </section>
    </div>
  )
}

export default App
