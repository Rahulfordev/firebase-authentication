import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  let userName = auth?.currentUser?.displayName;
  let userPhoto = auth?.currentUser?.photoURL;
  return (
    <header>
      <div className="header__container">
        <a href="#" className="header__logo">
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span>AuthenTech</span>
        </a>
        <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="./profile">Profile</NavLink>
          <NavLink to="./wallet">Wallet</NavLink>

          {user?.email ? (
            // <button onClick={logOut}>
            //   Logout
            //   <svg
            //     fill="none"
            //     stroke="currentColor"
            //     strokeLinecap="round"
            //     strokeLinejoin="round"
            //     strokeWidth="2"
            //     viewBox="0 0 24 24"
            //   >
            //     <path d="M5 12h14M12 5l7 7-7 7"></path>
            //   </svg>
            // </button>
            
            <div className="nav-users">
              <div className="nav-user__photo">
                <img className="user__photo" src={userPhoto} alt="" />
              </div>
              <div className="nav-user__name">
                <h4 className="user__name">{userName}</h4>
              </div>
            </div>
          ) : (
            <NavLink to="./login">Login</NavLink>
          )}

          {/* <button
            onClick={logOut}
            className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
