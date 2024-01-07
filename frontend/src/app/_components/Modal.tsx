"use client";

import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      ref={overlay}
      onClick={onClick}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[516px] p-2">
        <div className="bg-modalBackgroundColour rounded p-7">
          <button
            className="absolute left-auto right-[1rem] top-[1rem] p-1 rounded hover:bg-secondaryButtonHover flex justify-items-center items-center"
            onClick={onDismiss}
          >
            <svg
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.5 10 4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z"></path>
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
