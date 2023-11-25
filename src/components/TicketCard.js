import react from 'react'
import '../assets/css/Ticketcard.css'

export default function TicketCard(props) {



    return(
        <div>
            <div class="container">
  

  <div class="ticket-card">
   <div class="spikes">
    <div class="ticket-spike"></div>
    <div class="ticket-spike"></div>
    <div class="ticket-spike"></div>
    <div class="ticket-spike"></div>
    <div class="ticket-spike"></div>
    <div class="ticket-spike"></div>
    <div class="ticket-spike"></div>
    <div class="ticket-spike"></div>
   </div>
 
    <div class="ticket-section">
      <div class="eta-section">
        <span class="meta-text"> Ticket N° </span>
        
        <div>
        <span class="eta-text"> {props.numTicket} </span>
       
        </div>
      </div>
    
    <div class="source-section">
      <span class="station-name">{props.hometeam} </span>
      <span class="time"> {props.time} </span>
        <span className='date'> {props.date}</span>
        <span className='league'>{props.league} </span>
        <span> {props.price}</span>
    </div>  
      
         <div class="destination-section">
      <span class="station-name"> {props.awayteam}</span>
    
       
      
    </div>
    </div>
   </div> 
</div>

        </div>
    )
}