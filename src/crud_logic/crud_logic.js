import axios from "axios";
import Constants from "../constants/constants.js";
class Crud_Operations{
  constructor(){
    this.BASE_URL=Constants.BASE_URL;
    console.log("BASE_URL",this.BASE_URL)
  }
  //function that fetch data
  getData=async(page=1,limit=5)=>{
    let url=`${this.BASE_URL}?_page=${page}&_limit=${limit}`;
    const {data}=await axios.get(url);
    return data;
  }
  //function for deletion Crud_Operations
   deleteData=async(id)=>{
    const {data}=await axios.delete(`${this.BASE_URL}/${id}`);
    return data;
  }
  //update data
  updateData=async(id)=>{
     console.log("update func called")
    const {data}=await axios.patch(`${this.BASE_URL}/${id}`,{body:"this is test message"});
    return data;
  }
}
export default Crud_Operations;