import { Input } from "@/components/ui/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import google from "../search.png"
import { FiLock } from "react-icons/fi";

import Background from "./Background";
const Register = () => {
  return (
    <div className="h-dvh flex flex-row justify-center items-center text-white">
      <Background />
      <div className=" size-full rounded-xl md:h-[70%] md:w-[450px] p-10 bg-primary shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]">
        <div className="h-[25%] flex flex-col justify-center items-center gap-2 ">
          <div></div>
          <h1 className="font-bold text-4xl">
            Aido <span className="text-[#A755F7]">Tasks</span>{" "}
          </h1>
          <p className="text-[#9CA3AF]">Your intelligent workspace awaits</p>
        </div>
        <div className="h-[50%]  flex flex-col justify-evenly">
          <Input
            icon={<MdOutlineAlternateEmail size={18} color="#9CA3AF" />}
            placeholder="Email address"
          />

          <Input
            icon={<FiLock size={18} color="#9CA3AF" />}
            placeholder="password"
          />
          <Input
            icon={<FiLock size={18} color="#9CA3AF" />}
            placeholder="Confirm password"
          />
          <div className="flex flex-row justify-between text-sm">
            <p>Remember me</p>
            <button className="text-[#A755F7]">Forgot password ?</button>
          </div>
          <button className="w-full h-[50px] flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]">
            Register <FaArrowRight size={16} />
          </button>
        </div>
        <div className="h-[20%] mt-5 flex flex-col  ">
          <div className="w-full flex flex-row  justify-center items-center">
            <div className="h-[1px] w-full bg-[#454444]"></div>
            <div className="text-[#9CA3AF] p-2 text-xs font-medium absolute bg-[#25272b]">
              <p>or continue with</p>
            </div>
          </div>
          <button className="w-full h-[50px] mt-10 flex flex-row justify-center items-center gap-2 font-semibold transition-all duration-300 ease-in-out rounded-md text-center hover:text-[#A755F7] active:shadow-[inset_7px_7px_10px_#1b1c1f,_inset_-5px_-5px_10px_#2f3237] shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]">
            <img src={google} alt="google icon" className="h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
