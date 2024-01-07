export default function ModalHeader({ title }: { title: String }) {
  return (
    <div className="flex flex-row items-center justify-center">
      <svg width="50" height="50" viewBox="0 0 24 28">
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
      <h4 className="font-semibold text-2xl ml-2">{title}</h4>
    </div>
  );
}
