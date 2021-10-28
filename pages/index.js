import Head from "next/head";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black p-8 h-full">
      <Head>
        <title>Chases Porfolio</title>
        <meta name="description" content="Chase's Portfolio" />
      </Head>
      <p className="text-white text-4xl">
        <p className="my-8">Hi.</p>
        <p>My name is Chase.</p>
      </p>
    </div>
  );
}
