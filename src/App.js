import './Assets/CSS/index.css';
import './Assets/CSS/FilmCss.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { BookingForm } from './Components/BookingForm/BookingForm';
import { Home } from './Components/Home/Home';

function App() {

  const bookingDate = "15-11-2022";
  const bookingTime = "19:35";
  const bookingLocation = "Chester";

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Film Booking</h1>
          <Link to="/">Home</Link>
          <Link to={`/book/1/${bookingDate}/${bookingTime}/${bookingLocation}`}>Book Film 1</Link>
          <Link to={`/book/2/${bookingDate}/${bookingTime}/${bookingLocation}`}>Book Film 2</Link>
          <Link to={`/book/3/${bookingDate}/${bookingTime}/${bookingLocation}`}>Book Film 3</Link>
        </nav>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id/:date/:time/:location" element={<BookingForm />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
