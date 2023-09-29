import InputField from "../components/InputField";
import { BiKey, BiUser } from "react-icons/bi";

const Login = () => {
  return (
    <div className="px-3 py-5 grid items-center justify-items-center min-h-screen">
      <div className="max-w-[700px] w-full bg-white p-4 border border-stroke rounded-md shadow-sm">
        <div className="text-center">
          <h2 className="font-semibold text-3xl text-rich-black">
            Welcome Back &#128075;
          </h2>
          <p className="text-main">Let's do some inspections</p>
        </div>
        <form className="mt-10 grid gap-5 mx-auto max-w-[450px]">
          <InputField type="text" name="email" placeholder="Email" icon={BiUser} />
          <InputField type="password" name="password" placeholder="Password" icon={BiKey} />
        </form>
      </div>
    </div>
  );
};

export default Login;
