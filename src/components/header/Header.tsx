import {Link} from "react-router-dom";
const Header=()=>{
  return(
    <nav className="h-10 w-full bg-gray-800 text-white grid place-items-center">
    <ul className="flex items-center justify-center gap-5 list-none">
    <Link to="/"><li>Home</li></Link>
    <Link to="/tanstack"><li>Tanstack</li></Link>
     <Link to="/infiniteScroll"><li>Infinite_Scroll</li></Link>
    </ul>
    </nav>
    )
}
export default Header;