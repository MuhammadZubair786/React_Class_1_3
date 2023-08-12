
export const generateStaticParams=()=>{
return[
    {username:"Zubair"},
    {username:"Ali"},
    {username:"omer"}
]
}

export default function DynmaicSegments(props:any) {
console.log(props.params)
  return (
   <h1>
  Hello {props.params.username}
   </h1>
  )
}
