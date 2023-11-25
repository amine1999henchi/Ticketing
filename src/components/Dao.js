import React from 'react';
import '../assets/css/Dao.css'
const featuresData = [
  {
    title: 'Sharing our revenue',
    text: 'Our DAO has many streams of revenue like product placement, feed ads, NFT sales and Marketplace Fees.',
  },
  {
    title: 'Ad revolution for brands    ',
    text: 'Giving brands the chance of having their products displayed and digitally used by our users.',
  },

  {
    title: 'NFT tickets sales',
    text: 'Tickets are going to be presented as an NFT collection within a marketplace.',
  },
];

const Dao = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Our DAO model allows the community to have the POWER TO DECIDE the next moves.</h1>
      <p>Sign up , Be part of our world , be a DECIDER ! </p>
      <a href="https://dao-talan.vercel.app/" target="_blank">
        <button className='dao_button'>
          Explore more! 
        </button>
        </a>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{item.title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{item.text}</p>
    </div>
  </div>
      ))}
    </div>
    
  </div>
  
);

export default Dao;
