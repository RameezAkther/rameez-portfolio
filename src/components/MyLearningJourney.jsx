// MyLearningJourney.jsx
import React from "react";
import CourseCard from "./CourseCard";

const courseDetails = [
  {
    title: "Machine Learning Specialization",
    subtitle: "Andrew Ng • Coursera",
    desc: "Covered foundational ML concepts including supervised learning, regression, classification, and neural networks.",
    imgSrc: "images/coursera.png",
    certificateLink:
      "https://www.coursera.org/account/accomplishments/specialization/I2VEZG0NK7XN",
  },
  {
    title: "Java Spring Framework",
    subtitle: "Telusko • Udemy",
    desc: "Explored core Spring features like Dependency Injection, Spring Boot, and REST API development.",
    imgSrc: "images/udemy.png",
    certificateLink:
      "https://www.udemy.com/certificate/UC-489058a1-0121-4e65-82cd-38f7f0d3a5ad/",
  },
  {
    title: "DevOps & CI/CD for Beginners",
    subtitle: "John Honai • Udemy",
    desc: "Learned key DevOps principles, CI/CD workflows, infrastructure automation, and deployment strategies.",
    imgSrc: "images/udemy.png",
    certificateLink:
      "https://www.udemy.com/certificate/UC-2927d402-4911-4481-9541-ffd61f7aecd9/",
  },
  {
    title: "AWS Training",
    subtitle: "Amazon • Credly",
    desc: "Introduced to core AWS services, cloud computing concepts, and basic architectural best practices.",
    imgSrc: "images/credly.png",
    certificateLink:
      "https://www.credly.com/badges/ca85cb5c-b39b-4c73-a54e-05a7f3c55050/linked_in_profile",
  },
  {
    title: "Prompt Engineering Skills for Developers",
    subtitle: "LinkedIn Learning Path • LinkedIn Learning",
    desc: "Mastered techniques for crafting effective prompts to optimize AI model outputs and enhance application performance.",
    imgSrc: "images/linkedin.png",
    certificateLink:
      "https://www.linkedin.com/learning/certificates/23dadef90fc202616a1c4f8338eb30278ed7f34f38b27f5deabe74b64979a26b",
  },
  {
    title: "Essential Business Communication Skills Professional Certificate",
    subtitle: "LinkedIn Learning Path • LinkedIn Learning",
    desc: "Developed key business communication skills including writing, presentations, and interpersonal communication in professional settings.",
    imgSrc: "images/linkedin.png",
    certificateLink: "https://www.linkedin.com/learning/certificates/75c2fe430348fe0f9baf5bcaa86ffbe6da62ccbd17e153f4cef5aab9f3e4b092",
  },
];

const MyLearningJourney = () => {
  return (
    <section className="section" id="journey">
      <div className="container">
        <h2 className="text-3xl font-bold text-white mb-4 reveal-up">
          My Learning Journey
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[60ch]">
          A curated collection of certifications and structured learning paths
          that shaped my journey in AI, Backend, DevOps, and Cloud.
        </p>

        {/* Grid Layout like Skills */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {courseDetails.map(
            ({ title, subtitle, desc, imgSrc, certificateLink }, key) => (
              <CourseCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                subtitle={subtitle}
                desc={desc}
                certificateLink={certificateLink}
                classes="reveal-up"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MyLearningJourney;
