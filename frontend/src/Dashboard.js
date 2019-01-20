import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Feed from './Feed.js';

class Dashboard extends Component {
  partTheSea(num) {
    const { names } = this.props
    if(num === 1)
      return names.slice(0, 4)
    if(num === 2)
      return names.slice(4, 8)
    if(num === 3)
      return names.slice(8, 12)
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Grid container spacing={24}>
          {this.partTheSea(1).map((video, i) => <Feed key={i} video={video} type="dash"/>)}
        </Grid>
        <Grid container spacing={24}>
          {this.partTheSea(2).map((video, i) => <Feed key={i} video={video} type="dash"/>)}
        </Grid>
        <Grid container spacing={24}>
          {this.partTheSea(3).map((video, i) => <Feed key={i} video={video} type="dash"/>)}
        </Grid>
      </div>
    )
  }
}

export default Dashboard;
