import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { MdWork, MdSchool } from 'react-icons/md';

const timelineData = [
  {
    type: 'education',
    title: 'B.Tech AI & DS',
    subtitle: 'MIT Campus, Anna University',
    date: '2022 - Present',
    icon: (
      <img
        src="/images/mit-logo.jpg"
        alt="MIT Campus"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
      />
    ),
    iconColor: '#3b82f6',
    content: "Pursuing bachelor's degree focused on AI, Data Science, and Software Engineering.",
  },
  {
    type: 'work',
    title: 'Intern - Harpy Aerospace',
    subtitle: 'AI & ML',
    date: 'June 2024 - July 2024',
    icon: (
      <img
        src="/images/logo1.jpeg"
        alt="Harpy Aerospace"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
      />
    ),
    iconColor: '#10b981',
    content: 'Gained hands-on experience in neural networks, CNNs, and recommendation systems.',
  },
  {
    type: 'work',
    title: 'Intern - Fidelity Investments',
    subtitle: 'Full Stack Engineering',
    date: 'May 2025 - July 2025',
    icon: (
      <img
        src="/images/fid-logo.jpg"
        alt="Fidelity Investments"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
      />
    ),
    iconColor: '#8b5cf6',
    content: 'Worked on a data reconciliation project, contributing new features using Java and Spring Boot.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ExperienceTimeline = () => {
  return (
    <section className="section py-6" id="experience-timeline">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-zinc-100 mb-8 text-center reveal-up">
          My Experience
        </h2>

        <VerticalTimeline lineColor="#52525b" className='reveal-up'>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--custom reveal-up"
              contentStyle={{
                background: '#27272a',
                color: '#e4e4e7',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              }}
              contentArrowStyle={{ borderRight: '7px solid #27272a' }}
              date={
                <span className="text-sm text-zinc-400 font-mono reveal-up">{item.date}</span>
              }
              iconStyle={{ background: item.iconColor, color: '#fff' }}
              icon={item.icon}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-1 reveal-up">{item.title}</h3>
                <h4 className="text-sm text-zinc-400 mb-3 reveal-up">{item.subtitle}</h4>
                <p className="text-sm text-zinc-300 leading-relaxed reveal-up">
                  {item.content}
                </p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
