import React from 'react'

import JourneyCard from './JourneyCard';

// Importing node modules

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register gsap plugins

gsap.registerPlugin(useGSAP, ScrollTrigger);

const courseDetails = [
  {
    content: 'Covered foundational ML concepts including supervised learning, regression, classification, and neural networks.',
    name: 'Machine Learning Specialization',
    imgSrc: '/images/logo4-4.png',
    author: 'Andrew Ng',
    certificateLink: 'https://www.coursera.org/account/accomplishments/specialization/I2VEZG0NK7XN'
  },
  {
    content: 'Explored core Spring features like Dependency Injection, Spring Boot, and REST API development.',
    name: 'Java Spring Framework',
    imgSrc: '/images/logo3-3.png',
    author: 'Telusko',
    certificateLink: 'https://www.udemy.com/certificate/UC-489058a1-0121-4e65-82cd-38f7f0d3a5ad/'
  },
  {
    content: 'Learned key DevOps principles, CI/CD workflows, infrastructure automation, and deployment strategies.',
    name: 'DevOps & CI/CD for Beginners',
    imgSrc: '/images/logo3-3.png',
    author: 'John Honai',
    certificateLink: 'https://www.udemy.com/certificate/UC-2927d402-4911-4481-9541-ffd61f7aecd9/'
  },
  {
    content: 'Introduced to core AWS services, cloud computing concepts, and basic architectural best practices.',
    name: 'AWS Trainig',
    imgSrc: '/images/logo5.png',
    author: 'Amazon',
    certificateLink: 'https://www.credly.com/badges/ca85cb5c-b39b-4c73-a54e-05a7f3c55050/linked_in_profile'
  }
];

const CourseDetails = () => {
  useGSAP(() => {
    gsap.to('.scrub-slide',{
      scrollTrigger: {
        trigger: '.scrub-slide',
        start:'-200% 80%',
        end: '400% 80%',
        scrub:true
      },
      x: '-1000'
    })
  })
  return (
    <section className="section overflow-hidden" id='journey'>
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My Learning Journey
            </h2>
            {/* <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content, name, imgSrc, author}, key) => (
                    <JourneyCard key={key} content={content} name={name} imgSrc={imgSrc} author={author} />
                ))}
            </div> */}
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {/* Render cards twice for looping effect */}
                {[...courseDetails, ...courseDetails].map(({content, name, imgSrc, author, certificateLink}, key) => (
                    <JourneyCard key={key + Math.random()} content={content} name={name} imgSrc={imgSrc} author={author} certificateLink={certificateLink} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default CourseDetails