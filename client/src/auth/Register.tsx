import { Input } from "@/components/ui/input";
const Register = () => {
  return (
    <div className="h-dvh flex flex-row justify-center items-center">
      <div className="h-[80%] w-[40%] p-[20px] border">
        <div className="h-[30%] flex flex-col justify-center items-center gap-2 ">
          <div></div>
          <h1>Aido</h1>
          <p>Your intelligent workspace awaits</p>
        </div>
        <div className="h-[50%] flex flex-col justify-evenly">
          <Input />
          <Input />
          <div className="flex flex-row justify-between">
            <p>Remember me</p>
            <button>Forgot password?</button>
          </div>
          <button>Register</button>
        </div>
        <div className="h-[20%]"></div>
      </div>
    </div>
  );
};

export default Register;
