import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import img from "../assets/Images/pexels-negative-space-34627.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import Socialicons from '../subComponents/Socialicons'
import {Blogs} from '../data/BlogData';
import BlogComponents from './BlogComponents'
import Anchor from '../subComponents/Anchor'



const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;



`
//${props => `rgba(${props.theme.bodyRgba}
const Container = styled.div`
background-color: hsla(26, 40%, 88%, 0.8); /*background color of the blog page.*/
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;

`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);

`
const BlogPage = () => {

  const [numbers, setNumbers] = React.useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70)/30;
    setNumbers(parseInt(num));
  }, [])
  



  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <Socialicons />
        <Anchor numbers={numbers}/>

        <Center>
          <Grid>
            {
              Blogs.map(blog => {
                return <BlogComponents key={blog.id} blog={blog} />
              })



            }

          </Grid>


        </Center>



      </Container>
       
    </MainContainer>
  )
}

export default BlogPage