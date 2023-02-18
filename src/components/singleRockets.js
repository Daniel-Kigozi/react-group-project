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
      <img className="rocketImage" alt="rocket...." src={flickrImages} />
      <div className="rocketDetails">
        <h2 className="rocketName">{rocketName}</h2>
        <p className="rocketDescription">
          <span
            className={reserved ? 'show' : 'hide'}
          >
            Reserved
          </span>
          {description}
        </p>

        <button
          type="button"
          onClick={handleReserve}
          className={reserved ? 'cancelReserved' : 'reserveBtn'}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rocket;
