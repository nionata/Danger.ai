import React, { Component } from 'react';
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Dashboard from '@material-ui/icons/Dashboard';
import List from '@material-ui/icons/List';
import {withStyles} from '@material-ui/core/styles';
import VideoPicker from './VideoPicker.js';
import DashboardView from './Dashboard.js';
import ListView from './List.js';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appbar: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding:  20,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#eceff1'
  },
  appBarSpacer: theme.mixins.toolbar,
  title: {
    display: 'block'
  },
  titleLeft: {
    float: 'left'
  },
  titleRight: {
    float: 'right',
    margin: 10
  },
  logo: {
    height: 50,
    marginRight: 10
  },
  listFeed: {
    height: '50vh'
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {selectedFile: "", view: "dash", videos: []}
    this.loadVideos = this.loadVideos.bind(this)
    this.handleselectedFile = this.handleselectedFile.bind(this)
    this.submitFile = this.submitFile.bind(this)
  }

  componentDidMount() {
      this.loadVideos()
  }

  loadVideos() {
    this.setState({videos: []})
    axios
      .get('https://us-central1-arched-glow-229104.cloudfunctions.net/dangerScores')
      .then(response => this.setState({videos: response.data}))
  }

  handleselectedFile(event) {
    event.preventDefault()

    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  submitFile(event) {
    event.preventDefault()

    const { selectedFile } = this.state
    const URL = 'https://www.googleapis.com/upload/storage/v1/b/swamphacks2019videos/o?uploadType=media&name=' + selectedFile.name
    const header = {
      header: {
        'Content-Type': 'video/mp4'
      }
    }

    axios
      .post(URL, selectedFile, header)
      .catch(err => console.log(err))
      .then(this.setState({selectedFile: ""}))
  }

  renderView(classes) {
    if(this.state.view === "dash") {
      return <DashboardView videos={this.state.videos} classes={classes}/>
    } else {
      return <ListView videos={this.state.videos} classes={classes}/>
    }
  }

  render() {
    console.log(this.state);
    //<VideoPicker handleselectedFile={this.handleselectedFile} submitFile={this.submitFile} />
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <img src="logo.ico" alt="logo" className={classes.logo} />
            <h1>Danger.ai</h1>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.title}>
            <h2 color="black" className={classes.titleLeft}>Video Feeds</h2>
            <div className={classes.titleRight}>
              <IconButton onClick={() => this.setState({view: "dash"})}>
                <Dashboard/>
              </IconButton>
              <IconButton onClick={() => this.setState({view: "list"})}>
                <List/>
              </IconButton>
            </div>
          </div>
          {this.renderView(classes)}
          <div className={classes.appBarSpacer} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
