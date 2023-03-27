import Head from "next/head";
import HomePage from "./home/index";
import { Inter,Raleway,Fasthand } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'],weight:['400'],preload:true })
export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
