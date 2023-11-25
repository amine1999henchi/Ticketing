import React  from 'react';
import TennisCard from '../components/TennisCard';
import FootballCard from '../components/FootballCard';
import '../assets/css/Categories.css'
import BoxeCard from '../components/BoxeCard';
import {Link} from "react-router-dom";
const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot of matches to come, <br />  choose your preferred category!</h1>
    </div>
    <div className="gpt3__blog-container">

      <div className="gpt3__blog-container_groupB">
      <Link to='/TennisMatches'>
        <TennisCard/>
        </Link>
        <Link to='/FootballMatches'>
        <FootballCard/>
        </Link>
        <BoxeCard/>
      </div>
      
    </div>
  </div>
);

export default Blog;