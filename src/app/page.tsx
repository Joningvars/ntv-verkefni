import Image from "next/image";
import MainContent from "./components/MainContent";
import Confetti from "./components/Confetti";
import JumpingRates from "./components/JumpingRates";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <MainContent />
      <Confetti />
      <JumpingRates />
      <JumpingRates />
      <Confetti />
    </div>
  );
}
