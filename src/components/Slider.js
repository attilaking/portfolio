import React from 'react';
import Hero from './Hero.js';

class Slider extends React.Component {

    render() {
      const style={
        display: 'block',
        position:'relative',
        //position: '-webkitSticky', /* Safari */
        //position: 'sticky',
        //top: '0',
        zIndex:'5',
        overflow: 'auto'
      }
      return (
        <>
          <div style={style}>
          <Hero color="#fff" herotext1={this.props.herotext1} herotext2={this.props.herotext2}/>
          <img style={{width:'100%'}} alt="" src={this.props.src}/>
          </div>
        </>
      )
    }
  }

  export default Slider;