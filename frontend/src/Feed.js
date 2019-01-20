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
    const { video, type } = this.props
    var height, width
    if(type === "dash") {
      height = 25
      width = 418
    } else {
      height = 360
      width = 700
    }
    return (
      <Grid item xs>
        <Card>
          <CardContent>
            {video}
            <Grid container spacing={24}>
              <Grid item xs>
                <video width="100%" autoPlay loop muted>
                  <source src={'https://storage.googleapis.com/swamphacks2019videos/' + video} type="video/mp4"/>
                </video>
              </Grid>
              <Grid item xs>
                <AreaChart
                  yDomainRange={[0, 1]}
                  height={height}
                  width={width}
                  areaColors={['red', 'green', 'blue']}
                  interpolate={'cardinal'}
                  data={this.state.data}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default Feed;
