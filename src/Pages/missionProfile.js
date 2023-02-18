import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missions)
    .filter((mission) => mission.reserved);

  return (
    <div className="reserve-wrapper">
      <h2>My Missions</h2>
      <div className="reserve-container">
        { missions.length === 0 && <p>You have no reserved missions</p>}
        {missions.map((mission) => (
          <h3 key={mission.mission_id} className="reserve-item">{mission.mission_name}</h3>
        ))}
      </div>
    </div>
  );
};

export default MissionProfile;
