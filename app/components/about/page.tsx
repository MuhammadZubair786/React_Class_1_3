import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function About() {
  // useEffect(()=>{
  //   axios.get()
  // },[])
  return (
    <>
    <h1>
    About Page List
    

   </h1>
   <Link href={"/components/about/1"}>
    Test
   </Link>
    </>
   
  )
}
