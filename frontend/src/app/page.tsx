import Link from "next/link";

// async function getData() {
//   const res = await fetch(
//     `http://${process.env.BACKEND_SERVER_IP}:${process.env.BACKEND_SERVER_PORT}/api/greeting`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default function Home() {
  // const data = await getData();

  return (
    <main>
      <h1>HOME PAGE</h1>
      {/* <h1>{data.message}</h1> */}
    </main>
  );
}
