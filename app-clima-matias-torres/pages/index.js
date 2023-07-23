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
        <link rel="icon" href="/clima.jpg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main className={`${inter.className} ${styles.body}App`}>
        <div className="navbar bg-dark text-light mb-5">
          <div className="container-fluid">
            <h3 className="mx-auto">Tiempo meteorológico</h3>
          </div>
        </div>

        <Clima />
      </main>
    </>
  );
}
