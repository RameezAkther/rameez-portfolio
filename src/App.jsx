// Importing componenets

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import MyLearningJourney from './components/MyLearningJourney';
import ExperienceTimeline from './components/Experience'
import Contact from './components/Contact';
import Footer from './components/Footer';


// Importing node modules

import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register gsap plugins

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end:'bottom 80%',
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        })
    })
    return (
        <>
        <ReactLenis root />
        <Header></Header>
        <main>
            <Hero></Hero>
            <About></About>
            <Skill></Skill>
            <ExperienceTimeline></ExperienceTimeline>
            <Project></Project>
            <MyLearningJourney></MyLearningJourney>
            <Contact></Contact>
        </main>
        <Footer></Footer>
        </>
    );
}

export default App;