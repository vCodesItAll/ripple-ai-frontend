"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import authService from "@/services/auth.service";
import { useGlobalState } from "../../context/GlobalState";
import { useRouter } from "next/navigation";
import GetUserService from "@/services/getuser.service";

const Navbar = () => {
  const { state, dispatch } = useGlobalState();
  const [user_id, setUserId] = useState();
  const [user, setUserData] = useState(state.user);

  useEffect(() => {
    let num = 0;
    if (state.user) {
      num = state.user.user_id;
      // console.log(state.user)
    // } else {
    //   // get from local, set the user_id to #
    //   const u = JSON.parse(localStorage.getItem("user"));
    //   num = u.user_id;
    }
    console.log({ user_id, num });
    // if (num == 0) {
    //   // redirect back to login
    //   router.push("/login");
    // } else {
    //   setUserId(num);
    // }
  }, []);
  useEffect(() => {
    if (user_id != 0) {
      const getUser = async () => {
        console.log(state);
        let response = await GetUserService.getUserData(
          user_id,
          state.user.access_token
        );
        // console.log(response);
        setUserData(response.data);
        // dispatch response.data here
        console.log(response.data);
      };
      getUser() // make sure to catch any error
        .catch(console.error);
    }
  }, [user_id]);

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: "LOGOUT_USER" });
    router.push("/");
  };
  const router = useRouter();

  return (
    <nav className="bg-zinc-800 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-5xl font-bold">
          RiPPLE.<span style={{ color: "orange" }}>ai</span>
        </Link>
        {state.user ? <div>{/* {state.user} */}</div> : <></>}
        {/* Navigation Links */}
        <div className="space-x-8">
          <Link href="/stories" className="text-white hover:text-gray-300">
            Stories
          </Link>
          <Link href="/submissions" className="text-white hover:text-gray-300">
            Submissions
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// need to make mobile friendly
// when navbar shrinks:
//  ripple logo needs to shrink slightly and take up top half
//  links need to shrink more and go under logo with space between links
// everything needs to center align
