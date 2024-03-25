"use client";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useGlobalState } from "../../context/GlobalState";
import { useRouter } from "next/navigation";
import authService from "../../services/auth.service";
import { jwtDecode } from "jwt-decode";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ParticlesContainer from "../components/particles";
import ZoomedParticlesContainer from "../components/zoomed-particles";

function AIPrompt() {
  const [words, setWords] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { state, dispatch } = useGlobalState();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputValue);
    const data = await axios
      .post(
        "https://8000-tresphill-rippleai2-gwyip31yybf.ws-us106.gitpod.io/api/v1/openai_endpoints/stream?human_input_str=" +
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

    // clears the input field
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <ZoomedParticlesContainer />
      <Navbar />
      <div className="relative flex flex-col min-h-screen max-w-7xl mx-auto text-xl flex-grow items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gradient-to-br from-orange-400 to-transparent rounded-full aspect-w-1 aspect-h-1 p-40 opacity-50 blur-md"></div>
        </div>
        <div className="relative text-white-400 py-5 z-10 justify-center text-center">
          <p>{words}</p>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-inherit border-none outline-none text-center justify-center"
              placeholder="Type here..."
              value={inputValue}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AIPrompt;
