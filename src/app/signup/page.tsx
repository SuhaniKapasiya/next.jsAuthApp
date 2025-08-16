"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


import axios from "axios";



export default function SignupPage()  {

 
    const [user, setUser] = React.useState({
      email: "",
      password: "",
      username: "",
    });


  const onSignup = async()=>{

  }

  return (
    <div className="flex items-center flex-col justify-center min-h-screen p-8 text-4xl">
      <h1 className="mb-1">Signup</h1>
      
      <div className="flex flex-col items-center justify-center space-y-4 border p-8 rounded-lg border-amber-400">

        <label className="text-lg">userName</label>
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="border p-1 rounded"
          
          />

        <label className="text-lg">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e)=>setUser({...user,email:e.target.value})}
          className="border p-1 rounded"
          
        />


        <label className="text-lg">Password</label>
        <input  
          type="password"
          value={user.password}
          onChange={(e)=>setUser({...user,password:e.target.value})}
           className="border p-1 rounded"
        
        />

        <button
          onClick={onSignup}
          className="bg-amber-400 text-white  rounded-2xl p-4 text-sm cursor-pointer" > SignUp here</button>

      </div>

      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
        
        </p>

    </div>
  );
}
