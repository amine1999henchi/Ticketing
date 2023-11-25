import { React, Suspense }from "react";

import '../assets/css/TennisCard.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Racket } from "./3D models/Racket";
import { Tennisplayer } from "./3D models/Tennisplayer";
export default function TennisCard(){
    return(
        <>
<div class="wrapper">

  
<div class="overviewInfo">
  <div class="actions">
 
    <div class="cartbutton neurobutton"> 



    </div>
  </div>
  
  <div class="productinfo">

   
  
    
    
    <div class="productImage">
    <Canvas className="racket_canvas">
    <PerspectiveCamera makeDefault position={[-15,0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Tennisplayer/>
        </Suspense>
      </Canvas>
    </div>
    
</div>
   
</div> 


<div class="productSpecifications">
  <h1> TENNIS </h1>
  <p>Watch tennis matches exclusively on our platform, click to view available matches... </p>
  

  
</div>


</div>

        </>
    )
}