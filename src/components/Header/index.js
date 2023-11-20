// Write your code here
import {Link, withRouter} from 'react-router-dom'
import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <nav className="nav-bar-cont">
    <Link to="/">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="menu-icon"
          label="menu"
        >
          <GiHamburgerMenu className="menu" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            className="trigger-button"
            label="close"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <div className="menu-expand">
            <ul className="content-cont">
              <li>
                <Link to="/" onClick={() => close()} className="items-cont">
                  <AiFillHome className="img-icon" />
                  <h1 className="menu-item">Home</h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="items-cont"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill className="img-icon" />
                  <h1 className="menu-item">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </Popup>
  </nav>
)
export default withRouter(Header)
