import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Feed extends Component {
  render() {
    const { name } = this.props
    return (
      <Grid item xs>
        <Card>
          <CardContent>
            <video width="100%" autoPlay loop muted>
              <source src={'https://storage.googleapis.com/swamphacks2019videos/' + name} type="video/mp4"/>
            </video>
            {name}
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default Feed;
