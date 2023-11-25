import { React, Suspense }from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../assets/css/Getyourticket.css'
import { Goldenticket } from "./3D models/Goldenticket";
import { Stadium1 } from "./3D models/Stadium1";
const Getyourticket = () => {
  let { id } = useParams();
    return (
    
            <> 
            <div className="gpt3__header-content">
            <h1  className="gradient__text">Tickets will be avaible soon for this match !</h1>
            <h1  className="gradient__text">Match id: {id}</h1>
            </div>
            <Link to="/Ticket">
             <Button className="ticket_button">
              Get my ticket NOW ! 
             </Button>
             </Link>
               </>
    )
  }
  
  export default Getyourticket;