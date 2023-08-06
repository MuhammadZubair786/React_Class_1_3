import React from "react";

function Card(){
    return(
        <div className="flex flex-row">
          <div className=" w-1/3 mt-4 mx-4 h-40 bg-white border-2 shadow-slate-100 text-black ">
            <h1 className="p-4">Card title</h1>
        </div>
        <div className="w-1/3  mt-4 mx-4 h-40 bg-white border-2 shadow-slate-100 text-black ">
            <h1 className="p-4">Card title</h1>
        </div>
        <div className="w-1/3 mt-4 mx-4 h-40 bg-white border-2 shadow-slate-100 text-black ">
            <h1 className="p-4">Card title</h1>
        </div>
        </div>
       
    )
}

export default Card