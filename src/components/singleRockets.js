import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../Redux/Rockets/rocketSlice';

const Rocket = (rocket) => {
  const {
    flickrImages, rocketName, description, id, reserved,
  } = rocket;

  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="rocketContainer" id={id}>
      <img className="rocketImage" alt="rocket..." src={flickrImages} />
      <div className="rocketDetails">
        <h2 className="rocketName">{rocketName}</h2>
        <p className="rocketDescription">{description}</p>

        <button
          type="button"
          className="reserveBtn"
          onClick={handleReserve}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rocket;
