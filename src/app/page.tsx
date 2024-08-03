import Image from "next/image";
import Header from "./components/Header";
import BannersSection from "./components/BannersSection";

export default function Home() {
  return (
    <main className="bg-blue-950 w-full px-[10%]">
      <Header />
      <BannersSection />
    </main>
  );
}
