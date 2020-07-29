import React, { Fragment, useState } from 'react';

import DetailName from '../organisms/DetailName';
import DetailInfo from '../organisms/DetailInfo';
import DetailsTransform from '../organisms/DetailsTransform';
import { OtherAsteroidsWithQuery } from '../../container/OtherAsteroids';

import '../../static/sass/SassComponents/AsteroidDetail.scss';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

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
        const { getNeo = {} } = data;
        debugger;

        return (
          <Fragment>
            <div className='details-container'>
              <DetailName {...getNeo} />
              <DetailInfo {...getNeo} />
            </div>
            <DetailsTransform {...getNeo} />
            <h2 className='h2-prueba'>Otros Asteroides</h2>
            <OtherAsteroidsWithQuery />
          </Fragment>
        );
      }}
    </Query>
  );
};
