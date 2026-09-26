import { Input } from "@/components/ui/input";
import Background from "./Background";
const Register = () => {
  return (
    <div className="h-dvh flex flex-row justify-center items-center text-white">
      <Background />
      <div className=" size-full rounded-xl md:h-[70%] md:w-[400px] p-10 bg-primary shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]">
        <div className="h-[30%] flex flex-col justify-center items-center gap-2 ">
          <div></div>
          <h1>Aido</h1>
          <p>Your intelligent workspace awaits</p>
        </div>
        <div className="h-[50%] flex flex-col justify-evenly">
          
            <Input placeholder="Email address" />
          

          <Input placeholder="password" />
          <div className="flex flex-row justify-between">
            <p>Remember me</p>
            <button>Forgot password?</button>
          </div>
          <button className="w-full h-[45px] rounded-md text-center shadow-[10px_10px_10px_#1b1c1f,_-10px_-10px_20px_#2f3237]  ">
            Register
          </button>
        </div>
        <div className="h-[20%]"></div>
      </div>
    </div>
  );
};

export default Register;
