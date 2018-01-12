import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ashley from './images/Ashley.jpg';
import Brent from './images/Brent.jpg';
import Brian from './images/Brian.jpg';
import Matt from './images/matt.jpg';
import Rob from './images/rob.jpg';
import Scott from './images/scott.jpg';
import Steph from './images/Steph.png';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const teamMembers = [
  {"id":1,
  "name":"Ashley",
  "motto":"ywp",
  "spiritAnimal": `${Ashley}`},

  {"id":2,
  "name":"Brent",
  "motto":"You'll cowards won't even smoke crack",
  "spiritAnimal": `${Brent}`},

  {"id":3,
  "name":"Brian",
  "motto":"You don't have to be lonely at Farmers Only",
  "spiritAnimal": `${Brian}`},

  {"id":4,
  "name":"Matt",
  "motto":"I don't know",
  "spiritAnimal": `${Matt}`},

  {"id":5,
  "name":"Rob",
  "motto":"That's exciting",
  "spiritAnimal": `${Rob}`},

  {"id":6,
  "name":"Scott",
  "motto":"Whatever is fine",
  "spiritAnimal": `${Scott}`},

  {"id":7,
  "name":"Stephanie",
  "motto":"What's my motto?",
  "spiritAnimal": `${Steph}`}
]

ReactDOM.render(<App TeamMembers={teamMembers}/>, document.getElementById('root'));
registerServiceWorker();
