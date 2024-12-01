import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query";
import {useEffect,useState} from "react";
import Crud_Operations from "../crud_logic/crud_logic.js";
import Button from ".././ui/Button.tsx";
const TanstackQuery=()=>{
  let [page,setPage]=useState(1);
  let [data,setData]=useState([]);
  let queryClient=useQueryClient();
  const operations=new Crud_Operations();
  const getData=operations.getData;
  const deleteData=operations.deleteData;
  const updateData=operations.updateData;
  const fetchNextPageData= ()=>{
    setPage(prev=>prev+1);
  }
  //data fetching
  let {isPending,error,data:responseData,isFetching}=useQuery({
    queryKey:["test_data",page],
    queryFn:()=>getData(page),
    keepPreviousData:true,
  })
  //delete data
  let deletePost=useMutation({
    mutationFn:(id)=>deleteData(id),
    onSuccess:(data,id)=>{
      console.log({data,id});
      queryClient.setQueryData(["test_data",page],(cachedData=>{
        return cachedData.filter(post=>post.id!==id);
      }))
    }
  });
  //update data
 let updatePost= useMutation({
    mutationFn:(id)=>updateData(id),
    onSuccess:(updateData,id)=>{
      console.log({updateData,id});
      queryClient.setQueryData(["test_data",page],(cachedData=>{
        return cachedData.map(post=>{
          return post.id===id?{...post,body:updateData.body}:post;
        });
      }))
    }
  });
  useEffect(()=>{
    if(responseData) console.log("data:",responseData);
    if(error) console.log("error:",error);
  },[responseData,error]);
  useEffect(()=>{
    if(responseData && page===1) setData(responseData)
    if(responseData && page>1) setData(prev=>([...prev,...responseData]));
  },[responseData])
  return(
    <>
    <div className="text-red-950 uppercase text-center py-5">Data fetching with tanstack query</div>
    {isPending && <p className="text-center">loading...</p>}
    {error && <p className="text-center">something went wrong</p>}
    {/*display data*/}
    {
      !error && data?.length>0 &&
     <div className="flex flex-col gap-5 mx-5">
    {
    data?.map((item,index)=>(
      <div key={item.id || index}>
      <div  className="bg-violet-500 text-white px-2 py-5 rounded-xl">
      {item.id+"."+item.body}
      </div>
      <div className="my-1.5 flex gap-5">
      <Button func={()=>deletePost.mutate(item.id)}>Delete</Button>
      <Button func={()=>updatePost.mutate(item.id)}>Update</Button>
      </div>
      </div>
      ))
    }
        <button className="p-1.5 border"onClick={fetchNextPageData}
        disabled={isFetching}
        >
        {isFetching && page>0?"loading more...":"See more"}</button>
    </div>
    }
    </>
    )
}
export default TanstackQuery;