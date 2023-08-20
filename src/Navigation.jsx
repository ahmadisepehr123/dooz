import React from "react";
import "./Navigation.css";
import img from "./favicon.2a2e97fc.73ae862a.png";
import "./App.css";
import {Outlet,useNavigate} from 'react-router-dom';
import "./Navigation.css";
const Navigation = ()=>{
	const navigate = useNavigate();
    return(
		<>
        <div>
            <a href="https://sepehrdev.netlify.app" class="logo" target="_blank">
		<img id="img" src={img} alt="" title="سایت من"/>
	</a>

  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><p onClick={() =>{
                navigate('/About')
                }}>درباره من</p></li>
				<li>
				<p onClick={() =>{
                navigate('/Home')
                }}>خانه</p>
				</li>
  		</ul>
  	</nav>
        </div>
		<Outlet/>
		</>
    )
}

export default Navigation;