import {BrowserRouter} from "react-router-dom";
import Router from "./components/router/Router.tsx";
import{
  QueryClientProvider,
  QueryClient
}from "@tanstack/react-query";
const App=()=>{
  let queryClient=new QueryClient();
  return(
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </QueryClientProvider>
    )
}
export default App;