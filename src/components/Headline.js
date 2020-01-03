import React from 'react';

class Headline extends React.Component {

    render() {

      const c = this.props.color;
      const headText = {
          color: ''+c+'',
          padding: '0px 0px 0px 0px', // t,r,b,l
          margin: '30px 0px 60px 0px', // t,r,b,l
          fontSize : '50px'
      }
      return (
        <div>
          <h1 style={headText}>{this.props.headtext}</h1>
        </div>
      )
    }
  }

  export default Headline;