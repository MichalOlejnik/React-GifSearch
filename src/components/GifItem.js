import React from 'react';

//  The GifItem component receives an onClick event anywhere in its main <div>
//  It passes its gif prop as an argument into its onGifSelect prop

const GifItem = ({gif, onGifSelect}) => {                     
    return (
      <div className="gif-item" onClick={() => onGifSelect(gif)}>  
        <img src={gif.images.downsized.url} alt=""/>
      </div>
    )
  };

export default GifItem;