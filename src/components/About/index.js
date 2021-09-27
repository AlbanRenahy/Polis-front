import React from "react";
import BurgerNav from "../../containers/BurgerNav";
import "./about.scss";

import Logo from "../../styles/images/logo-saumon.png";

const About = () => (
  <div id="about">
    <BurgerNav />
    <div className="container">
      <div className="header">
        <img src={Logo} alt="" className="header-logo" />
        <p className="header-accroche">Du grec ancien πόλις la cité</p>
        <p className="header-description">
          Application cartographique participative de données et suggestions
          touristiques
        </p>
      </div>
      <div className="main">
        <div className="main-description">
          La version 1.0 de Polis que vous êtes en train de parcourir a été
          developpée avec Angular et Spring <br />
          Ce projet valide une formation de retour à l'emploi de 3 mois et demi
          suivie par 3 aspirants developpeurs chez{" "}
          <a href="#" target="_blank">
            M2i formation
          </a>
          .
          <div className="main-description-team">
            <span className="cadre-passion">
              Polis est codé avec passion par :
            </span>
            <ul>
              <li>
                <span className="team-name">
                  <a href="#clement">Alban Renahy</a>
                </span>{" "}
                <span className="team-job">Frontend et Backend</span>{" "}
                <span className="team-role">Mangeur de salade</span>
              </li>
              <li>
                <span className="team-name">
                  <a href="#thomas">Valère Galais-Brousse</a>
                </span>{" "}
                <span className="team-job">Frontend et Backend</span>{" "}
                <span className="team-role">Protecteur de la BDD</span>
              </li>
              <li>
                <span className="team-name">
                  <a href="#jerome">Catherine Hermary</a>
                </span>{" "}
                <span className="team-job">Frontend et Backend</span>{" "}
                <span className="team-role">Reine de Git</span>
              </li>
            </ul>
          </div>
          <div className="main-description-techno">
            <span className="cadre-improve">
              Polis nous a permis de nous améliorer en :
            </span>
            <ul>
              <li>
                <span className="col-1">HTML/SCSS</span>{" "}
                <span className="col-2">JS</span>{" "}
                <span className="col-3">REACT</span>
              </li>
              <li>
                <span className="col-1">JAVA</span>{" "}
                <span className="col-2">SPRING</span>{" "}
                <span className="col-3">TESTS</span>
              </li>
              <li>
                <span className="col-1">SEMANTIC-UI</span>{" "}
                <span className="col-2">GIT</span>{" "}
                <span className="col-3">GITHUB</span>
              </li>
              <li>
                <span className="col-1">OPENSTREETMAP</span>{" "}
                <span className="col-2">LEAFLET</span>{" "}
                <span className="col-3">TEAM WORK</span>
              </li>
              <li>
                <span className="col-1">SCRUM</span>{" "}
                <span className="col-2">SQL</span>{" "}
                <span className="col-3">UX</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-medaillons">
          <h2>Polis c'est :</h2>
          <hr />
          <div id="clement" className="main-medaillons-teamate">
            <img alt="" />
            <div>
              <span className="teamate-name">Catherine Hermary</span>
              <span className="teamate-email">catherine.hermary@gmail.com</span>
              <span className="teamate-linkedin">
                <a href="https://www.linkedin.com/in"> Linkedin</a>
              </span>
            </div>
          </div>
          <div id="thomas" className="main-medaillons-teamate">
            <img alt="" />
            <div>
              <span className="teamate-name">Valère Galais-Brousse</span>
              <span className="teamate-email">valeregbv1@gmail.com</span>
              <span className="teamate-linkedin">
                <a href="https://www.linkedin.com/in">
                  {" "}
                  Linkedin
                </a>
              </span>
            </div>
          </div>
          <div id="jerome" className="main-medaillons-teamate">
            <img alt="" />
            <div>
              <span className="teamate-name">Alban Renahy</span>
              <span className="teamate-email">albanrenahy.dev@gmail.com</span>
              <span className="teamate-linkedin">
                <a href="https://www.linkedin.com/in">
                  {" "}
                  Linkedin
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="main-credits">
          <h3 className="main-credits-title">Crédits</h3>
          <div className="main-credits-liste">
            <p>Map: OpenStreetMap & Leaflet-react</p>
            <p>Photos: Wikipedia</p>
            <p>Design: Clément Eveillard</p>
            <p>O du logo: Oclock</p>
            <p>Formation: Oclock</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
