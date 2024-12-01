import {useEffect,useState} from "react";
import useGetData from "./custom_hooks/useGetData.tsx";
export default function Home(){
  let [pageNumber,setPageNumber]=useState(1);
  let {fetchData,data}=useGetData();
  const getData=async ()=>{
    setPageNumber(prev=>prev+1);
    await fetchData(pageNumber);
  }
  useEffect(()=>{
   (async ()=>{
     await fetchData();
    })();
  },[])
  return(
    <>
    <div className="text-red-950 py-5 uppercase text-center">
    data fetching without tanstack query</div>
    <div className="flex flex-col gap-5 mx-5">
    {
    data?.map((item,index)=>(
      <div key={index} className="bg-violet-500 text-white px-2 py-5 rounded-xl">
      {item.body}
      </div>
      ))
    }
        <button className="p-1.5 border"onClick={getData}>See more</button>
    </div>
    </>
    )
}