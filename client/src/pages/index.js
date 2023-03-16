import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "@/components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Pricena Clone</title>
      </Head>
      <Landing />
    </main>
  );
}
