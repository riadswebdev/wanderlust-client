"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  InputGroup,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";
import { handleCreateAccForm } from "../lib/action";
import RoundedLoading from "@/components/Loading";
const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if the password and confirm password fields match
  const validPassword =
    password && confirmPassword && password === confirmPassword;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    delete formData.confirmPassword;
    console.log(formData);
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-150 mx-auto ">
      <div className="mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 text-neutral-900">
          Create Account
        </h2>
        <p className="text-[#6C696D] text-base sm:text-lg ">
          Start your adventure with Wanderlust
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField isRequired type="text" name="name">
          <Label className="text-lg font-medium text-neutral-800">Name</Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Icon icon="glyphs-poly:user" className="size-6" />
            </InputGroup.Prefix>
            <InputGroup.Input
              className="text-base  text-[#6C696D] "
              type="text"
              placeholder="Enter your name"
            />
          </InputGroup>
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
          <Label className="text-lg font-medium text-neutral-800">
            Email address
          </Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Icon icon="material-icon-theme:email" className="size-5" />
            </InputGroup.Prefix>
            <InputGroup.Input
              className="text-base text-[#6C696D] "
              type="email"
              placeholder="name@email.com"
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
          <Label className="text-lg font-medium text-neutral-800">
            Password
          </Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Icon icon="glyphs-poly:lock" className="size-6" />
            </InputGroup.Prefix>
            <InputGroup.Input
              onChange={(e) => setPassword(e.target.value)}
              className="text-base text-[#6C696D] "
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
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
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
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
          <Label className="text-lg font-medium text-neutral-800">
            Confirm Password
          </Label>
          <InputGroup>
            <InputGroup.Prefix>
              <Icon icon="glyphs-poly:lock" className="size-6" />
            </InputGroup.Prefix>
            <InputGroup.Input
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-base  text-[#6C696D] "
              placeholder="Enter confirm Password"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
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
          <Description>
            {!confirmPassword ?
              "Must be at least 8 characters with 1 uppercase and 1 number"
            : validPassword ?
              "Passwords match"
            : "Passwords do not match"}
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button isDisabled={!validPassword} className="w-full" type="submit">
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
        <p className="my-4 text-lg text-[#6C696D] ">Or sign up </p>
        <Button className="w-full " variant="tertiary">
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
  );
};

export default SignUpPage;
