import React from 'react'
import PropTypes from 'prop-types'

// const ratings = Array.from({ length: 5 }, () => ({
//   icon: 'star',
//   style: { fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' },
// }));

const ReviewCard = ({ content, imgSrc, name, author, certificateLink }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]" >
      {/* <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span key={key} className="material-symbols-rounded text-yellow-300 text-[18px]" style={style}>
            {icon}
          </span>
        ))}
      </div> */}
      <p className="text-zinc-400 mb-8">{content}</p>
      <a href={certificateLink} target='blank' className='text-xs text-zinc-400 tracking-wider underline'>Certificate Link</a>
      <div className="flex items-center gap-2 mt-auto">
        <figure className="rounded-lg overflow-hidden w-33 h-11 bg-white">
          <img src={imgSrc} alt={name} width={44} height={44} loading="lazy" className="object-cover w-full h-full" />
        </figure>
        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{author}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  certificateLink: PropTypes.string.isRequired
};

export default ReviewCard;
