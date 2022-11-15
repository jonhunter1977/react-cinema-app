import React from 'react'

export const FilmImage = (props) => {

    const {imageSrc} = props;

  return (
    <div className="filmLogo">
        <img 
            className="filmLogoImage"
            src={process.env.PUBLIC_URL + `/FilmLogos/${imageSrc}`} 
            alt="Film Logo">
        </img>
    </div>
  )
}
