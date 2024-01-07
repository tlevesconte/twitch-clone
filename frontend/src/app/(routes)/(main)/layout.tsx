import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default function LoginLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
