"use client";

import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import authService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const { state, dispatch } = useGlobalState();
  const [words, setWords] = useState("");

  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8000/api/v1/openai/stream?human_input_str=start%20the%20adventure"
      )
      .then((response) => {
        console.log(response.data);
        setWords(response.data);
        // dispatch(response.data);
        console.log(state);
      })
      .catch((error) => {
        console.log(error);
      });

    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = jwtDecode(userData);
        console.log("User data:", user);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      }
    };
    getUserFromLocalStorage();
  }, []);

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: "LOGOUT_USER" });
    router.push("/");
  };

  return (
    <div className="flex flex-col text-red-500 min-h-screen">
      <div className="text-4xl text-yellow-300 italic">
        WELCOME TO RIPPLE AI
      </div>

      <div className="flex flex-col flex-grow items-center justify-center">
        <p className="text-green-300 py-5">{words}</p>
        <input
          className="bg-black border-none"
          placeholder="Type here..."
        ></input>
      </div>

      {state.user ? (
        <li className="nav-item">
          <Link href="/" className="" onClick={handleLogout}>
            Logout
          </Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link href="/login">Login</Link>
        </li>
      )}
    </div>
  );
}
