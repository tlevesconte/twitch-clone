export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[516px] p-2">
        <div className="bg-modalBackgroundColour rounded p-7">{children}</div>
      </div>
    </div>
  );
}
