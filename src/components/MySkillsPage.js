import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope, Write } from './AllSvgs'

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

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between; 
`
const Title = styled.div`
display:flex;
`

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Main>
          <Title>
            <Write width={40} height={40}/> Writer/Instructor
          </Title>
          1.
        </Main>
        <Main>
        <Title>
        <Develope width={40} height={40}/> Frontend Developer
        </Title>
          2.
        </Main>

    

      </Box>
      


    
     


    </ThemeProvider>
    
  )
}

export default MySkillsPage