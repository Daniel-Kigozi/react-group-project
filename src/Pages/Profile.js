import { useSelector } from 'react-redux';
import MissionProfile from './missionProfile';

const Profile = () => {
  const { rocketlist } = useSelector((state) => state.rockets);
  const reservedRocket = rocketlist.filter((rocket) => rocket.reserved === true);
  return (
    <div className="rocketListDiv">
      <span className="profile-view">
        <MissionProfile />
      </span>
      <span className="profile-view">
        <h1 className="myRocketsHeader">My Rockets</h1>
        <ul className="rocketListContainer">
          {reservedRocket.map((list) => (
            <li className="rocketList" key={list.id}>
              {list.rocketName}
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};
export default Profile;
