// CourseCard.jsx
import React from "react";
import PropTypes from "prop-types";

const CourseCard = ({ imgSrc, title, subtitle, desc, certificateLink, classes }) => {
  return (
    <div
      className={
        "ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-5 hover:bg-zinc-800 transition-all group flex flex-col gap-4 " +
        classes
      }
    >
      {/* Logo */}
      <figure className="bg-zinc-700/50 rounded-xl overflow-hidden w-16 h-16 p-3 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} alt={title} className="w-full h-full object-contain" />
      </figure>

      {/* Text Content */}
      <div>
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
