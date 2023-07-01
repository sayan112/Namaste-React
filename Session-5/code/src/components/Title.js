import { useState } from "react";
import { AppnameData } from "../config";

const Title = () =>
{
  const[title,setTitle]=useState("Namaste Food App");
  
const addnewtitle = () => {
  const size = AppnameData.length;
   setTitle(AppnameData[Math.floor(Math.random() * size-1)]);

};
   return(
  <>
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
    <h2 onClick={()=>{addnewtitle()}} style={{cursor:"pointer"}}>{title}</h2>
  </>
   )
}

export default Title;
