import React, { Fragment } from "react";

import DetailName from "../organisms/DetailName";
import DetailInfo from "../organisms/DetailInfo";
import DataTransformInfo from "./DataTransformInfo";
import { OtherAsteroidsWithQuery } from "../../container/OtherAsteroids";

import "../../static/sass/SassComponents/AsteroidDetail.scss";
import "../../static/sass/SassComponents/DataTransformContainer.scss";

import diametro from "../../img/diametro.png";
import distancia from "../../img/distancia.png";
import orbita from "../../img/orbita.png";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";


const query = gql`
  query($id: ID!) {
    getNeo(id: $id) {
      _id
      neo_reference_id
      name
      estimated_diameter {
        kilometers {
          estimated_diameter_max
        }
      }
      is_potentially_hazardous_asteroid
      close_approach_data {
        close_approach_date
        miss_distance {
          kilometers
        }
      }
      orbital_data {
        orbital_period
      }
    }
  }
`;

export const DetailsContainer = ({ id }) => {


  return (
    <Query query={query} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        console.log(data);
        const { getNeo = {} } = data;

        return (
          <Fragment>
            <div className="details-container">
              <DetailName {...getNeo} />
              <DetailInfo {...getNeo} />
            </div>

            <div className="Data__container">
              <div className="Data__text">
                <DataTransformInfo
                  question="¿Qué tan grande es?"
                  description="El tamaño de un transbordador espacial de 56m"
                  info="Su diametro es de"
                  {...getNeo.estimated_diameter?.kilometers
                    ?.estimated_diameter_max}
                />
              </div>
              <img src={diametro} alt="Illustaración de Comparación" />
            </div>

            <div className="Data__container--Reverse">
              <div className="Data__text">
                <DataTransformInfo
                  question="¿Cuánto tarda en dar una vuelta al sol?"
                  newData="16"
                  description="Más que la tierra con sus 365 días."
                  info="Su periodo orbital es de "
                  dataValue="25546211"
                />
              </div>
              <img src={orbita} alt="Illustaración de Comparación" />
            </div>

            <div className="Data__container">
              <div className="Data__text">
                <DataTransformInfo
                  question="¿Qué tan lejos está de la tierra?"
                  newData="67"
                  description="La distancia de la tierra a la luna, son 384,400 kms  "
                  info="La distancia es de "
                  dataValue="25546211"
                />
              </div>
              <img src={distancia} alt="Illustaración de Comparación" />
            </div>
            <h2 className="h2-prueba">Otros Asteroides</h2>
            <OtherAsteroidsWithQuery />
          </Fragment>
        );
      }}
    </Query>
  );
};
