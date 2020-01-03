import React from 'react';

export class Hero extends React.Component {

    render() {
      const heroStyle = {
        position:'absolute',
        margin: '8% 0 0 100px'
      }

      let c = this.props.color;
      const heroText = {
          color: ''+ c + '',
          padding: '0px 0px 0px 0px', // t,r,b,l
          margin: ' 0px 0px 0px 0px', // t,r,b,l
          fontSize : '10vw',
          lineHeight: '9vw'
      }
      return (
        <div style={heroStyle}>
          <span style={heroText}><b>{this.props.herotext1}</b></span><br/>
          <span style={heroText}>{this.props.herotext2}</span>
        </div>
      )
    }
  }

  export default Hero;