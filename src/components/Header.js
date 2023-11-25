import { React, Suspense, useEffect, useState } from "react";
// import ai from '../../assets/ai.png';
import "../assets/css/Header.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import people from "../assets/images/people.png";
import { Stadium1 } from "./3D models/Stadium1";
// import styled from 'styled-components';
import { Goldenticket } from "./3D models/Goldenticket";
import { useContract } from "./ContractUses";
import ABI from "../assets/storageAbi.json";
import Swal from 'sweetalert2'
function Header() {
  
   
    
    return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s experiment SPORTS from another perspective !{" "}
        </h1>
     
        <p>
          From now on, you can watch exclusively sports matches on a total
          metaverse world. What are you waiting for? DOWNLOAD our application
          and live a unique experience.{" "}
        </p>

        <div className="gpt3__header-content__input">
          <button type="button">DOWNLOAD</button>
        </div>
      </div>

      <div className="gpt3__header-image">
        <div className="stadium">
          <Canvas className="canvas">
            <PerspectiveCamera makeDefault position={[20, 15, 12]} />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
              <Stadium1 />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
export default Header;
