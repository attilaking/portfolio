import React from 'react';
import Radium from 'radium';

class Bars extends React.Component {

    render() {
        const bardiv = {
            marginTop: '5px'
        }

        var a = ['#D9D9D9', '#BFBFBF', '#868686', '#548235', '#375623'];

        let bars = [];
        for (let i = 0; i < this.props.barnr; i++) {
            bars.push(<div key={i} style={{ background: '' + a[i] + '', height: '20px', width: '60px', display: 'inline-block', marginLeft: ' 5px', ':hover': { background: '#000' } }}></div>);
        }

        return (
            <div style={bardiv}>
                <div style={{display:'inline-flex',width:'200px','@media (max-width: 992px)': {
                display:'block'
              },}}>{this.props.tech}: </div>{bars}
            </div>
        )
    }
}

Bars = Radium(Bars);

export default Bars;