import { FormEventHandler, useState } from "react";
import ButtonPrimary from "../components/ButtonPrimay";
import InputField from "../components/InputField";
import { BiKey, BiUser } from "react-icons/bi";

const Login = () => {
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  } | null>(null);

  const handleLoginSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const formValues = {
      email: formData.get("email")?.toString().trim() || "",
      password: formData.get("password")?.toString().trim() || "",
    };

    if (!/^[a-z0-9._]+@[a-z0-9]+\.[a-z]+$/.test(formValues.email)) {
      setFormErrors({ email: "Please provide a valid email" });
      return;
    }

    if (formValues.password.length < 4) {
      setFormErrors({ password: "Please provide password" });
      return;
    }

    setFormErrors(null);

    console.log(formValues);
  };

  return (
    <div className="px-3 py-5 grid items-center justify-items-center min-h-screen">
      <div className="max-w-[700px] w-full bg-white px-4 py-8 border border-stroke rounded-md shadow-sm">
        <div className="text-center">
          <h2 className="font-semibold text-3xl text-rich-black">
            Welcome Back &#128075;
          </h2>
          <p className="text-main">Let's do some inspections</p>
        </div>
        <form
          className="mt-10 grid gap-5 mx-auto max-w-[450px]"
          onSubmit={handleLoginSubmit}
        >
          <InputField
            type="text"
            name="email"
            placeholder="Email"
            icon={BiUser}
            required
            inputError={formErrors?.email}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            icon={BiKey}
            required
            inputError={formErrors?.password}
          />
          <ButtonPrimary type="submit">Login Now</ButtonPrimary>
        </form>
        <p className="text-center mt-5 cursor-pointer underline text-blue-600">
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
