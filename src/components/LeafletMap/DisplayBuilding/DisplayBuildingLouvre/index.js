/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */

import React from "react";
import PropTypes from "prop-types";
import { Dimmer, Loader, Icon } from "semantic-ui-react";
import MainPicture from "../../../../styles/images/louvre.jpg";

import "../../DisplayBuilding/DisplayBuilding.scss";

const DisplayBuilding = ({
  isDisplayBuildingOpen,
  closeAllModals,
  loading,
  didUserVote,
  isModifyPanelOpen,
  isConnected,
}) => {

  const handleCloseDataForm = (e) => {
    e.preventDefault();
    closeAllModals();
  };

  return (
    <div id="DisplayBuilding">
      <div
        className={
          isDisplayBuildingOpen ? "display-donnees open" : "display-donnees"
        }
      >
        <div className="dysplay-donnees_relative">
          <header>
            <div
              className="header-picture"
              style={{
                backgroundImage: `url(${MainPicture})`,
              }}
            />
            <a
              href="#"
              className="renseignement-donnees_close"
              onClick={handleCloseDataForm}
            >
              Fermer
            </a>
            <div className="header-info">
              <h2 className="header-info-name">Musée du Louvre</h2>
              <h2 className="header-info-user">
                Renseigné par <strong>Philibert</strong>
              </h2>
              <h3 className="header-info-address">
                Rue de Rivoli, 75001 Paris
              </h3>
              <div className="header-info-bottom--panel">
                <p className="header-info-tag">3h de visite</p>
              </div>
            </div>
          </header>
          <hr />
          <div className="panel-description">
            <p className="panel-description-title">Le saviez-vous ?</p>
            <p className="panel-description-text">
              Musée le plus visité au monde. Il abrite notamment le célèbre
              tableau de la Joconde, peint par Léonard de Vinci.
            </p>
          </div>
          <hr />
          <div className="panel-builders">
            <ul>
              <li>
                <p className="information">Cétogorie</p>
                <p>musée</p>
              </li>
              <li>
                <p className="information">Région</p>
                <p>Île de France</p>
              </li>
              <li>
                <p className="information">Public visé</p>
                <p>Toute la famille</p>
              </li>
            </ul>
          </div>
          <hr />
          {!isConnected && (
            <footer>
              {didUserVote ? (
                <div className="panel-vote">
                  <p>MERCI D'AVOIR VOTÉ !</p>
                </div>
              ) : (
                <div className="panel-vote">
                  <p>VOTER POUR CETTE FICHE</p>
                  <div>
                    <span className="upvote">
                      <a href="">
                        <Icon name="arrow up" />
                      </a>
                    </span>
                    <span className="downvote">
                      <a href="">
                        <Icon name="arrow down" />
                      </a>
                    </span>
                  </div>
                </div>
              )}
              <div className="panel-share">
                <p>
                  <a href="">PARTAGER</a>
                </p>
              </div>
            </footer>
          )}
          <div
            className={
              isModifyPanelOpen ? "panel-modify visible" : "panel-modify hidden"
            }
          >
            <hr />
            <a href="">
              <p>Modifier des informations sur cette fiche</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayBuilding.propTypes = {
  buildings: PropTypes.array.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  datas: PropTypes.object.isRequired,
  didUserVote: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  isDisplayBuildingOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  openModifyPanel: PropTypes.func.isRequired,
  updateFormField: PropTypes.func.isRequired,
  userVote: PropTypes.func.isRequired,
};

export default DisplayBuilding;
