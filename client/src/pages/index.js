import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Navbar from "../components/Navbar/Navbar";
import ProductDetails from "../components/Compareprice/Compareprice";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
<Navbar/>  
<ProductDetails/>    
    </main>
  )
}
