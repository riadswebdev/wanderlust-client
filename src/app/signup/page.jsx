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
  Description,
  FieldError,
  InputGroup,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  const router = useRouter();

  const validPassword =
    password && confirmPassword && password === confirmPassword;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSignUpError("");
    try {
      const form = new FormData(event.target);
      const formData = Object.fromEntries(form.entries());
      delete formData.confirmPassword;

      const { error } = await authClient.signUp.email({
        name: formData.name,
        image: formData.image || undefined,
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setSignUpError(error.message);
        toast.error(`${error.message}`);
        return;
      } else {
        toast.success("Account created successfully");
        event.target.reset();
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }
    } catch (error) {
      setSignUpError("Something went wrong");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

 const signInWithGoogle = async () => {
   const data = await authClient.signIn.social({
     provider: "google",
   });
 };

  return (
    <div className="mx-5 sm:mx-0">
      <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-lg w-full max-w-125 mx-auto flex flex-col justify-center">
        <div className="mb-6 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 text-neutral-900 font-medium">
            Create Account
          </h2>
          <p className="text-[#6C696D] sm:text-base  ">
            Start your adventure with Wanderlust
          </p>
          <p className="mt-2 text-sm text-danger text-center">{signUpError}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField isRequired type="text" name="name">
            <Label className="text-base font-medium text-neutral-800">
              Name
            </Label>
            <InputGroup className="border border-black/20">
              <InputGroup.Prefix>
                <Icon icon="glyphs-poly:user" className="size-6" />
              </InputGroup.Prefix>
              <InputGroup.Input
                className="text-base  text-[#6C696D] "
                type="text"
                placeholder="Enter your name"
              />
            </InputGroup>
            <FieldError />
          </TextField>

          <TextField isRequired type="url" name="image">
            <Label className="text-base font-medium text-neutral-800">
              Image URL
            </Label>
            <InputGroup className="border border-black/20">
              <InputGroup.Prefix>
                <Icon icon="glyphs-poly:image" className="size-6" />
              </InputGroup.Prefix>
              <InputGroup.Input
                placeholder="https://i.ibb.com/profile/i.png"
                className="text-base text-[#6C696D] "
              />
            </InputGroup>
            <FieldError />
          </TextField>

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
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
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
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Confirm password */}
          <TextField
            isRequired
            minLength={8}
            name="confirmPassword"
            type="password"
            validate={(value) => {
              if (value !== password) {
                return "Passwords do not match";
              }

              return null;
            }}
          >
            <Label className="text-base font-medium text-neutral-800">
              Confirm Password
            </Label>
            <InputGroup className="border border-black/20 ">
              <InputGroup.Prefix>
                <Icon icon="glyphs-poly:lock" className="size-6" />
              </InputGroup.Prefix>

              <InputGroup.Input
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-base  text-[#6C696D] "
                placeholder="Enter confirm Password"
                type={showConfirmPassword ? "text" : "password"}
              />

              <InputGroup.Suffix className="p-0 ">
                <Button
                  isIconOnly
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  size="sm"
                  variant="ghost"
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ?
                    <Eye className="size-4" />
                  : <EyeSlash className="size-4" />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              {!confirmPassword ?
                ""
              : validPassword ?
                <span className="text-green-600">Passwords match</span>
              : <span className="text-red-500">Passwords do not match</span>}
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              isDisabled={!validPassword || loading}
              className="w-full"
              type="submit"
            >
              {loading ?
                <div className="flex  items-center gap-2">
                  <span className="">Creating</span>
                  <Spinner color="default" />
                </div>
              : "Create Account"}
            </Button>
          </div>
        </form>
        <div className="text-center">
          <p className="my-4 text-lg text-[#6C696D] ">Or sign up with</p>
          <Button
            onPress={signInWithGoogle}
            className="w-full "
            variant="tertiary"
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
          <p className="mt-6 text-lg text-[#6C696D] ">
            Already have an account?
            <Link className="text-blue-600" href="/login">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
