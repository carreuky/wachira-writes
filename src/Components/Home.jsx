import React from "react";
import derro from "../images/mwenyewe-r.png";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function Home() {
  const myStyle = {
    marginTop: "-130px",
  };
   const icon= <FaCheckCircle
   style={{
     fontSize: "30px",
     color: "yellow",
     marginRight: "10px",
     marginTop:'4px'
   }}
 />

  return (
    <div>
      <div className=" bg-gray-900 flex flex-wrap text-center sm:text-left items-center">
        <div className="pl-24">
          <h1 className=" text-6xl font-headline tracking-tight font-extrabold text-white leading-snug sm:leading-normal">
            MUTATHI WACHIRA.
          </h1>
          <p className=" text-3xl text-amber-400 flex">{icon}Public Speaker </p>
          <p className="text-3xl text-amber-400 flex">{icon} Author</p>
          <p className="text-3xl text-amber-400 flex">{icon} Speech writer</p>
          <p className="lg:w-1/2 text-gray-600 lg:text-lg sm:text-base">
            {/* Give something to right i add hapa nimekosa kitu ama nime idea. */}
          </p>
          <div className="mt-12">
            {" "}
            <NavLink to="/about">
              <a
                href="#_"
                class="px-10 py-4 mt-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-amber-600 hover:to-pink-600 ease bg-gradient-to-br from-yellow-500 to-pink-500 md:w-auto"
              >
                Learn More
              </a>
            </NavLink>
          </div>
        </div>
        <div className="mr-40 sm:mr-0  sm:ml-16 sm:px-48 lg:px-0 w-auto">
          <img
            className="sm:w-full object-cover  lg:w-96 rounded-md transform transition"
            src={derro}
            alt="Image of plants"
          />
        </div>
      </div>
    </div>
  );
}
