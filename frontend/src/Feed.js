import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {BarChart, AreaChart} from 'react-easy-chart';

class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {data: [[],[],[]]}
  }
  componentDidMount() {
      var i = 0
      setInterval(function() {
        var { data } = this.state

        for(var arr in data) {
          data[arr].push({x: i, y: Math.random()})
        }

        this.setState({data})
        i++
      }.bind(this), 1000)
  }
  render() {
    const { name } = this.props
    return (
      <Grid item xs>
        <Card>
          <CardContent>
            {name}
            <video width="100%" autoPlay loop muted>
              <source src={'https://storage.googleapis.com/swamphacks2019videos/' + name} type="video/mp4"/>
            </video>
            <div styles={{"width": "100%"}}>
            <AreaChart
              height={25}
              areaColors={['black', 'purple', 'pink']}
              interpolate={'cardinal'}
              data={this.state.data}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default Feed;
