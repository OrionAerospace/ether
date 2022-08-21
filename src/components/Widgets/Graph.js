import React, {Component} from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot, HorizontalGridLines, XAxis, MarkSeries,
  YAxis, GradientDefs, AreaSeries
} from 'react-vis';
import DefaultContainer from '../Basics/DefaultContainer';

export class Graph extends Component {
  constructor() {
    super();
    this.state = {
      data: [{x: Date.now(), y: (0.9 + Math.random() * 0.2)}],
      avarege: []
    };
  }
  addToAvarageData(data) {
    console.log(data);
    this.setState({avarege: [...this.state.avarege, data]});
  }

  removeOldData() {
    const dataArray = this.state.data;
    const dataLength = dataArray.length;

    if (dataLength > 20) this.addToAvarageData(dataArray.shift());

    return dataArray;
  }
  // timeDelta = ((timeDelta % 60000) / 1000).toFixed(0);

  dataUpdater() {
    const dataArray = this.removeOldData();

    this.setState({
      data: [...dataArray,
        {
          x: Date.now(),
          y: (0.9 + Math.random() * 0.2)
        }
      ]
    });
  }
  renderGradient() {
    return (
      <GradientDefs>
        <linearGradient
          id="myGradient"
          gradientUnits="userSpaceOnUse"
          x1="15" y1="65" x2="300" y2="325"
          to={'bottom'}>
          <stop offset="10%" stopColor="#3C4F6B" />
          <stop offset="90%" stopColor="#789BCF" />
        </linearGradient>
      </GradientDefs>
    );
  }

  renderGraph() {
    return (
      <div style={{margin: '10px', marginBottom: '0px'}}>
        <XYPlot width={430} height={400} backgroundColor='#FFFFFF'
          style={{marginBottom: '20px'}} stroke={300} xType='time'>
          {this.renderGradient()}
          <YAxis title="Y Axis"/>
          <XAxis title="X Axis"/>
          <HorizontalGridLines />
          <MarkSeries data={this.state.avarege}/>
          <AreaSeries data={this.state.data} curve='curveMonotoneX' fill={'url(#myGradient)'} opacity={0.81} stroke={'#789BCF'} animation={'noWobble'}/>
        </XYPlot>
      </div>
    );
  }

  render() {
    const {image, text} = this.props;
    return (
      <>
        <button onClick={()=>this.dataUpdater()}>aaaaaaaaa</button>

        <DefaultContainer styles={{position: 'absolute', width: 'auto', height: 'auto'}}
          image={image} text={text}>
          <DefaultContainer styles={{position: 'relative', width: 'auto', height: 'auto', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)'}}>
            {this.renderGraph()}
          </DefaultContainer>
        </DefaultContainer>
      </>
    );
  }
}
export default Graph;
