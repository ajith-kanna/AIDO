import { auth, google } from "@/auth/firebase";
import { signInWithPopup } from "firebase/auth";

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/

export const validateEmail = (email: string,key = "Email address") => {
  if (!email) return `${key} is required`;
  if (!emailRegex.test(email)) return `${key} is invalid`;
  return "";
};

export const validatePassword = (password: string,key = "Password") => {
  if (!password) return `${key} is required`;
  if (!passwordRegex.test(password)) return `${key}: 6+ chars, Aa1@`;
  return "";
};

export const googleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, google)
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  }