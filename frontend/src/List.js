import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Feed from './Feed.js';

class List extends Component {
  renderRow(video, i) {
    const { classes } = this.props
    return (
      <Grid container spacing={24}>
        <Feed key={i} video={video} type="list"/>
      </Grid>
    )
  }

  render() {
    const { names } = this.props
    return (
      <div>
        {names.map((video, i) => this.renderRow(video, i))}
      </div>
    )
  }
}

export default List;
