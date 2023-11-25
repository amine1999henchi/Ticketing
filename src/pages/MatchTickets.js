import react,{useState,useEffect} from 'react'
import { useContract } from '../components/ContractUses'
import {ethers} from 'ethers'
import ticketABI from '../assets/ticketABI.json'
import { useParams } from 'react-router-dom'
import Test from '../components/TicketCard'
import '../assets/css/MatchTickets.css'
import { useWallet } from '../components/provider-js'
export default function MatchTickets() {
    const {account} =useWallet()
    const[tickets,setTickets] = useState([])
    const[number,setNumber]= useState(0)
    const[hometeam,setHometeam] = useState("Home team")
    const [awayteam,setAwayteam] = useState("Away team")
    const[date,setDate] = useState()
    const [league,setLeague] = useState("League")
    const [time,setTime] = useState("Time")
    const [price,setPrice] = useState(0)
    //
    var today = new Date();

var month = ((today.getMonth()+1) < 10 ? ('0'+(today.getMonth()+1)) : (today.getMonth()+1))
var jour =  ((today.getDate()) < 10 ? ('0'+(today.getDate())) : (today.getDate()))
var datetoday = today.getFullYear()+'-'+ month+'-'+ jour;

    //
    let{matchId} = useParams()
   

    //blockchain
    const ticketAddress= '0xFa88AF9596B1aD96230472a2724D72662BaE4F27' 
    const {contract} = useContract(ticketAddress , ticketABI)
    const options = {value: ethers.BigNumber.from("2") }
    const buy = (ticketnum) =>{
        if(contract){
          contract.buyTicketToAttendMatch(ticketnum, options).then(res =>{
            console.log('r',res )
          })
        }
      }


      
    useEffect(()=>{
        //blockchain
        if(contract){
            contract.fetchMatchById(matchId).then((res) =>{
                setTickets(res)
                console.log(tickets)
                console.log(tickets[0].price.toNumber())
                setPrice(tickets[0].price.toNumber())
              })
            }
      //  API
      fetch("https://api.sofascore.com/api/v1/sport/football/scheduled-events/"+ datetoday, {
        "headers": {
          authority: 'api.sofascore.com',
          accept: '*/*',
          'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
          'cache-control': 'max-age=0',
          origin: 'https://www.sofascore.com',
          referer: 'https://www.sofascore.com/',
          'sec-ch-ua': '^\^Chromium^^;v=^\^104^^, ^\^'
        },
        "method": "GET"
      })
                  .then((response) => response.json())
                  .then((data) => {
                  
                    var events = data['events']
            
                  
                    var i = 0;
                    var games = []
                    for (var game in events) {
                        if(events[i]['customId'] == matchId)
                        {
                        var league = events[i]['tournament']['name'];
                        setLeague(league)
                        console.log(league)
                        var category = events[i]['tournament']['category']['name'];
                        
                        var hometeam = events[i]['homeTeam']['name'];
                        setHometeam(hometeam)
                        console.log("home:" , hometeam)
                        var awayteam = events[i]['awayTeam']['name'];
                        setAwayteam(awayteam)
                        console.log(awayteam)
                        var homeid = events[i]['homeTeam']['id'];
                        var awayid = events[i]['awayTeam']['id'];
                      
                        date = events[i]['startTimestamp'];
                            
            
                        const d1 = new Date();
                        d1.setHours(0, 0, 0, 0);
            
                        var timetoday = Math.round(d1.getTime() / 1000);
            
                        if (date >= timetoday) {
                            let unix_timestamp = date
            
                            var date = new Date(unix_timestamp * 1000);
                            var hours = date.getHours();
                            var minutes = "0" + date.getMinutes();
                            var seconds = "0" + date.getSeconds();
            
                            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                            
                        
                        }
                        setDate(datetoday)
                        setTime(formattedTime)
                        break;
                    }    
                        i++;
                    }
                 
            
              
                  })
                  .catch((error) => {
                   
                    console.log(error);
                  });



         
        
    })


    return(
        <div className='allticketscontainer'>
            {tickets.map((ticket)=>
            <div className='ticket_container'>
            <Test numTicket={ticket.tokenId.toNumber()}   hometeam={hometeam} awayteam={awayteam} league={league} date={date} time={time} price={price}/>
            <button className='buythisticket' onClick={()=>{buy(ticket.tokenId.toNumber().toString())}}> Buy this ticket </button>
            </div>

            )}
        </div>
    )
}