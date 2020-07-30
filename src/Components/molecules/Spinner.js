import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = ({ type, color }) => (
  <ReactLoading type={'spokes'} color={'#fff'} height={70} width={70} />
);

export default Spinner;
