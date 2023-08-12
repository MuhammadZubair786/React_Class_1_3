import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  let name ="Zubair"
  return (

    <>
    <Link href="/components/about">
      About 
    </Link>
   
      {/* <h1 className='text-3xl underline font-bold'>
        hello world {name} ....
      </h1>
      <br />
      <Link href="/user/zubair">Go to About Page</Link>
      <br />
      
      <br />
      <Link href="/contacts">Go to Contact  Page</Link> */}

    </>
  )
}
