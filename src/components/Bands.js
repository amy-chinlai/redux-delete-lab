import React, { Component } from 'react'
import Band from "./Band"
import { connect } from 'react-redux'

const Bands = props => {
    console.log("props below")
    console.log(props.bands)
    const bands = props.bands.map(band => <Band key={band.id} {...band} />)

    return (
        <div>
            {/* {bands} */}
        </div>
    )
}

export default Bands