import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class VideoPicker extends Component {
  render() {
    const { handleselectedFile, submitFile } = this.props
    return (
      <div>
        <label>Upload a new file</label>
        <br/>
        <input type="file" id="video" accept="video/*" onChange={handleselectedFile}/>
        <Button color="primary" onClick={submitFile}>Submit</Button>
      </div>
    )
  }
}

export default VideoPicker;
