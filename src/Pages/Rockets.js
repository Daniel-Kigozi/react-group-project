import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/singleRockets';
import { fetchRockets } from '../Redux/Rockets/rocketSlice';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  const state = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, state]);

  return (
    <div className="allRocketsContainer">
      {rocketList.map((item) => (
        <Rocket
          key={item.id}
          id={item.id}
          flickrImages={item.flickrImages}
          rocketName={item.rocketName}
          description={item.description}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
