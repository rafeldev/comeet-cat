import React, { Fragment } from 'react';

import DetailName from '../organisms/DetailName';
import DetailInfo from '../organisms/DetailInfo';

import '../../static/sass/SassComponents/AsteroidDetail.scss';

export const DetailsContainer = ({ loading, error, data }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error...</h1>;
  }
  const { getNeo = {} } = data;
  return (
    <Fragment>
      <div className='details-container'>
        <DetailName {...getNeo} />
        <DetailInfo {...getNeo} />
      </div>
    </Fragment>
  );
};
