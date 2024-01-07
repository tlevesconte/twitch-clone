"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-headerBackgroundColour h-[50px] w-full sticky">
      <nav className="flex flex-row justify-between items-center">
        {/* Left */}
        <div className="flex flex-row items-center h-full">
          {/* Home */}
          <Link href="/" aria-label="Twitch Home">
            <div className="px-[12.5px] py-[7.5px]">
              {/* <Image
                className="min-w-[35px] min-h-[35px]"
                src="/twitch-home-icon.png"
                width={35}
                height={35}
                quality={100}
                alt="Twitch Home"
              /> */}
              <svg width="24" height="28" viewBox="0 0 24 28">
                <g fill-rule="evenodd">
                  <path
                    fill="#a970ff"
                    d="M19 6v6h-2V6h2zm-7 0h2v6h-2V6zM5 0 0 5v18h6v5l5-5h4l9-9V0H5zm17 13-4 4h-4l-4 4v-4H6V2h16v11z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="m18 17 4-4V2H6v15h4v4l4-4h4zM12 6h2v6h-2V6zm7 0h-2v6h2V6z"
                  ></path>
                </g>
              </svg>
            </div>
          </Link>
          {/* Browse */}
          <div className="flex items-center pl-3 pr-2 sm:pl-6 sm:pr-4 h-full">
            <Link
              className={`font-semibold text-[1rem] leading-[50px] h-[50px] ${
                pathname === "/categories"
                  ? "border-b-2 border-twitchPurpleLighter text-twitchPurpleLighter"
                  : "hover:text-twitchPurpleLighter"
              }`}
              href="/categories"
            >
              Browse
            </Link>
          </div>
          {/* More */}
          <button
            className="px-2.5 py-2 rounded hover:bg-secondaryButtonHover"
            aria-label="More"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M10 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
                fill="#efeff1"
              ></path>
            </svg>
          </button>
        </div>

        {/* Middle */}
        <div className="hidden lg:block">
          <p>Search placeholder</p>
        </div>

        {/* Right */}
        <div className="flex text-sm font-semibold gap-3 px-[12.5px]">
          {/* Log In */}
          <Link
            className="whitespace-nowrap rounded bg-secondaryButtonDefault hover:bg-secondaryButtonHover px-2.5 py-1.5"
            href="/login"
          >
            Log In
          </Link>
          {/* Sign Up */}
          <Link
            className="whitespace-nowrap rounded bg-primaryButtonDefault hover:bg-primaryButtonHover px-2.5 py-1.5"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
