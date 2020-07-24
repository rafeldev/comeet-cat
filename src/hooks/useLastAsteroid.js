import React from 'react';

export const useLastAsteroid = (getNeos) => {
    return(
        let arrayNeo = getNeos.slice(0, 3).map((neo) => {
          const id = Math.round(Math.random() * ImgData.length);
          neo.sourceimg = ImgData[id];
      
          return neo;
        });
      
        return arrayNeo;

    )
};
