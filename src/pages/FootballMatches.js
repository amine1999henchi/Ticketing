import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import MatchesCard from '../components/MatchesCard'
import '../assets/css/matches.css';
import tnvsfr from "../assets/images/tnvsfr.jpg";
import tnvsdn from "../assets/images/tnvsdn.jpg";
import tnvsaus from "../assets/images/tnvsaus.jpg";
import {Link} from "react-router-dom";
import TrackVisibility from 'react-on-screen';
import { useState , useEffect } from "react";
var today = new Date();

var month = ((today.getMonth()+1) < 10 ? ('0'+(today.getMonth()+1)) : (today.getMonth()+1))
var jour =  ((today.getDate()) < 10 ? ('0'+(today.getDate())) : (today.getDate()))
var datetoday = today.getFullYear()+'-'+ month+'-'+ jour;

const FootballMatches = () => {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
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
        setIsLoading(false);
        var events = data['events']

        // start converting
        var i = 0;
        var games = []
        for (var game in events) {
            var league = events[i]['tournament']['name'];
            var category = events[i]['tournament']['category']['name'];
            var id = events[i]['customId'];
            
            var hometeam = events[i]['homeTeam']['name'];
            var awayteam = events[i]['awayTeam']['name'];

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

                games.push({'id': id,
                'title' :  datetoday + ', ' + formattedTime,
                'description' :  league + ' - ' + category ,
                'team1': hometeam,
                'team2' : awayteam,
                'idteam1' : homeid,
                'idteam2' : awayid,
                'imgUrl1' : "https://api.sofascore.app/api/v1/team/"+ homeid +"/image",
                'imgUrl2': "https://api.sofascore.app/api/v1/team/"+ awayid +"/image"})
            
            }
                
            i++;
        }
        // end converting

        setProjects(games);
  
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }



 /*  const projects = [
    {
      id:"1",
      title: "Coupe du monde - 22/11/22, 2:00 PM",
      description: "Phase de groupes - Groupe D - Journée 1 sur 3",
      team1:"Real Madrid",
      team2:"Bayern Munich",
      imgUrl1: "https://api.sofascore.app/api/v1/team/5367/image" ,
      imgUrl2: "https://api.sofascore.app/api/v1/team/5367/image" 
    },
    { 
      id:"2",
      title: "Coupe du monde - 22/11/22, 11:00 AM",
      description: "Phase de groupes - Groupe D - Journée 2 sur 3",
      imgUrl: tnvsaus,
    },
    { 
      id:"3",
      title: "Coupe du monde - 30/11/22, 4:00 PM",
      description: "Phase de groupes - Groupe D - Journée 3 sur 3",
      imgUrl: tnvsfr,
    },
  ]; */

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Row>
                        {projects &&
                          projects.map((project, index) => {
                            return (
                              <MatchesCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FootballMatches;
