import React from "react";
import Navigation from './Navigation';
import "./About.css"
import me from "./Sepehr.jpg"
const About = () => {
    return(
        <>
        <div>
         <Navigation/>       
         <div className="card">
    <div className="image">
      <img src={me} alt="Me"/>
    </div>
    <div className="details">
      <div className="center">
        <h1 id="h1introduce"> من سپهرم و این سایتی که میبنید<br/><br/></h1>
        <span className="introduce">برنامه نویسش منم </span>
        <p id="pintroduce">شما میتونید روی این <a href="https://sepehrdev.netlify.app/" target="_blank" className="span2">لینک</a> کلیک کرده و  از سایت من دیدن کنید در اونجا چند تا از پروژه هایی که زدم رو میتونید ببینید همچنین از سایت میتونید با من درارتباط باشید</p>
      </div>
    </div>
  </div>
        </div>
        </>
    );
}



export default About;