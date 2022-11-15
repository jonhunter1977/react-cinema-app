import filmData from '../../Data/films.json';

import React from 'react'
import { useParams } from 'react-router-dom'
import { FilmImage } from './FilmImage';
import { FilmInfo } from './FilmInfo';
import { BookingSelector } from './BookingSelector';

export const BookingForm = () => {

  const { id, date, time, location } = useParams();

  const requestedFilm = filmData.films.find(film => film.id.toString() === id);

  return (
    <div className="content">
        <h1>You are booking film : {requestedFilm.title}</h1>
        <div className="container-fluid">
          <FilmImage imageSrc={requestedFilm.image} />
          <FilmInfo filmDesc={requestedFilm.synopsis} date={date} time={time} location={location}/>
        </div>
        <div className="container-fluid">
          <BookingSelector />
        </div>
    </div>
  )
}
