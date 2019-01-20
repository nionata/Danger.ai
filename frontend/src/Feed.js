import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {AreaChart} from 'react-easy-chart';

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
          if(data[arr].length > 20) {
            data[arr].shift()
          }
        }

        this.setState({data})
        i++
      }.bind(this), 500)
  }
  render() {
    const { video } = this.props
    return (
      <Grid item xs>
        <Card>
          <CardContent>
            {video}
            <video width="100%" autoPlay loop muted>
              <source src={'https://storage.googleapis.com/swamphacks2019videos/' + video} type="video/mp4"/>
            </video>
            <div>
            <AreaChart
              height={50}
              width={418}
              areaColors={['red', 'green', 'blue']}
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
