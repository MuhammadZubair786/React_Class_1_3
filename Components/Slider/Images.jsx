import Image from "next/image";
import logo from '../../public/new.jpg'

function Images1(){
    return(
        <Image 
        className="w-full h-80"
        src={logo}
        alt=""
        />
    )
}
export default Images1