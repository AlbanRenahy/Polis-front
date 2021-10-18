import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Icon, Image, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";

import ViewToggler from "../../../containers/ViewToggler";
import BurgerNav from "../../../containers/BurgerNav";

import MainPicture from "../../../styles/images/louvre.jpg";

import "./suggestions.scss";
import { bounds } from "leaflet";

class Liste extends Component {
  // {buildings, listData, loading, getBuildingsListData} = this.props;
  // { buildingsData } = getBuildingsListData(buildings);
  componentDidMount() {
    const { buildings, getBuildings } = this.props;
    getBuildings(buildings);
  }

  render() {
    const { buildings, loading } = this.props;
    return (
      <div id="liste">
        <BurgerNav />
        {console.log(buildings)};
        <ViewToggler />
        {buildings && (
          <Card.Group>
            {buildings.map((item) => (
              <Card className="card">
                <Image src={item.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{item.nomLieu}</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>{item.adresse}</Card.Description>
                  <div className="panel-builders">
                    <ul>
                      <li>
                        <p className="construction">Renseigné par</p>
                        <p>Philibert</p>
                      </li>
                      <li>
                        <p className="construction">Catégorie</p>
                        <p>
                          {item.category} <a>éditer</a>
                        </p>
                      </li>
                      <li>
                        <p className="construction">Temps de visite estimé</p>
                        <p>
                         {item.tempsVisite} <a>éditer</a>
                        </p>
                      </li>
                      <li>
                        <p className="amenagement">Les saviez-vous?</p>
                        <p>
                          {item.description} <a>éditer</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </Card.Content>
                <Card.Content extra>
                </Card.Content>
              </Card>
            ))}
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
