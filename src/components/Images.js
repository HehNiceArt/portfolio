import React from "react";
import Background from '../assets/UI_bg.jpg';
import './Images.css'

function BackgroundUI(){
  return (
    <div>
       <img src={Background} className="Background"/>
    </div>
  );
}

export default BackgroundUI;

