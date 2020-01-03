import React from 'react';
import Headline from './Headline.js'
import Radium from 'radium';
import Button from './Button.js';

class Footer extends React.Component {

    render() {

        const footerStyle = {
            color: '#fff'
        }

        const formStyle = {
            display: 'flex',
            '@media (max-width: 992px)': {
                display: 'block'
            },

        }

        const fieldStyleL = {
            flex: '1',
            padding: '0px 10px 20px 0px', // t,r,b,l
            '@media (max-width: 992px)': {
                padding: '0px 0px 20px 0px', // t,r,b,l
            },
        }


        const fieldStyleR = {
            flex: '1',
            padding: '0px 0px 20px 10px', // t,r,b,l
            '@media (max-width: 992px)': {
                padding: '0px 0px 20px 0px', // t,r,b,l
            },
        }

        const messageStyle = {
            width: '100%',
            height:'150px'

        }

        return (
            <div style={footerStyle}>
                <Headline color="#fff" headtext="Ask anything" />
                <div style={formStyle}>
                    <div style={fieldStyleL}>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div style={fieldStyleR}>
                        <input type="text" placeholder="Your email" />
                    </div>
                </div>
                <div>
                    <textarea placeholder="Message" style={{ messageStyle }} type="textarea" cols="20" rows="10"></textarea>
                </div>
                <Button
                url="www.maxking.com.au 2" // For button
                buttontext="Submit" // For button
                col="white" // For button
                textcol = "black" // For button
                width = "20%" // For
                type = "submit" // For button
                button/>
            </div>
        )
    }
}

Footer = Radium(Footer);
export default Footer;