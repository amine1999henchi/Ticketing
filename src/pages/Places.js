import "../assets/css/Places.css";
import React, { useState } from "react";
import clsx from "clsx";

const movies = [
  {
    name: "Match",
    price: 120,
    occupied: [20, 21, 30, 1, 2, 8]
  },
];

const seats = Array.from({ length: 10 * 8 }, (_, i) => i);

function shoot() {
  alert(PaymentRequest);
}

export default function Places() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="Mov">
      <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats) =>
          setSelectedSeats(selectedSeats)
        }
      />

      <p className="info">
        Total seats alloted for you is{" "}
        <span className="count">{selectedSeats.length}</span> at a price of{" "}
        <span className="total">
          {"Ether." + selectedSeats.length * selectedMovie.price}
        </span>
        <div>
          <button className="bg" onClick={shoot}>
            <h2>Book Now</h2>
          </button>
        </div>
      </p>
    </div>
  );
}

function Movies({ movie, onChange }) {
  return (
    <div className="Movies">
     
      <h1> Its Match time! </h1>

      <p>
        {" "}
        <label htmlFor="movie">Select your seat!</label>
      </p>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>Not Now</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Vacant</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
}
/*   <img
className="motion poster"
src="https://s3.amazonaws.com/pbblogassets/uploads/2017/07/oz-wicked-witch-poster.gif"
alt="Girl in a jacket"
/>*/