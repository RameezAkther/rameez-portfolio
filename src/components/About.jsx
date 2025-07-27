import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Skills',
    number: 20
  }
];

export const About = () => {
  return (
    <section id='about' className='section'>
        <div className='container'>
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[75ch]">
                    Enthusiastic B.Tech student in Artificial Intelligence and Data Science with a strong foundation in
                    programming, software development, and data-driven problem solving. Experienced in building
                    web applications, developing machine learning models, and performing data analysis and
                    visualisation. Quick learner with effective communication and teamwork skills, eager to apply
                    academic knowledge to real-world projects, contribute to organisational goals, and gain valuable
                    industry exposure.
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p >
                        </div>
                    ))}
                    <img src="/images/logo.png" alt="Logo" width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;