"use client";

import CardsFunc from "@/components/mainPage/Card";
import Carrousel from "@/components/mainPage/Carrousel";
import Header from "@/components/mainPage/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <div className="w-full bg-gray-100 shadow-xl p-4">
        <Carrousel
          slides={[
            <CardsFunc key={1} />,
            <CardsFunc key={2} />,
            <CardsFunc key={3} />,
            <CardsFunc key={4} />,
            <CardsFunc key={5} />,
            <CardsFunc key={6} />,
            <CardsFunc key={7} />,
            <CardsFunc key={8} />,
          ]}
          options={{
            loop: true,
          }}
        />
      </div>
    </main>
  );
}
