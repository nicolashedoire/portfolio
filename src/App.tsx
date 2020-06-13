import React, { useState } from 'react';
import Template from './components/design/template';
import Background from './components/design/background';
import TimelineMarker from './components/timelineMarker';
import Mobile from './components/design/mobile';
import Tablet from './components/design/tablet';
import Desktop from './components/design/desktop';
import Circles from './components/design/circles';
import Circle from './components/design/circle';
// import Baby from './components/design/baby';
import MenuButton from './components/hamburgerButton';
import CloseButton from './components/closeButton';
import GridDisplay from './components/gridDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.scss';

function App() {
  const softSkills = ['Créatif', 'Rigoureux', 'Efficace'];
  const grid = [{
    label: 'MongoDB',
    line: 1,
    column: 1,
    gridArea: 'a',
    background: '#49B7DE'
  }, {
    label: 'Postgres',
    line: 1,
    column: 2,
    gridArea: 'b',
    background: '#9E7AC2'
  }, {
    label: 'Configuration',
    line: 1,
    column: 2,
    gridArea: 'c',
    background: '#65DFA7'
  }, {
    label: 'Interface',
    line: 2,
    column: 2,
    gridArea: 'd',
    background: '#F07457'
  }, {
    label: 'System',
    line: 2,
    column: 2,
    gridArea: 'e',
    background: '#F8CD48'
  }, {
    label: 'Docker',
    line: 2,
    column: 1,
    gridArea: 'f',
    background: '#5CA7DF'
  }];
  const [showGlobals, setShowGlobals] = useState(false);

  return (
    <React.Fragment>
      {showGlobals ? <div className="Globals">
        <div className="menu">
          <CloseButton onClick={() => {
            setShowGlobals(!showGlobals)
          }} />
        </div>
        <GridDisplay grid={grid} columns="5"/>
      </div> :
        <div className="App">
          <div className="bg-white"></div>
          <video className="video" src="medias/bg.mp4" autoPlay={true} loop={true}></video>
          <div className="menu">
            <MenuButton onClick={() => {
              setShowGlobals(!showGlobals)
            }} />
          </div>
          <p className="user">Nicolas Hedoire</p>
          <Background />
          <div className="timeline">
            {/* <img className="logo" src="img/logo.png"/> */}
            <h1 className="job-title">La conception du web est un métier passionnant</h1>
            <TimelineMarker
              marker={{
                backgroundColor: 'rgba(30, 30, 30, .2)',
                border: '5px solid rgba(255, 255, 255, .8)'
              }}
              link={{
                backgroundColor: 'rgba(255, 255, 255, .6)',
              }} />
            <h1 className="first-title">mais il s'avèvre souvent compliqué...</h1>
            <div className="support">
              <Template />
            </div>
            {/* <h1>sur différents supports</h1>
        <div className="">
          <div className="devices">
            <Mobile>
              <p>Hello world</p>
            </Mobile>
            <Tablet>
              <p>Hello world</p>
            </Tablet>
            <Desktop>
              <p>Hello world</p>
            </Desktop>
          </div>
        </div>
        <TimelineMarker /> */}
            <h1>Les technologies embarquées</h1>
            <div className="support">
              <div className="flex">
                <div className="image">
                  <img src="img/react-logo.png" alt="React" title="React" width="75" />
                  <h2>React JS</h2>
                </div>
                <div className="image">
                  <img src="img/vue-logo.png" alt="React" title="React" width="75" />
                  <h2>VueJS</h2>
                </div>
                <div className="image">
                  <img src="img/angular-logo.png" alt="React" title="React" width="60" />
                  <h2>Angular</h2>
                </div>
                <div className="image">
                  <img src="img/node-logo.jpg" alt="NodeJS" title="NodeJS" width="132" />
                  <h2>NodeJS</h2>
                </div>
                <div className="image">
                  <img src="img/postgresql-logo.png" alt="Postgres" title="Postgres" width="70" />
                  <h2>Postgresql</h2>
                </div>
                <div className="image">
                  <img src="img/mongodb-logo.png" alt="Mongodb" title="Mongodb" width="55" />
                  <h2>MongoDB</h2>
                </div>
              </div>
            </div>

            <h1>Mot d'ordre</h1>
            <Circles items={softSkills} />
            {/* <TimelineMarker
          marker={{
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }}
          link={{
            boxShadow: 'none'
          }} 
        /> */}
            <h1>Qu'apporte cette solution ?</h1>
            <div className="support">
              <div className="flex">
                <div className="flex flex-column">
                  <Circle icon="/img/quality-icon.png" width="50" />
                  <p>Qualité</p>
                </div>
                <div className="flex flex-column">
                  <Circle icon="/img/quality-icon.png" width="50" />
                  <p>Satisfaction client</p>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <ul className="socials-media">
              <li>
                <a href="https://www.facebook.com/hedoire" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nicolas-hedoire-1734775b" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/hnhack" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://github.com/nicolashedoire" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </footer>
        </div>}
    </React.Fragment>
  );
}

export default App;
