import { Input } from "@/components/common/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import googleImg from "../../assets/img/search.png";
import Logo from "../../assets/img/logo.png";
import { FiLock } from "react-icons/fi";
import type { ChangeEvent } from "react";
import Background from "./Background";
import { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  googleSignIn,
  validateEmail,
  validatePassword,
} from "@/components/common/common";
import axios from "axios";
import api from "../common/axiosApi";
import { Navigate, useNavigate } from "react-router-dom";

type FieldData = {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
};

const Login = () => {
  const [userData, setUserData] = useState<FieldData>({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "email" ? { emailError: "" } : {}),
      ...(name === "password" ? { passwordError: "" } : {}),
    }));
  };

  const handleClear = () =>
    setUserData({
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    });

  const handleSend = async () => {
    try {
      const response = await api.post("/login");
      console.log(response);
      if (response.status == 200) {
        alert(response?.data?.message);
        navigate("/");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );
      await handleSend();
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const validateFields = (): boolean => {
    const emailError = validateEmail(userData.email);
    const passwordError = validatePassword(userData.password);
    setUserData((prev) => ({
      ...prev,
      emailError,
      passwordError,
    }));
    return !emailError && !passwordError;
  };

  const navigate = useNavigate();

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
        <div className="flex flex-col gap-4">
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
          <div className="flex flex-row justify-between text-sm">
            <p>Remember me</p>
            <button className="text-[#A755F7]">Forgot password ?</button>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <button
            onClick={handleSubmit}
            className="w-full h-[50px] flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]"
          >
            Login <FaArrowRight size={16} />
          </button>
          <div className="w-full flex mb-4 mt-6 justify-center items-center">
            <div className="h-[1px] w-full bg-[#454444]"></div>
            <div className="text-[#9CA3AF] p-2 text-xs font-medium absolute bg-[#25272b]">
              <p>or continue with</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={googleSignIn}
              className="flex-1 w-full h-12 p-3 flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]"
            >
              <img src={googleImg} alt="google icon" className="h-full" />
            </button>
            <button
              onClick={() => navigate("/register")}
              className="flex-1 w-full h-12 flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
