import React from 'react';
import {Graph} from './components/Widgets/Graph';
import {RocketMap} from './components/RocketMap';
import './assets/App.css';

function App() {
  return (
    <>
      <div className="flex-container">
        <p style={{marginLeft: '20px'}}>
          Novo dado
        </p>
        <input style={{marginLeft: '20px', marginRight: '3px', width: '35px'}} />
        x
        <input style={{marginLeft: '20px', marginRight: '3px', width: '35px'}} />
        y
        <button type="button" style={{marginLeft: '10px'}}>
          add
        </button>
      </div>
      <Graph text='Gráfico Corno'/>
      <RocketMap width="510px" height="480px" />
    </>
  );
}

export default App;
