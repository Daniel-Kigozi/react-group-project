import logo from '../images/logo.png.png';

const Navigation = () => (
  <nav className="navigation">
    <div className="logoDiv">
      <img src={logo} alt="logo..." className="logoImage" />
      <h2 className="logoText"> Space Travelers Hub</h2>
    </div>
    <ul className="NavUl">
      <li className="navList"> Rockets</li>
      <li className="navList">Missions</li>
      <li className="navList">|   My Profile</li>
    </ul>
  </nav>
);

export default Navigation;
