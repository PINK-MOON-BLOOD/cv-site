import { useState, useRef } from 'react'
import html2pdf from 'html2pdf.js';
import './App.css'

function App() {
    
    const aboutRef = useRef(null);
    const expRef = useRef(null);
    const educationtRef = useRef(null);
    const workRef = useRef(null);
    const hobbeisRef = useRef(null);
    const contactRef = useRef(null);
   

    const SectionRefs = {
        About: aboutRef,
        Experience: expRef,
        Education: educationtRef,
        Work: workRef,
        Hobbies: hobbeisRef,
        Contact: contactRef,
    };

    const scrollIntoView = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
};


    const contentPDFRef = useRef(null);
    const downloadToPDF = () =>{
       
        const options = {
            margin: 1,
            filename: 'CV_PDF',
            image: {type: 'jpeg', quality: 1.0},
            html2canvas: {scale: 3},
            jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(options).from(contentPDFRef.current).save();
    };

    return(
        <>
         <Header SectionRefs={SectionRefs}  scrollIntoView={scrollIntoView}  downloadToPDF={downloadToPDF}/>

         <div ref={contentPDFRef}>

         <div ref={aboutRef}><About/></div>
         <div ref={expRef}><Experience /></div>
         <div ref={educationtRef}> <Education />  </div>
         <div ref={workRef}><Work /></div>
         <div ref={hobbeisRef}> <Hobbi /></div>
         <div ref={contactRef}> <Contact /></div>
         <Footer />

         </div>

         
        </>
    
        
    )
}

export default App

function Header({SectionRefs,scrollIntoView, downloadToPDF}){

    const [active_nav, setActive] = useState(null);
    const topics = ['About', 'Experience', 'Education', 'Work', 'Hobbies', 'Contact'];

    const NiceScroll = (topic, index) =>{
        setActive(index)
        scrollIntoView(SectionRefs[topic])
    };
        

    return(
        <>
        
            <div className='Header_conteiner'>
                <h1 className='header_title'>CV Web-Site</h1>

                <div className='topic_conteiner'>
                <ul className='topic_list'>
                    {topics.map((topic, index)=>(
                        <li key={index} className={`topic_item ${active_nav == index ? 'active': ''}`} onClick={()=>NiceScroll(topic,index)}>
                            {topic}
                        </li>
                    ))}
                </ul>
                </div>
           
            </div>

            <div className='dwnld'>
                    <img src="src\assets\image.png" alt="Download in PDF"  className='dwnld_button' onClick={()=>(downloadToPDF())}/>
            </div>
            
        </>
    )
}


function About(){
    return(
        <>
            <div className='about_conteiner'>
                <h1 className='about_topic'>About</h1>

                <div className='about_text_conteiner'>
                <p className='about_text'>Creative and results-driven professional with a growth mindset and a passion for innovative problem-solving.
                    Proven ability to adapt quickly, communicate effectively, and deliver value across diverse teams and projects.</p>
                </div>
            
            </div>
        </>
    )
}

function Experience(){
    return(
        <>
            <div className='experience_conteiner'>
                <h1 className='experience_topic'>Experience</h1>
            </div>
        </>
    )
}

function Education(){
    return(
        <>
            <div className='education_conteiner'>
                <h1 className='education_topic'>Education</h1>
            </div>
        </>
    )
}

function Work(){
    return(
        <>
            <div className='work_conteiner'>
                <h1 className='work_topic'>Work</h1>
                <h2 className='work_topic_job'></h2>
                <p className='work_namejob'></p>
                <ul className='work_list'>
                    <li className='worlk_item'></li>
                </ul>
            </div>
        </>
    )
}

function Contact(){

    const contacts = ['Email' ,'Linkenid' , 'GitHub', 'Telegram'];
    const contact_link = ['https://www.youtube.com/watch?v=dT4qNVaRnHg&list=RDpXiYINYS7Bo&index=4',
                            'https://find-a-friend-jet.vercel.app/',
                            'https://github.com/PINK-MOON-BLOOD', 
                            'https://t.me/PINK_MOON_BLOOD'];
    return(
        <>
            <div className='contact_conteiner'>
            <h1 className='contact_topic'>Contact</h1>
               {contacts.map((contact, index)=>(
                  <a href={contact_link[index]}  className='contact_items'>{contact}</a>
               ))}
            </div>
        </>
    )
}
function Hobbi(){
    return(
        <>
            <div className='hobbi_conteiner'>
                <h1 className='hobbi_topic'>Hobbies</h1>
                <ul className='hobbi_list'>
                    <li className='hobbi_item'></li>
                </ul>
            </div>
        </>
    )
}

function Footer(){
    return(
        <>
            <footer>
                <div className='footer_conteiner'>
                    <h1 className='year'> ~ Create in 2025 by PussyWillow ~ </h1>
                </div>
            </footer>
        </>
    )
}
{/* <ul className='contact_list'>
                    <li className='contact_item'></li>
                    <li className='contact_item'></li>
                    <li className='contact_item'></li>
                    <li className='contact_item'></li>
                </ul> */}