import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'

import { ButtonPrimary, ButtonOutline } from './Button'

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
            <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src='/images/avatar-3.png' width={40} height={40} alt='portrait' className='img-cover'></img>
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10">
                    AI, Data, and Web Development Enthusiast Crafting Intelligent Solutions
                </h2>
                <div className="flex items-center gap-3">
                    <ButtonPrimary label="Download CV" icon="download" href="/resume_2.pdf"  // make sure the file is in public/
                    download="rameez_resume.pdf"
                    />

                    <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
                </div>
            </div>
            <div className="hidden lg:block">
                {/* <ProfileCard
                    name="Javi A. Torres"
                    title="Software Engineer"
                    handle="javicodes"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/images/hero-banner.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => console.log('Contact clicked')}
                    /> */}
                {/* <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                    <img src="/images/hero-banner.png" width={656} height={800} alt="It's my pic" className="w-full" />
                </figure> */}
                <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                <img
                    src="/images/hero-banner-3.png"
                    width={656}
                    height={800}
                    alt="It's my pic"
                    className="w-full max-h-[500px] object-contain"
                />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero;