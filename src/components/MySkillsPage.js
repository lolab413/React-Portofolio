import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Develope, Write } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/Socialicons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
color: ${props => props.theme.text};
border: 2px solid ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between; 

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`
const Title = styled.h2`
display:flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
  &>*{
    fill:${props => props.theme.body};
  }
}

&>*:first-child{
  margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
    color:${props => props.theme.body};
  
}

strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}

ul,p{
  margin-left: 2rem;
}

`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <PowerButton />
        <ParticleComponent theme='light'/>
        <Main>
          <Title>
            <Write width={40} height={40}/> Writer/Instructor
          </Title>
          <Description>
            I'm a writer and teacher to kids and adults. I have also written technical and marketing materials for businessses and brands.
          </Description>
          <Description>
           <strong>Topics Taught:</strong>
           <ul>
            <li>
              Programming
            </li>
            <li>
              Game Design and Development
            </li>
            <li>
              Full-Stack Developmemt
            </li>
           </ul>
          </Description>
        </Main>
        <Main>
        <Title>
        <Develope width={40} height={40}/> Frontend Developer
        </Title>
        <Description>
            I value businesses and brands for which I'm developing content for. I truly enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Figma, VSCode, Github, Codepen etc.</p>
          </Description>
        </Main>
      </Box>

    </ThemeProvider>
    
  )
}

export default MySkillsPage