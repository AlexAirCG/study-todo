import Header from "./components/header";
import Script from "next/script";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-[#E4E5E7] min-h-screen p-8">
      <Script src="./main.js"></Script>
      <Header />
    </main>
  );
}
