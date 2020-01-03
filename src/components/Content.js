import React from 'react';

class Content extends React.Component {

    render() {

      const contStyle = {
          color: '#000',
          padding: '0px 0px 0px 0px', // t,r,b,l
          margin: '10px 0px 10px 0px', // t,r,b,l
          fontSize : 'inherit',
          textAlign:'justify'
      }
      const techHeadline = {
      fontWeight: 'bold'
      }
      return (
        <div style={contStyle}>
          <p>{this.props.text}</p>
          <span style={techHeadline}>{this.props.techheadline}</span><span>{this.props.techtext}</span>
        </div>
      )
    }
  }

  export default Content;