import { React, Suspense }from "react";
 
import '../assets/css/TennisCard.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Football } from "./3D models/Football";
import { Goldenticket } from "./3D models/Goldenticket";
export default function FootballCard(){
  

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
    <PerspectiveCamera makeDefault position={[6,0, 8]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
            <Football/>
        </Suspense>
      </Canvas>
    </div>

</div>
   
</div> 


<div class="productSpecifications">
  <h1> FOOTBALL </h1>
  <p>Watch football matches exclusively on our platform, click to view available matches... </p>
  
</div>

</div>

        </>
    )
}