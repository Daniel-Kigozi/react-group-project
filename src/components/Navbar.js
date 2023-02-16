import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png.png';

const Navigation = () => (
  <nav className="navigation">
    <div className="logoDiv">
      <img src={logo} alt="logo..." className="logoImage" />
      <h2 className="logoText"> Space Travelers Hub</h2>
    </div>
    <ul className="NavUl">
      <li className="navList">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : 'deActive')}
        />
      </li>
      <li className="navList">
        <NavLink
          to="/rockets"
          className={({ isActive }) => (isActive ? 'active' : 'deActive')}
        >
          Rockets
        </NavLink>
      </li>

      <li className="navList">
        <NavLink
          to="/missions"
          end
          className={({ isActive }) => (isActive ? 'active' : 'deActive')}
        >
          Missions
        </NavLink>
      </li>
      <li className="navList">
        <NavLink
          to="/my-profile"
          className={({ isActive }) => (isActive ? 'active' : 'deActive')}
        >
          | My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
