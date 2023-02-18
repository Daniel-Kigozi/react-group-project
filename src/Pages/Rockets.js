import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/singleRockets';

const Rockets = () => {
  const [rocketItem, setRocketItem] = useState([]);
  const { rocketlist } = useSelector((state) => state.rockets);

  useEffect(() => {
    setRocketItem(rocketlist);
  }, [rocketlist, rocketItem]);

  return (
    <div className="allRocketsContainer">
      {rocketItem.map((item) => (
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
