import React from 'react';

const GiphysIndexItem = ({giphy}) => {
  console.log(giphy);
  return (
    <div className='giphys-index-item'>
      <img src={giphy.images.downsized.url} alt=""/>
    </div>
  )
}
export default GiphysIndexItem;