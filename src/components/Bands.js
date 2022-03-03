import React, { Component } from 'react'
import Band from "./Band"
import { connect } from 'react-redux'

const Bands = props => {
    if (props.bands != undefined) {
        const bands = props.bands.map(band => <Band id={band.id} name={band.name} deleteBand={props.deleteBand}/>)
    return (
        <div>
            {bands}
        </div>
    )
}
else {
    return (
        <div>nothing here!</div>
    )
}
}

export default Bands