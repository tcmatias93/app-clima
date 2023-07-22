"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Clima from "@/components/Clima";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dime donde estas y te dire el clima</title>
        <meta
          name="description"
          content="Pon en que ciudad o localidad te encuentras y te mostramos el clima."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Clima />
      </main>
    </>
  );
}
