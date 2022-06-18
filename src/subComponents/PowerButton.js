import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: none;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-itmes: center;
z-index: 3;

cursor: pointer;

&:hover{
    color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
    transition: all 0.3s ease-out;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
&>*:first-child:hover{
    color: rgba(0,255,0,0.4);
    transition: all 0.3s ease-out;
}
`
const PowerButton = () => {
  return (
    <Power>
        <NavLink to="/">
        <PowerBtn width={30} height={30} fill='currentColor'/>
        </NavLink>
        

        </Power>
  )
}

export default PowerButton