import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

import ViewToggler from "../../../containers/ViewToggler";
import BurgerNav from "../../../containers/BurgerNav";

import MainPicture from "../../../styles/images/louvre.jpg";

import "./suggestions.scss";

class Liste extends Component {
  // {buildings, listData, loading, getBuildingsListData} = this.props;
  // { buildingsData } = getBuildingsListData(buildings);
  componentDidMount() {
    const { buildings, getBuildingsListData } = this.props;
    getBuildingsListData(buildings);
  }

  render() {
    const { listData, loading } = this.props;
    return (
      <div id="liste">
        <BurgerNav />
        <ViewToggler />
        {listData && (
          <Card.Group>
            <Card className="card">
              <Image src={MainPicture} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Musée du Louvre</Card.Header>
                <Card.Meta></Card.Meta>
                <Card.Description>Rue de Rivoli</Card.Description>
                <div className="panel-builders">
                  <ul>
                    <li>
                      <p className="construction">Renseigné par</p>
                      <p>Philibert</p>
                    </li>
                    <li>
                      <p className="construction">Catégorie</p>
                      <p>
                        Musée <a>éditer</a>
                      </p>
                    </li>
                    <li>
                      <p className="construction">Temps de visite estimé</p>
                      <p>
                        3 heures <a>éditer</a>
                      </p>
                    </li>
                    <li>
                      <p className="amenagement">Les saviez-vous?</p>
                      <p>
                        Musée le plus visité au monde. Il abrite notamment le
                        célèbre tableau de la Joconde, peint par Léonard de
                        Vinci. <a>éditer</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </Card.Content>
              <p>
                Musée le plus visité au monde.
              </p>
              <Card.Content extra>
                Il abrite notamment le célèbre tableau de la Joconde, peint par
                Léonard de Vinci.
              </Card.Content>
            </Card>
          </Card.Group>
        )}
        <div className="back-to-map">
          <Link className="back-to-map-btn" to="/map">
            <Icon.Group>
              <Icon name="map outline" />
              <Icon corner name="reply" />
            </Icon.Group>
            Retour à la carte
          </Link>
        </div>
      </div>
    );
  }
}

Liste.propTypes = {
  buildings: PropTypes.array.isRequired,
  listData: PropTypes.array.isRequired,
  getBuildingsListData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Liste;
