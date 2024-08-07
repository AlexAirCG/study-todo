import Header from "./components/header";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-[#E4E5E7] min-h-screen p-8">
      <div>
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </div>
      <Script src="./main.js"></Script>
      <Header />
    </main>
  );
}
