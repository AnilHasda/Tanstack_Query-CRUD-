import {Routes,Route} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Home from "../Home.tsx";
import TanstackQuery from "../TanstackQuery.tsx";
const Router=()=>{
return(
  <Routes>
  <Route element={<Layout/>}>
  <Route path="/"element={<Home/>}/>
    <Route path="/tanstack"element={<TanstackQuery/>}/>
  </Route>
  </Routes>
  )
}
export default Router;