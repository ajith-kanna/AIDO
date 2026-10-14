import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { validateEmail } from "@/components/common/common";
import { Input } from "@/components/common/input";
import Background from "./Background";
import Logo from "../../assets/img/logo.png";

type ForgotPasswordState = {
  email: string;
  emailError: string;
};

const ForgotPassword = () => {
  const [formData, setFormData] = useState<ForgotPasswordState>({
    email: "",
    emailError: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      emailError: "",
    }));
  };

  const handleSubmit = async () => {
    const emailError = validateEmail(formData.email);
    if (emailError) {
      setFormData((prev) => ({ ...prev, emailError }));
      return;
    }

    try {
      setIsSubmitting(true);
      await sendPasswordResetEmail(auth, formData.email);
      setIsSuccess(true);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-dvh flex flex-row justify-center items-center text-white">
      <Background />
      <div className="size-full rounded-xl h-fit md:w-[450px] p-10 bg-primary flex flex-col gap-8 shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="size-20 mb-2">
            <img
              src={Logo}
              alt="logo icon"
              className="size-full object-contain object-center"
            />
          </div>
          <h1 className="font-bold text-3xl">
            Reset <span className="text-[#A755F7]">Password</span>
          </h1>
          <p className="text-[#9CA3AF] text-center text-sm">
            Enter your email to receive password reset instructions
          </p>
        </div>

        {isSuccess ? (
          <div className="flex flex-col gap-6 text-center">
            <div className="p-4 rounded-md bg-[#25272b] border border-[#3b3e44] text-sm text-green-400">
              A password reset link has been sent to{" "}
              <span className="font-semibold text-white">{formData.email}</span>.
              Please check your inbox.
            </div>
            <button
              onClick={() => navigate("/login")}
              className="w-full h-[50px] flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]"
            >
              <FaArrowLeft size={16} /> Back to Login
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Input
                name="email"
                icon={<MdOutlineAlternateEmail size={18} color="#9CA3AF" />}
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                error={formData.emailError}
              />
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full h-[50px] flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237] disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}{" "}
                <FaArrowRight size={16} />
              </button>

              <div className="flex justify-center items-center">
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#A755F7] transition-colors"
                >
                  <FaArrowLeft size={12} /> Back to Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
