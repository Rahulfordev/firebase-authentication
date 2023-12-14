import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
const Home = () => {
  let userName = auth?.currentUser?.displayName;
  const { user } = useContext(AuthContext);
  console.log("user All Data : " + user);
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
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50"
            >
              Visit Profile
            </button>

            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50"
            >
              Login
            </button>

            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;