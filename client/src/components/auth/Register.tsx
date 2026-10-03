import { Input } from "@/components/common/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import type { ChangeEvent } from "react";
import Background from "./Background";
import { useState } from "react";
import Logo from "../../assets/img/logo.png";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {
  googleSignIn,
  validateEmail,
  validatePassword,
} from "@/components/common/common";
import googleImg from "../../assets/img/search.png";
import axios from "axios";
type USER = {
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
};

const Register = () => {
  const [userData, setUserData] = useState<USER>({
    email: "",
    password: "",
    confirmPassword: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "email" ? { emailError: "" } : {}),
      ...(name === "password" ? { passwordError: "" } : {}),
      ...(name === "confirmPassword" ? { confirmPasswordError: "" } : {}),
    }));
  };

  const handleSend = async (token) => {
    try {
      const response = await axios.post("http://localhost:4000/register", {},{
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );
      if (response) {
        await sendEmailVerification(response?.user);
      }
      console.log(response);
      const token = await response.user.getIdToken();
      await handleSend(token);
    } catch (error: any) {
      alert(error?.message);
    }
  };

  const validateFields = (): boolean => {
    const emailError = validateEmail(userData.email);
    const passwordError = validatePassword(userData.password);
    const confirmPasswordError = validatePassword(
      userData.confirmPassword,
      "Confirm password",
    );

    setUserData((prev) => ({
      ...prev,
      emailError,
      passwordError,
      confirmPasswordError,
    }));

    return !emailError && !passwordError && !confirmPasswordError;
  };

  return (
    <div className="h-dvh flex flex-row justify-center items-center text-white">
      <Background />
      <div className=" size-full rounded-xl h-fit md:w-[450px] p-10 bg-primary flex flex-col gap-10 shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <div className="size-20 mb-2">
            <img
              src={Logo}
              alt="logo icon"
              className="size-full object-contain object-center"
            />
          </div>
          <h1 className="font-bold text-4xl">
            Aido <span className="text-[#A755F7]">Tasks</span>{" "}
          </h1>
          <p className="text-[#9CA3AF]">Your intelligent workspace awaits</p>
        </div>
        <div className="flex flex-col gap-6">
          <Input
            name="email"
            icon={<MdOutlineAlternateEmail size={18} color="#9CA3AF" />}
            placeholder="Email address"
            onChange={handleChange}
            error={userData?.emailError}
          />
          <Input
            name="password"
            type="password"
            icon={<FiLock size={18} color="#9CA3AF" />}
            placeholder="password"
            onChange={handleChange}
            error={userData?.passwordError}
          />
          <Input
            name="confirmPassword"
            type="password"
            icon={<FiLock size={18} color="#9CA3AF" />}
            placeholder="Confirm password"
            onChange={handleChange}
            error={userData?.confirmPasswordError}
          />
        </div>
        <div className="flex flex-col gap-6">
          <button
            onClick={handleSubmit}
            className="w-full h-12 flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]"
          >
            Register <FaArrowRight size={16} />
          </button>
          <div className="w-full flex mb-4 mt-6 justify-center items-center">
            <div className="h-[1px] w-full bg-[#454444]"></div>
            <div className="text-[#9CA3AF] p-2 text-xs font-medium absolute bg-[#25272b]">
              <p>or continue with</p>
            </div>
          </div>
          <button
            onClick={() => googleSignIn(handleSend)}
            className="w-full h-12 p-3 flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]"
          >
            <img src={googleImg} alt="google icon" className="h-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
