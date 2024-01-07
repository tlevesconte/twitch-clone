"use client";

import Link from "next/link";
import { useState } from "react";

import Form from "@/app/_components/Form";
import ModalHeader from "@/app/_components/templates/ModalHeader";

export default function Signup() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <main>
      <Form>
        <ModalHeader title="Join Twitch today" />
        <div className="pt-[20px]">
          <form className="flex flex-col text-xs font-semibold">
            <p className="text-[#adadb8] mb-[20px] font-normal">
              Creating an account allows you to participate in chat, follow your
              favorite channels, and broadcast from your own channel.
            </p>
            <div className="flex flex-col">
              <label className="mb-2">Username</label>
              <input
                className="bg-modalBackgroundColour border-inputBorderColour hover:ring-1 hover:ring-inputBorderColour border rounded focus:outline-none focus:border-inputBorderHighlight focus:ring-4 focus:ring-inputBorderHighlight px-2 py-[6px] font-normal"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                aria-label="Enter your username"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                autoComplete="username"
                required
              />
              {isInputFocused ? (
                <p
                  className={`text-[#adadb8] font-normal mt-2 drop-down-animation`}
                >
                  This is the name people will know you by on Twitch. You can
                  always change it later.
                </p>
              ) : null}
            </div>
            <div className="flex flex-col mt-4">
              <label className="mb-2">Password</label>
              <input
                className="bg-modalBackgroundColour border-inputBorderColour hover:ring-1 hover:ring-inputBorderColour border rounded focus:outline-none focus:border-inputBorderHighlight focus:ring-4 focus:ring-inputBorderHighlight px-2 py-[6px] font-normal"
                aria-label="Enter your password"
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                autoComplete="password"
                spellCheck="false"
                required
              />
            </div>

            <button className="z-10 self-center w-full bg-primaryButtonDefault hover:bg-primaryButtonHover rounded py-[6px] mt-6">
              Sign Up
            </button>
            <Link
              className="z-10 text-center w-full text-twitchPurpleLightest hover:text-white hover:bg-secondaryButtonHover rounded py-[6px] mt-6"
              href="/login"
            >
              Already a Twitch user? Log in
            </Link>
          </form>
        </div>
      </Form>
    </main>
  );
}
