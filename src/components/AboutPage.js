import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'


import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/Socialicons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

//Note to self: you can replace this image by simply going to assets/Images and replacing spacemen image with something else. Just be sure to change it here.
import astronaut from '../assets/Images/spaceman.png'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% {transform: translateY(-10px) }
50% {transform: translateY(15px) translateX(15px) }
100% {transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
  width: 100%;
  height: auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index:3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <ParticleComponent theme='dark'/>

        <Spaceman>
          <img src={astronaut} alt='floating spaceman image' />
        </Spaceman>
        <Main>
        I'm a front-end developer, teacher and writer from in Dallas,Texas. I love to create simple yet beautiful websites with great user experience.
<br /><br />
I also love to teach programming, creative writing, play video games and read books. A goal of mine is to write a book one day (Currently working on it!).
<br /><br />
I believe anything and everything is possible, if you put your mind to it. You can connect with me via social links.
        </Main>
        
      </Box>

    </ThemeProvider>
    
  )
}

export default AboutPage