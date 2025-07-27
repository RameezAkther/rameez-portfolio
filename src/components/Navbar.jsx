import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const [activeId, setActiveId] = useState('home');
  const activeBox = useRef();

  // Intersection Observer setup
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // triggers when section is near middle
    );

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  // Update activeBox position when activeId changes
  useEffect(() => {
    const activeLink = document.querySelector(`a[href="#${activeId}"]`);
    if (activeLink && activeBox.current) {
      activeBox.current.style.top = activeLink.offsetTop + 'px';
      activeBox.current.style.left = activeLink.offsetLeft + 'px';
      activeBox.current.style.width = activeLink.offsetWidth + 'px';
      activeBox.current.style.height = activeLink.offsetHeight + 'px';
    }
  }, [activeId]);

  const navItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Experience', link: '#experience-timeline' },
    { label: 'Projects', link: '#projects' },
    { label: 'My Journey', link: '#journey' },
    { label: 'Contact', link: '#contact', className: 'md:hidden' },
  ];

  return (
    <nav className={"navbar " + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className = '' }, index) => (
        <a
          key={index}
          href={link}
          className={`nav-link ${activeId === link.substring(1) ? 'active' : ''} ${className}`}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
