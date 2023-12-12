"use client";

import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../../context/GlobalState";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import Navbar from "../components/navbar";
//------------------------------------------------------------------------------------------------------------------------------
function SignUp() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    email: "",
    username: "",
  });
  //------------------------------------------------------------------------------------------------------------------------------
  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  //------------------------------------------------------------------------------------------------------------------------------
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const resp = await AuthService.register(user);

      if (resp.data.access_token) {
        //let data = jwtDecode(resp.access_token);
        let data = jwtDecode(resp.data.access_token, { header: true });
        await dispatch({
          type: "SET_USER",
          payload: data,
        });
        console.log("Login success");
        router.push("/");
      } else {
        console.log("Login failed");
        dispatch({ type: "LOGOUT_USER" });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }
  //------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <Navbar />
      <section className="bg-black-50 dark:bg-black-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div className="w-full bg-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-zinc-800 dark:border-zinc-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleRegister}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg--50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-black-500"
                    placeholder="name@email.com"
                    required
                    onChange={(e) => {
                      let olduser = user;
                      olduser.email = e.target.value;
                      olduser.username = e.target.value;
                      setUser(olduser);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => handleChange("password", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) =>
                      handleChange("passwordConf", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <input
                    type="submit"
                    value="Register!"
                    className=""
                    disabled={
                      user.password &&
                      user.password.length >= 8 &&
                      user.password === user.passwordConf &&
                      user.email
                        ? false
                        : true
                    }
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
