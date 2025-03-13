import getStarted from '../assets/getStarted.svg'
import googlePlay from '../assets/googlePay.svg';
import appStore from '../assets/appStore.svg';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-download">
        <div className="app-preview">
          <img src={getStarted} alt="App Preview" className="app-preview-image" />
        </div>
        <div className="app-info">
          <h2>Download our app now</h2>
          <p>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
          <div className="store-buttons">
            <a href="#" className="store-link">
              <img src={googlePlay} alt="Get it on Google Play" />
            </a>
            <a href="#" className="store-link">
              <img src={appStore} alt="Download on App Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © Copyright 2024, Bhive Private Limited
      </div>
    </footer>
  );
};

export default Footer; 