"use client";

import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="home min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('ezgif 1.gif')" }}
    >
      <Navbar />
      <div className="home-content flex flex-col items-center justify-center h-screen space-y-8">
        <div className="text-center">
          <p className="text-2xl mb-2 uppercase">Grow Your Game with the</p>
          <p className="text-2xl underline underline-offset-12 font-bold uppercase mt-2">
            Professionals
          </p>
        </div>

        <div className="relative w-full text-center">
          <div className="absolute w-xl h-full bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-20"></div>
          <p className="text-xl tracking-widest relative z-10 uppercase">
            ADOPT • NURTURE • DELIVER
          </p>
        </div>
        <CTA
          text="Register Now"
          onClick={() => (window.location.href = "/contact")}
        />
        <div
          className="absolute bottom-8 animate-bounce"
          onClick={() => (window.location.href = "/about")}
        >
          <svg
            width="24"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 5v20M5 17l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
