import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {goBack} from 'react-router-redux';

class BackButton extends Component {
  handleClick = () => {
    this.props.goBack();
  }

  render() {
    return <Button variant="contained" color="inherit" style={{ marginTop: 20 }} onClick={this.handleClick}>取消并返回</Button>
  }
}

export default connect(null, {goBack})(BackButton);