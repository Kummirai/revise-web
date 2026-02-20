"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const SignInUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    setUserStatus(data.success);
    setTimeout(() => {
      setUserStatus("");
    }, 2000);
  };
  return (
    <div className="relative bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Welcome back
      </h2>
      <div
        className={
          userStatus
            ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full text-red-700 p-5 px-2 rounded-full bg-white shadow h-10 border border-red-500"
            : "hidden"
        }
      >
        <p>Account with this email already exists!</p>
      </div>
      <form onSubmit={(e) => SignInUser(e)}>
        <input
          value={email}
          onChange={(e) => handleEmailChange(e)}
          className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          value={password}
          onChange={(e) => handlePasswordChange(e)}
          className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />
        <div className="text-right py-4">
          <a className="text-blue-600 underline" href="#">
            Forgot Password
          </a>
        </div>
        <button
          type="submit"
          className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white"
        >
          Log in
        </button>
      </form>
      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-500 underline">
          Signup
        </Link>
      </p>
      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
          alt="appleLogo"
        />
        Log in with Apple
      </button>
      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
          alt="googleFavicon"
        />
        Log in with Apple
      </button>
    </div>
  );
}

export default Login;
