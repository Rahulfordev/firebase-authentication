import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import staticphoto from "../../src/assets/user-photo.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  let userName = auth?.currentUser?.displayName;
  let userPhoto = auth?.currentUser?.photoURL;
  let userEmail = auth?.currentUser?.email;
  let userEmailVerifi = auth?.currentUser?.emailVerified;
  return (
    <div className="section-constainer">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <span className=""></span>
                <img
                  src={userPhoto ? userPhoto : staticphoto}
                  referrerPolicy="no-referrer"
                  alt="Not show photo"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div className="name-container">
            <p>Name</p>
            <p>{userName ? userName : "Name Not Available"}</p>
          </div>
          <div className="email-container">
            <p>Email address </p>
            <span>
              <span className="user-email">{userEmail}</span>
              {userEmailVerifi ? (
                <span className="verified">Verified</span>
              ) : (
                <span className="unverified">Unverified</span>
              )}
            </span>
          </div>
          <div>
            <span className="flex items-center space-x-2 w-full">
              <span className="text-gray-400 text-small w-full">
                ID: {user?.uid}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
