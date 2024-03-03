import Profile from '/src/Components/Profile/Profile.jsx'
import About from '/src/Components/About/About.jsx'
import Contact from '/src/Components/Contact/Contact.jsx'
import Education from '/src/Components/Education/Education'
import Skills from '/src/Components/Skills/Skills.jsx'
import Projects from '/src/Components/Project/Projects.jsx'
export default function Home(){
    return (
        <>
        <Profile/>
        <About/>
        <Contact/>
        <Education/>
        <Skills/>
        <Projects/>
        </>
    );
}