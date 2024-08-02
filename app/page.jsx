import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col justify-between bg-[#E4E5E7] min-h-screen p-8">
      <Header />
      <div className="w-full  h-4 bg-orange-700"> </div>

      <Header />
    </main>
  );
}
