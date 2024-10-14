'use client'
import { cohereChatSerivice } from "@/lib/actions/cohere.action";
import { SendHorizontalIcon } from "lucide-react";
import { useState } from "react";


export default function Home() {
  const [message, setmessage] = useState<string>('')
  const [outputData, setoutputData] = useState<any>(null)
  

  const handleSubmission = async ()=>{
    if(message!=''){
      const res = await cohereChatSerivice(message)
      if(res){
        setoutputData(`${res}`)

        // you can render data from here
      }
    }
  }



  return (
  <div className=" w-full h-screen flex items-center gap-4 justify-center" >
    <input  onChange={(event)=>{
      setmessage(event.target.value);
    }} placeholder="Explore what you want..." type="text"  className="bg-transparent border w-[600px] text-xs   border-zinc-300 focus:border-blue-600 focus:outline-none rounded-xl px-4 py-3" />
    <div onClick={handleSubmission} className=" w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center" >
      <SendHorizontalIcon  strokeWidth={1.25} size={20} color="white"  />
    </div>
  </div>
  );
}
