/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ForgotPass = () => {
  const { getResetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log(auth?.currentUser?.providerData);

  // sign in handler =======
  const handlerSingin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Check your gmail");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode);
        toast(errorMessage);
      });
  };

  return (
    <div className="section-constainer">
      <div>
        <div>
          <h1>Reset your password</h1>
        </div>
        <form onSubmit={handlerSingin} noValidate="" action="">
          <div>
            <div>
              <label htmlFor="email">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div>
            <button type="submit">Send password reset email</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
