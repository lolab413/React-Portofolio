import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'


import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/Socialicons'
import PowerButton from '../subComponents/PowerButton'
import Card from '../subComponents/Card'

//Note to self: Be sure to edit the informtion in this doc to go to your work projects.
import { Work } from "../data/WorkData";

const Box = styled.div`
background-color: ${props => props.theme.body};

height: 400vh;
position: relative;
overflow: hidden;
`

const Main = styled.ul`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: white;

`

const WorkPage = () => {

  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
    }
    
    window.addEventListener('scroll', rotate)
    return () => window.removeEventListener('scroll', rotate)

  }, [])
  

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />

        <Main ref={ref}>
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
              )
          }
        </Main>
        {/* start on 2:55:25 to continue this page.*/}
 
        
      </Box>

    </ThemeProvider>
    
  )
}

export default WorkPage