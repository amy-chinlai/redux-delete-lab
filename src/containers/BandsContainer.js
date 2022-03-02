import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from "../components/Bands"
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    console.log("below")
    console.log(this.props.bands)
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} />
      </ul>
      
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = (dispatch) => {
  return {addBand: name => dispatch({type: "ADD_BAND", name: name})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
