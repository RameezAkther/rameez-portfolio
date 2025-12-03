import React, { useRef } from "react";
import PropTypes from "prop-types";

const CourseCard = ({ imgSrc, title, subtitle, desc, certificateLink, classes }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8; // Tilt strength
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${ -rotateX }deg)
      rotateY(${ rotateY }deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={
        "ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-5 transition-transform duration-200 ease-out hover:bg-zinc-800 flex flex-col gap-4 will-change-transform " +
        classes
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Logo */}
      <figure
        className="bg-zinc-700/50 rounded-xl overflow-hidden w-16 h-16 p-3 transition-transform duration-200"
        style={{ transform: "translateZ(25px)" }}
      >
        <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
      </figure>

      {/* Text */}
      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>
        <p className="text-zinc-300 text-sm mt-3 leading-relaxed">{desc}</p>
      </div>

      {/* Certificate Link */}
      <a
        href={certificateLink}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-block text-sm font-medium text-primary hover:underline"
        style={{ transform: "translateZ(30px)" }}
      >
        View Certificate →
      </a>
    </div>
  );
};

CourseCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  certificateLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default CourseCard;
