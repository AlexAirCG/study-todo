import Header from "./components/header";
import Script from "next/script";
import FormCreate from "./components/form";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-[#E4E5E7] min-h-screen p-8">
      <Script src="./main.js"></Script>
      <div className="container">
        <div className="text-4xl text-green-700">myday24</div>
        <div className="h4 mb-5">список дел </div>
        <Header />
        <FormCreate />
      </div>
    </main>
  );
}
