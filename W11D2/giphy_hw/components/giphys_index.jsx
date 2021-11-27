import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({giphys}) => {
  return (
    <div className="giphys-index">
      {Object.values(giphys).map((giphy, idx) => (
        <GiphysIndexItem giphy={giphy} key={idx}></GiphysIndexItem>
      ))}
    </div>
  )
}
export default GiphysIndex;