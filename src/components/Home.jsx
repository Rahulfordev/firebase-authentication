import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home = () => {
  let userName = auth?.currentUser?.displayName;
  const bColor = "#fff";
  // const { user } = useContext(AuthContext);
  return (
    <section>
      <div className="section-constainer">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
            Welcome To {userName}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Here, an user can authenticate using google or create an account
            using email password and <br /> Google, Github, Facebook, Microsoft.
            Powered by Firebase!
          </p>
          <div className="flex flex-wrap justify-center">
            <Stack spacing={2} direction="row">
              <Button variant="contained">
                <NavLink to="/profile">Visit Profile</NavLink>
              </Button>
              <Button variant="contained">
                <NavLink to="/login">Login</NavLink>
              </Button>
              <Button color="bColor" variant="contained">
                <NavLink to="/register">Register</NavLink>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
