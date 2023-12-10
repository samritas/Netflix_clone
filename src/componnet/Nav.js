import React, { useState,useEffect} from 'react'
import './Nav.css'
function Nav() {
  const [show,handleshow]=useState(false);

  useEffect(()=>{

  window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
      handleshow(true);
    }else handleshow(false)
  });
  return ()=>{
    window.removeEventListener("scroll",handleshow)
  }
  },[])

  return (
    <div className={`nav_bar ${show && "nav_black"}`}>
     <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Logo" /> 
   <img class="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
 </div>
  )
}

export default Nav
