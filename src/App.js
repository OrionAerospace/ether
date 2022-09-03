import React from 'react';
import {Graph} from './components/Widgets/Graph';
import {RocketMap} from './components/RocketMap';
import './assets/App.css';

function App() {
  return (
    <>
      <Graph text='Gráfico de teste'/>
      <RocketMap width="510px" height="480px" />
    </>
  );
}

export default App;
