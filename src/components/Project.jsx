import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    imgSrc: '/images/project-1-1.png',
    title: 'Real Time Movie Review Analytics',
    tags: ['API', 'Sentimental Analysis', 'Data Analytics', 'MVC'],
    projectLink: 'https://github.com/RameezAkther/realtime_movie_review_analytics.git'
  },
  {
    imgSrc: '/images/project-2-2.png',
    title: 'CropInsights Agricultre Dashboard',
    tags: ['Data Visualization', 'Dashboard', 'Interactive', 'Python'],
    projectLink: 'https://github.com/RameezAkther/CropInsights.git'
  },
  {
    imgSrc: '/images/project-3-3.png',
    title: 'Gender Classification Using CNN',
    tags: ['Deep Learning', 'CNN', 'Image Processing', 'Neural Network'],
    projectLink: 'https://github.com/RameezAkther/GenderClassificationUsingCNN.git'
  },
  {
    imgSrc: '/images/project-4-4.png',
    title: 'Cold Chain Logistics',
    tags: ['Web-App', 'IoT', 'MQTT', 'Cloud'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/project-5-5.png',
    title: 'Neural Style Transfer',
    tags: ['Transfer Learning', 'Image Processing', 'Deep Learning', 'Web-App'],
    projectLink: 'https://github.com/RameezAkther/Neural-Style-Transfer.git'
  },
  {
    imgSrc: '/images/project-6-6.png',
    title: 'Offline Signature Verification',
    tags: ['Siamese Network', 'Transfer Learning', 'Yolo-V8s', 'Deep Learning'],
    projectLink: 'https://github.com/RameezAkther/offline-signature-verification.git'
  },
];

const Project = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
