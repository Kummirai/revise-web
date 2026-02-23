import React from "react";
import Link from "next/link";
import { stackServerApp } from "@/stack/server";

export default async function Hero() {
  const user = await stackServerApp.getUser();
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("User is not signed in");
  }

  return (
    <section className="flex flex-col items-center bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBg.svg')] bg-cover text-gray-800 pb-16 text-sm">
      <div className="flex flex-wrap items-center justify-center p-1.5 mt-32 rounded-full border border-indigo-100 text-xs">
        <div className="flex items-center">
          <img
            className="size-7 rounded-full border-3 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="userImage1"
          />
          <img
            className="size-7 rounded-full border-3 border-white -translate-x-2"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="userImage2"
          />
          <img
            className="size-7 rounded-full border-3 border-white -translate-x-4"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt="userImage3"
          />
        </div>
        <p className="-translate-x-2">Join community of 1m+ founders </p>
      </div>

      <h1 className="text-4xl md:text-6xl text-center font-medium max-w-3xl mt-5 bg-linear-to-r from-black to-[#748298] text-transparent bg-clip-text">
        Build. Launch. Scale. Without the complexity.
      </h1>
      <p className="text-slate-600 md:text-base max-md:px-2 text-center max-w-xl mt-3">
        A high-performance, serverless Postgres database that helps you ship
        fast and scale without limits.
      </p>
      <Link href={user ? "/practice_exercises" : "/login"}>
        {" "}
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 mt-8 rounded-full transition cursor-pointer">
          {user ? (
            <span>Continue with your studies</span>
          ) : (
            <span>get started for free</span>
          )}

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>

      <div className="bg-linear-to-t from-indigo-500/40 to-slate-200 p-px rounded-md mt-8">
        <div className="flex items-center gap-4 bg-white rounded-md px-4 py-3">
          $ <span id="copy-text">npx prisma@latest init --db</span>
          <button id="copy-button">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.498 5.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V7a1.5 1.5 0 0 0-1.5-1.5"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 11.5c-.825 0-1.5-.675-1.5-1.5V2.5C1 1.675 1.675 1 2.5 1H10c.825 0 1.5.675 1.5 1.5"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-16">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-[#f5f7ff] to-transparent"></div>

        <div className="marquee-inner flex will-change-transform min-w-[200%]">
          <div className="flex py-4" id="logo-container"></div>
        </div>

        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-[#efe9f4] to-transparent"></div>
      </div>
    </section>
  );
}
