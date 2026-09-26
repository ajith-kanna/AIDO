import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, google } from "./firebase";

const Login = () => {
  const [user, setUser] = useState<unknown>(null);

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, google);
      console.log(result);

      setUser(result);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="h-dvh flex justify-center items-center">
      <button
        className="px-2 py-1 rounded-md bg-white border border-blue-500 hover:border-green-500 hover:bg-white/50 hover:cursor-pointer  shadow-md "
        onClick={handleClick}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
