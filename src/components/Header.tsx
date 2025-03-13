
import logo from '../assets/bhiveWorkSpace.svg';
import callImage from "../assets/callImage.svg"
const Header = () => {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <img src={logo} alt="BHIVE Workspace" className="logo" />
          <img className="phone-link-img" src={callImage}></img>
      </div>
    </nav>
  );
};

export default Header; 