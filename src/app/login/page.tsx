"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  
  });

  const onLogin = async () => {};

  return (
    <div className="flex items-center flex-col justify-center min-h-screen p-8 text-4xl">
      <h1 className="mb-1">Login</h1>

      <div className="flex flex-col items-center justify-center space-y-4 border p-8 rounded-lg border-amber-400">
        <label className="text-lg">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border p-1 rounded"
        />

        <label className="text-lg">Password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="border p-1 rounded"
        />

        <button
          onClick={onLogin}
          className="bg-amber-400 text-white  rounded-2xl p-4  px-10 text-sm cursor-pointer"
        >
          {" "}
          Login
        </button>
      </div>

      <div className="mt-4">
        <p className="text-sm">
         Do not have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>

      <div className="mt-4">
        <p className="text-sm">
          Forgot your password?{" "}
          <Link href="/reset-password" className="text-blue-500 hover:underline">
            Reset it here
          </Link>
        </p>
        </div>

    </div>
  );
}
