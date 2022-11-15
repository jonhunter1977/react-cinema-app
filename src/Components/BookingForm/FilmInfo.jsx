import React from 'react'

export const FilmInfo = (props) => {

const {filmDesc, date, time, location} = props;   

  return (
    <div className="filmDescription">
        <h4>{filmDesc}</h4>
        <p>Location : {location}</p>
        <p>Date : {date}</p>
        <p>Time : {time}</p>
    </div>
  )
}
