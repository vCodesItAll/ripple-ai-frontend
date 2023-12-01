"use client";

import { useEffect, useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import authService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const { state, dispatch } = useGlobalState();
  const [words, setWords] = useState("");
  const router = useRouter();

  useEffect(() => {
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

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    const data = await axios
      .post(
        "http://127.0.0.1:8000/api/v1/openai/stream?human_input_str=" +
          inputValue,
        {
          human_input_str: inputValue,
        },
        {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      )
      .then((response) => {
        console.log(response.data);
        setWords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto py-5">
      <div className="flex justify-between text-4xl text-yellow-300 italic">
        WELCOME TO RIPPLE AI
        {state.user ? (
          <div className="nav-item">
            <Link href="/" className="" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="nav-item">
            <Link href="/login">Login</Link>
          </div>
        )}
      </div>

      {/* AI OUTPUT */}
      <div className="flex flex-col flex-grow items-center justify-center">
        <p className="text-green-300 py-5">{words}</p>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-black border-none outline-none text-center"
            placeholder="Type here..."
            value={inputValue}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
