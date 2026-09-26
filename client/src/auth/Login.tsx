import { useState } from "react";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, google } from "./firebase";

const Login = () => {
  const [user, setUser] = useState<unknown>(null);
  const [ep, setEp] = useState({ email: "", password: "" });

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, google);
      console.log(result);

      setUser(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  async function loginWithEmail() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        ep.email,
        ep.password,
      );

      await sendEmailVerification(result.user);
      alert("verification mail sent");
    } catch (error) {
      alert(error.message);
    }
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setEp((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <div className="h-dvh flex justify-center items-center">
      <button
        className="px-2 py-1 rounded-md bg-white border border-blue-500 hover:border-green-500 hover:bg-white/50 hover:cursor-pointer  shadow-md "
        onClick={handleClick}
      >
        Login with Google
      </button>
      <input
        className="border"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <input
        className="border"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <button onClick={loginWithEmail}>Submit</button>
    </div>
  );
};

export default Login;
