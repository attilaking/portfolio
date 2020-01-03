import React from 'react';
import { StyleRoot } from 'radium';

// Components
import Header from './components/Header.js';
import Box from './components/Box.js';
import Headline from './components/Headline.js';
import Content from './components/Content.js';
import Slider from './components/Slider.js';
import Bars from './components/Bar.js';
import Footer from './components/Footer.js';
import Section from './components/Section.js';

import './App.css';
import logo from './pics/financial.jpg';
import car from './pics/car.jpg';

class App extends React.Component {

  render() {

    const boxContainer = {
      display: 'flexbox',
      textAlign: 'center',
      overflow: 'auto'
    }

    return (
      <>
        <StyleRoot>

          {/* Slider section */}
          <div>
            <Header logotext="Attila Meszaros" />
            <Slider herotext1="My" herotext2="portfolio" src={car} />
          </div>

          {/* About me section */}
          <Section bgc="#fff" zindex="5">
            <Headline color="#000" headtext="[About me]" />
            <Content
              text="I have created this portfolio page in React and relevant technologies to showcase my skills and experience. I included some selected references below. I also have expreience in user interface design, and graphic design as well, "
              techheadline="Technologies I used for this portflio page: "
              techtext="React 16.12.0 / Radium / CSS / SCSS / TypeScript / ES6 / HTML + npm, Yarn, Git"
            />
          </Section>

          {/* My skill section */}
          <Section bgc="#f2f2f2" zindex="6">
            <div>
              <div>
                <Headline color="#000" headtext="[My skills]" />
                <h2>Frontend</h2>
                <Bars tech="HTML" barnr="5" />
                <Bars tech="CSS/SCSS" barnr="5" />
                <Bars tech="JavaScript" barnr="5" />
                <Bars tech="jQuery" barnr="4" />
                <Bars tech="React" barnr="4" />
                <Bars tech="Vue" barnr="2" />
                <h2>Backend</h2>
                <Bars tech="PHP" barnr="2" />
                <Bars tech="Java" barnr="3" />
                <Bars tech="Node.js" barnr="2" />
                <Bars tech="SQL" barnr="3" />
                <h2>Other</h2>
                <Content text="git / github / npm / webpack / Adobe Suite (AI, PS) / "></Content>
              </div>
            </div>
          </Section>
          <Section bgc="#fff" zindex="7">
            <div>

              {/* selected references section */}
              <Headline color="#000" headtext="[Selected references]" />
              <div style={boxContainer}>
                <Box
                  pos="left"
                  headerImg={logo}
                  headerText="Box 1"
                  content="Lorem ipsum dolor estemi hapula  gemini. Lorem ipsum dolor estemi hapula  gemini. Lorem ipsum dolor estemi hapula  gemini."
                  techhead="Technologies"
                  techUsed="HTML, CSS, JavaScript"
                  url="www.maxking.com.au 1" // For button
                  buttontext="live demo" // For button
                  col="black" // For button
                  textcol="white" // For button
                  width="100%" // For button
                />
                <Box
                  pos=""
                  headerImg={logo}
                  headerText="Box 1"
                  content="Lorem ipsum dolor estemi hapula  gemini. Lorem ipsum dolor estemi hapula  gemini. Lorem ipsum dolor estemi hapula  gemini."
                  techhead="Technologies"
                  techUsed="HTML, CSS, JavaScript"
                  url="www.maxking.com.au 2" // For button
                  buttontext="live demo" // For button
                  col="black" // For button
                  textcol="white" // For button
                  width="100%" // For button
                />
                <Box
                  pos="right"
                  headerImg={logo}
                  headerText="Box 1"
                  content="Lorem ipsum dolor estemi hapula  gemini. Lorem ipsum dolor estemi hapula  gemini. Lorem ipsum dolor estemi hapula  gemini."
                  techhead="Technologies"
                  techUsed="HTML, CSS, JavaScript"
                  url="www.maxking.com.au 1" // For button
                  buttontext="live demo" // For button
                  col="black" // For button
                  textcol="white" // For button
                  width="100%" // For button
                />
              </div>
            </div>
          </Section>

          {/* footer section */}
          <Section bgc="#000" zindex="7">
            <Footer />
          </Section>

        </StyleRoot>
      </>
    );
  }
}

export default App;



