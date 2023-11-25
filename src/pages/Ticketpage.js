import { React, Suspense }from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Goldenticket } from "../components/3D models/Goldenticket";
import { Ticket } from "../components/3D models/Ticket";
import '../assets/css/ticketpage.css'
import ticketABI from '../assets/ticketABI.json'
import { useEffect } from "react";
import { useContract } from "../components/ContractUses";
import {ethers} from 'ethers'
export default function Ticketpage() {
  const ticketAddress= '0x6082Ee559E3Ee4b6303878861A8c81d6e1F52F31' 
  
  const {contract} = useContract(ticketAddress , ticketABI)

        const options = {value: ethers.BigNumber.from("2") }

        const buy = () =>{
        if(contract){
          contract.buyTicketToAttendMatch('6', options).then(res =>{
            console.log('r',res )
          })
        }
      }
        
  
    return(
        <div className="ticket_page">
        <h1 className="gradient__text" >Congratulations, you have just bought one ticket to a match in our platform</h1>
        <Canvas className="canvas">
        <PerspectiveCamera makeDefault position={[15,20,1 ]} />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
              <Ticket/>
            </Suspense>
          </Canvas>
          <button onClick={buy}>
            buy !
          </button>
          </div>
    )
}