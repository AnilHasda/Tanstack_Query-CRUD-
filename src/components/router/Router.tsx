import {Routes,Route} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Home from ".././pages/Home.tsx";
import TanstackQuery from ".././pages/TanstackQuery.tsx";
import Infinite_Scroll from ".././pages/Infinite_Scroll.tsx";
const Router=()=>{
return(
  <Routes>
  <Route element={<Layout/>}>
  <Route path="/"element={<Home/>}/>
    <Route path="/tanstack"element={<TanstackQuery/>}/>
    <Route path="/infiniteScroll"element={<Infinite_Scroll/>}/>
  </Route>
  </Routes>
  )
}
export default Router;