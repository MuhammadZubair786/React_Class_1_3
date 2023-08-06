import Header from "@/Components/Header/Header"
import Image1 from "@/Components/Slider/Images"
import Card from "@/Components/Card/page"

import Image from "next/image"

function App(){
  return(
    <div className="bg-black h-screen text-white">
    <Header/>
    <Image1/>
    <Card/>
    <h2>footer</h2>
    </div>

   
    
  )
}
export default App