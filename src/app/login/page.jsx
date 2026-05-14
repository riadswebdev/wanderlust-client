"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  InputGroup,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSignInError("");
    try {
      const form = new FormData(event.target);
      const formData = Object.fromEntries(form.entries());

      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setSignInError(error.message);
        console.log(error.message);
        toast.error(`${error.message}`);
        return;
      } else {
        toast.success("Login successful");
        event.target.reset();
        router.replace("/");
      }
    } catch (error) {
      setSignInError("Something went wrong");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-5 sm:mx-0">
      <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg w-full max-w-125 mx-auto flex flex-col justify-center">
        <div className="mb-6 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 text-neutral-900 font-medium">
            Login
          </h2>
          <p className="text-[#6C696D] sm:text-base  ">Welcome Back</p>
          <p className="mt-2 text-sm text-danger text-center">{signInError}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-base font-medium text-neutral-800">
              Email address
            </Label>
            <InputGroup className="border border-black/20">
              <InputGroup.Prefix>
                <Icon icon="material-icon-theme:email" className="size-5" />
              </InputGroup.Prefix>
              <InputGroup.Input
                className="text-base text-[#6C696D] "
                type="email"
                placeholder="example@email.com"
              />
            </InputGroup>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (!value) {
                return "Password is required";
              }
              return null;
            }}
          >
            <Label className="text-base font-medium text-neutral-800">
              Password
            </Label>
            <InputGroup className="border border-black/20">
              <InputGroup.Prefix>
                <Icon icon="glyphs-poly:lock" className="size-6" />
              </InputGroup.Prefix>
              <InputGroup.Input
                className="text-base text-[#6C696D] "
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="p-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ?
                    <Eye className="size-4" />
                  : <EyeSlash className="size-4" />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button isDisabled={loading} className="w-full" type="submit">
              {loading ?
                <div className="flex  items-center gap-2">
                  <span className="">Login</span>
                  <Spinner color="default" />
                </div>
              : "Sign In"}
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="my-4 text-base text-[#6C696D] ">Or continue with </p>
          <Button className="w-full " variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <p className="mt-6 text-lg text-[#6C696D] ">
            Don't have an account?
            <Link className="text-blue-600" href="/signup">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
