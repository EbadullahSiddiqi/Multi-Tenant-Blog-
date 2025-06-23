import Image from "next/image";
import Navbar from "./components/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        {/* <SignIn routing="hash"/> */}
      </div>
    </div>
  );
}
