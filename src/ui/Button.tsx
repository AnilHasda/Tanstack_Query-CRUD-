const Button=({children,func})=>{
  return(
    <button className="bg-violet-700 text-white rounded-xl px-2 py-1.5"
    onClick={func}
    >
    {children}
    </button>
    )
}
export default Button;