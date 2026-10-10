import { auth, google } from "@/components/auth/firebase";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import api from "./axiosApi";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

export const validateEmail = (email: string, key = "Email address") => {
  if (!email) return `${key} is required`;
  if (!emailRegex.test(email)) return `${key} is invalid`;
  return "";
};

export const validatePassword = (password: string, key = "Password") => {
  if (!password) return `${key} is required`;
  if (!passwordRegex.test(password)) return `${key}: 6+ chars, Aa1@`;
  return "";
};

const handleSend = async () => {
    try {
      const response = await api.post("/providerLogin")
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

export const googleSignIn = async () => {
  try {
    const response = await signInWithPopup(auth, google);
    await handleSend()
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
};
