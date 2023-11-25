import { React, Suspense }from "react";

import '../assets/css/TennisCard.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Boxe } from "./3D models/Boxe";
export default function BoxeCard(){
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
    <PerspectiveCamera makeDefault position={[-2,0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Boxe/>
        </Suspense>
      </Canvas>
    </div>
    
</div>
   
</div> 


<div class="productSpecifications">
  <h1> BOXING </h1>
  <p>Watch boxing matches exclusively on our platform, click to view available matches... </p>
  
</div>

</div>

        </>
    )
}