import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return(
        <>
         <Header />
         <Footer />
        </>
    
        
    )
}

export default App

function Header(){
    return(
        <>
            <div className='Header_conteiner'>
                <h1 className='header_title'>Paul Kovtun</h1>
            <ul>
                <li>About</li>
                <li>Experience</li>
                <li>Education</li>
                <li>Work</li>
                <li>Hobbi</li>
                <li>Contact</li>
                
            </ul>
            </div>
            
        </>
    )
}


function About(){
    return
}

function Experience(){
    return
}

function Education(){
    return
}

function Work(){
    return
}

function Contact(){
    return
}
function Hobbi(){
    return
}

function Footer(){
    return(
        <>
            <footer>
                <div className='footer_conteiner'>
                    <h1 className='year'> ~Create in 2025 by PussyWillow~ </h1>
                </div>
            </footer>
        </>
    )
}