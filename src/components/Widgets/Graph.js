import React, {Component} from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot, HorizontalGridLines, XAxis, MarkSeries,
  YAxis, GradientDefs, AreaSeries
} from 'react-vis';
import DefaultContainer from '../Basics/DefaultContainer';
import 'd3-shape';

export class Graph extends Component {
  constructor() {
    super();
    this.state = {
      data: [{x: Date.now(), y: (0.9 + Math.random() * 0.2)}]
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.dataUpdater(),
        1000
    );
  }

  removeOldData() {
    const dataArray = this.state.data;
    const dataLength = dataArray.length;

    if (dataLength > 20) dataArray.shift();

    return dataArray;
  }

  dataUpdater() {
    const dataArray = this.removeOldData();

    this.setState({
      data: [...dataArray,
        {
          x: Date.now(),
          y: (Math.random() * 10)
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
          <AreaSeries data={this.state.data} curve='curveMonotoneX' fill={'url(#myGradient)'} opacity={0.81} stroke={'#789BCF'} animation/>
        </XYPlot>
      </div>
    );
  }

  /* renderDataFilters() {
    return (
      <div style = {{flexDirection: 'row'}}>

      </div>
    );
  } */

  render() {
    const {image, text} = this.props;
    return (
      <>
        <DefaultContainer styles={{position: 'absolute', width: 'auto', height: 'auto'}}
          image={image} text={text}>
          {/* {this.renderDataFilters()} */}
          <DefaultContainer styles={{position: 'relative', width: 'auto', height: 'auto', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)'}}>
            {this.renderGraph()}
          </DefaultContainer>
        </DefaultContainer>
      </>
    );
  }
}
export default Graph;
