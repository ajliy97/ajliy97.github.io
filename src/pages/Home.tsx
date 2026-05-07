import Navbar from "../components/Navbar.tsx";
import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Skills from "../components/Skills.tsx";

function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-24 px-4 md:px-8">
                <AboutMe />
                <Skills />
                <Projects />
            </div> 
            <Contact />       
        </>
    );
}

export default Home;