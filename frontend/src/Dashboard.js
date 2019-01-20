import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Feed from './Feed.js';

class Dashboard extends Component {
  partTheSea(num) {
    const { videos } = this.props
    if(num === 1)
      return videos.slice(0, 3)
    if(num === 2)
      return videos.slice(3, 6)
    if(num === 3)
      return videos.slice(6, 9)
  }

  render() {
    //const { classes } = this.props
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
