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
            <p>
              20 ans
              <br />
              <a href="logannochez@hotmail.fr">Adresse e-mail</a>
              <br />
              06.74.55.06.57
              <br />
              Saint-Malo
              <br />
              <a href="https://www.linkedin.com/in/logan-ncz">Linkedin</a>
              <br />
              <a href="https://github.com/logan-ncz">Github</a>
            </p>
          </div>
        </section>

        <section className="hard_skills">
          <h2>Hard skills</h2>
          <div className="aside_container">
            <p>Flexbox</p>
            <p>JavaScript</p>
            <p>ReactJS</p>
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
