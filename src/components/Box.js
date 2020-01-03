import React from 'react';
import Button from './Button.js';
import Radium from 'radium';

class Box extends React.Component {

    render() {

        const p = this.props.pos;
        const box = {
            float: ''+ p +'',
            width: '30%',
            display: 'inline-flex',
            fontSize: '17px',
            '@media (max-width: 992px)': {
                display:'flexbox',
                width: '100%',
                padding: '0px 0px 30px 0px' // t,r,b,l
              },

        }

        const boxHeader = {
            //border: '1px solid',
            backgroundColor: '#f2f2f2',
            width: '100%'
        }

        const headerCont = {
            textAlign: 'left',
            backgroundColor: '#f2f2f2',
            padding: '15px'
        }

        const boxContent = {

            width: '100%',
            textAlign: 'left',
        }

        const contentStyle = {
            textAlign: 'justify'
        }

        const picStyle = {
            width: '100%',
            margin: '0px',
            ':hover': {
                webkitFilter: 'grayscale(100%)', /* Safari 6.0 - 9.0 */
                filter: 'grayscale(100%)'
            }
        }

        const header = {
            paddingTop: '0px',
            fontSize: '20px',
            fontWeight: '700'
        }

        return (

            <div style={box}>
                <div style={boxContent}>
                    <div style={boxHeader}>
                        <img alt="box" style={picStyle} src={this.props.headerImg} />
                    </div>
                    <div style={headerCont}>
                        <span style={header}>{this.props.headerText}</span>
                        <p style={contentStyle} >{this.props.content}</p>
                        <span><b>{this.props.techhead}: </b></span><span>{this.props.techUsed}</span>
                    </div>
                    <Button width={this.props.width} textcol={this.props.textcol} col={this.props.col} buttontext={this.props.buttontext} url={this.props.url}/>
                </div>
            </div>

        )
    }

}

Box = Radium(Box);
export default Box;