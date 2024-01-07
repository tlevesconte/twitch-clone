import Link from "next/link";

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

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
    <>
      <Header />
      <main>
        <h1>HOME PAGE</h1>
        {/* <h1>{data.message}</h1> */}
      </main>
      <Footer />
    </>
  );
}
