import React from 'react';

class Header extends React.Component {

    render() {
      const headerStyle = {
        backgroundColor: '#000',
        display: 'block',
        position:'relative',
        padding: '10px 0px 10px 0px', // t,r,b,l
        position: '-webkitSticky', /* Safari */
        position: 'sticky',
        top: '0',
        zIndex:'10'
      }

      const headerText = {
          color: '#fff',
          margin: '0px 0px 0px 30px', // t,r,b,l
      }
      return (
        <div style={headerStyle}>
          <h3 style={headerText}>{this.props.logotext}</h3>
        </div>
      )
    }
  }

  export default Header;