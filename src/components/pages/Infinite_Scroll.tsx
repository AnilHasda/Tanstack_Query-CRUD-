import {useInfiniteQuery} from "@tanstack/react-query";
import  Crud_Operations from "../../crud_logic/crud_logic.js";
import Button from "../../ui/Button.tsx";
import {useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Infinite_Scroll=()=>{
  let operations=new Crud_Operations();
  let {getInfiniteData}=operations;
  let {data,hasNextPage,fetchNextPage,isNextPageFetching,isLoading}=useInfiniteQuery({
    queryKey:["inifinite_post"],
    queryFn:getInfiniteData,
    getNextPageParam:(lastPageData,allPages)=>{
      console.log({lastPageData,allPages})
      return lastPageData.length===5?allPages.length+1:undefined;
    }
  })
  //handleScroll
  const handleScroll=()=>{
    let isBottom=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-10;
    if(isBottom && hasNextPage) fetchNextPage();
  }
  useEffect(()=>{
    console.log({data});
  },[data]);
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  })
  if(isLoading){
    return <div><ClipLoader size={20}/></div>
  }
  return(
  <>
  <p className="text-center pt-5">Demonstration of infinite scroll</p>
       <div className="flex flex-col gap-5 mx-5 my-5">
    {
      data?.pages?.map(perPageData=>{
        return perPageData?.map((item,index)=>(
      <div key={item.id || index}>
      <div  className="bg-violet-500 text-white px-2 py-5 rounded-xl">
      {item.id+"."+item.body}
      </div>
      <div className="my-1.5 flex gap-5">
      <Button>Delete</Button>
      <Button>Update</Button>
      </div>
      </div>
      ))
      })
    }
    </div>
    <p className="text-center py-2">loading more...</p>
  </>
  )
}
export default Infinite_Scroll;