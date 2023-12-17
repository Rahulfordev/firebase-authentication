import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../context/AuthProvider";
import staticphoto from "../../src/assets/user-photo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  let userName = auth?.currentUser?.displayName;
  let userPhoto = auth?.currentUser?.photoURL;

  return (
    <header>
      <div className="header__container">
        <a href="#" className="header__logo">
          <img
            src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
            alt=""
          />
          <h3 className="header__logo-name">Authentication</h3>
        </a>
        <nav className="nav__links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/wallet">Wallet</NavLink>
          <NavLink to="/register">Sign up</NavLink>

          {user?.email ? (
            <div>
              <div className="nav-users" onClick={() => setIsOpen(!isOpen)}>
                <div className="nav-user__photo">
                  <img
                    className="user__photo"
                    src={userPhoto ? userPhoto : staticphoto}
                    alt=""
                  />
                </div>
                <div className="nav-user__name">
                  <h4 className="user__name">{userName}</h4>
                </div>
              </div>
              {isOpen && (
                <div className="dropdown-container">
                  <ul className="nav-link__details-users rounded-lg">
                    <li className="nav-link__details-user manage-account">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
                      </svg>
                      <NavLink to="./profile">Manage account</NavLink>
                    </li>
                    <li onClick={logOut} className="nav-link__details-user">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path d="M1.19 66.83l20 20a4.002 4.002 0 1 0 5.66-5.66L13.67 68H88a4 4 0 0 0 0-8H13.67l13.18-13.17a4.002 4.002 0 1 0-5.66-5.66l-20 20c-.183.186-.35.387-.5.6 0 0 0 .11-.08.16a3 3 0 0 0-.28.53 2.25 2.25 0 0 0-.08.24 3 3 0 0 0-.15.51 3.94 3.94 0 0 0 0 1.58c.036.174.086.344.15.51.022.081.049.162.08.24.076.182.17.357.28.52 0 .06.05.11.08.16.15.216.317.42.5.61zm31.13 35c20.876 19.722 53.787 18.787 73.509-2.089 14.874-15.743 18.432-39.058 8.931-58.521-10.77-22.12-42-37.41-69.52-24a52 52 0 0 0-12.91 8.93 4.004 4.004 0 0 1-5.49-5.83 60.002 60.002 0 0 1 14.9-10.29C67.26-2.37 106.48 6 122 37.74c14.519 29.787 2.142 65.704-27.645 80.223-22.44 10.938-49.308 6.839-67.465-10.293a4 4 0 0 1 5.48-5.82z"></path>
                      </svg>
                      <p> Sign out</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="./login">Log in</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
