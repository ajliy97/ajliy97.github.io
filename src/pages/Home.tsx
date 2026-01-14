import Navbar from "../components/Navbar.tsx";
import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Skills from "../components/Skills.tsx";

function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-24 md:pt-32 px-6 md:px-36">
                <AboutMe />
                <Skills />
                <Projects />
            </div> 
            <Contact />       
        </>
    );
}

export default Home;