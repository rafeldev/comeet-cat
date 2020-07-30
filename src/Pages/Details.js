import React, { useState, useEffect } from 'react';

import DetailsTransform from '../Components/organisms/DetailsTransform';

import DetailsWithQuery from '../container/DetailsWithQuery';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_DETAIL_ID = gql`
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

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  const { getNeo = {} } = data;

  return (
    <div>
      <DetailsWithQuery getNeo={getNeo} />
      <DetailsTransform {...getNeo} />
    </div>
  );
};

export const Details = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [detail, setDetail] = useState(false);
  console.log(typeof match.params.id);

  useEffect(() => {
    // setDetail({ detail: location.search.includes('detailId') });

    window.scroll(0, 0);
  }, []);

  return (
    <Query query={GET_DETAIL_ID} variables={{ id }}>
      {renderProp}
    </Query>
  );
};
