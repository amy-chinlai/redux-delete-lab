import React, { Component } from 'react'


    const Band = props => {
        console.log("band")
        console.log(this)
        return (
          <li>{this.props.name}     <button onClick={() => props.delete(props.band.id)}>DELETE</button></li>
        );
      };

export default Band