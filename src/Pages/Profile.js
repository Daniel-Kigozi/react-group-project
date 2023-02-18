import { useSelector } from 'react-redux';

const Profile = () => {
  const rocketList = useSelector((state) => state.rockets);
  const reservedRocket = rocketList.filter((rocket) => rocket.reserved === true);
  return (
    <div className="rocketListDiv">
      <h1 className="myRocketsHeader">My Rockets</h1>
      <ul className="rocketListContainer">
        {reservedRocket.map((list) => (
          <li className="rocketList" key={list.id}>
            {list.rocketName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Profile;
