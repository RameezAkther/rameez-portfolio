import React from 'react'

import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: 'images/python.svg',
    label: 'Python',
    desc: 'Primary Language'
  },
  {
    imgSrc: 'images/java.svg',
    label: 'Java',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'images/c.svg',
    label: 'C++',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'images/html.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: 'images/css3.svg',
    label: 'CSS',
    desc: 'Styling'
  },
  {
    imgSrc: 'images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'images/flask.svg',
    label: 'Python Flask',
    desc: 'Backend'
  },
  {
    imgSrc: 'images/spring-boot-1.svg',
    label: 'Java SpringBoot',
    desc: 'Java Framework'
  },
  {
    imgSrc: 'images/database.svg',
    label: 'SQL',
    desc: 'SQL Database'
  },
  {
    imgSrc: 'images/mongodb.svg',
    label: 'MongoDB',
    desc: 'NoSQL Database'
  },
  
];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="text-3xl font-bold text-white mb-4 reveal-up">Essential Tools I use</h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[55ch]">
            Discover the powerful tools and technologies I use to create exceptional, high-performing ML Models, websites, and applications.
            </p>
            
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                skillItem.map(({imgSrc, label, desc}, key) => (
                <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
                ))
            }
            </div>
        </div>
    </section>

  )
}

export default Skill