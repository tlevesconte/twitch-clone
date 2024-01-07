"use client";

import Link from "next/link";

import Modal from "@/app/_components/Modal";
import ModalHeader from "@/app/_components/templates/ModalHeader";

export default function LoginModal() {
  return (
    <Modal>
      <ModalHeader title="Log in to Twitch"/>
      <div className="mt-6 text-xs font-extrabold">
        <form className="flex flex-col mb-3">
          <div className="flex flex-col">
            <label className="mb-2 text-sm">Username</label>
            <input
              className="bg-modalBackgroundColour border-inputBorderColour hover:ring-1 hover:ring-inputBorderColour border rounded focus:outline-none focus:border-inputBorderHighlight focus:ring-4 focus:ring-inputBorderHighlight px-2 py-[6px] font-normal"
              aria-label="Enter your username"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="username"
              required
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="mb-2 text-sm">Password</label>
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
            <Link
              className="mt-3 font-normal hover:underline text-twitchPurpleLightest hover:text-twitchPurpleLighter"
              href="/"
            >
              Trouble logging in?
            </Link>
          </div>
          <button className="z-10 self-center w-full bg-primaryButtonDefault hover:bg-primaryButtonHover rounded py-[6px] mt-6">
            Log In
          </button>
          <Link
            className="z-10 text-center w-full text-twitchPurpleLightest hover:text-white hover:bg-secondaryButtonHover rounded py-[6px] mt-6 font-semibold"
            href="/signup"
          >
            Don&apos;t have an account? Sign up
          </Link>
        </form>
      </div>
    </Modal>
  );
}
