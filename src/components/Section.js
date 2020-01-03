import React from 'react';
import Radium from 'radium';

class Section extends React.Component {

    render() {
      const sectionStyle = {
        backgroundColor: ''+this.props.bgc+'',
        padding: '30px 100px 80px 100px', // t,r,b,l
        //position: '-webkitSticky', /* Safari */
        //position: 'sticky',
        zIndex:''+this.props.zindex+'',
        //top:'0',
        overflow:'auto',
        '@media (max-width: 992px)': {
            padding: '30px 30px 30px 30px' // t,r,b,l
          },
      }

      return (
          <>
        <div style={sectionStyle}>
          {this.props.children}
        </div>
        </>
      )
    }
  }

  Section = Radium(Section);

  export default Section;