import React from "react";
import AppPage from "../src/pages/App/index"
import Particles from 'react-particles-js';
import "./styles/global";
import "./styles/global.css";

const App = () => 
  <div>
    <Particles style={{ zIndex: "-1", position: 'absolute' }}
        params={{
          "particles": {
            "number": {
              "value": 70
            },
            "color": {
              "value": "#47d101"
            },
            "size": {
              "value": 3
            },
            "line_linked": {
              "color": {
                "value": "#47d101"
              }
            }
          },
          "interactivity": {
            "events": {
              "onHover": {
                "enable": false,
                "mode": "repulse"
              }
            }
          }  
        }}
      />
    <AppPage />
  </div>;
export default App;