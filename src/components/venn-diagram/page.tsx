'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLongRight } from 'react-icons/hi2';

const circlesData = [
  {
    cx: '30%',
    cy: '50%',
    text: 'Frontend Frameworks',
    area: 'Next.js, React.js, Angular',
  },
  {
    cx: '50%',
    cy: '30%',
    text: 'rogramming Languages',
    area: 'JavaScript, TypeScript',
  },
  {
    cx: '50%',
    cy: '70%',
    text: 'Styling Libraries',
    area: 'CSS, Scss, Tailwind, Styled Components',
  },
  {
    cx: '70%',
    cy: '50%',
    text: 'Tools & Libraries',
    area: 'Git, Webpack, Figma',
  },
];

const labelData = [
  // Unique Areas
  {
    cx: '15%',
    cy: '50%',
    text: 'Frontend Frameworks',
    area: 'Next.js, React.js, Angular, Vite',
    mobileMarginClasses: 'sm:mr-6 md:mr-8',
  },
  {
    cx: '50%',
    cy: '15%',
    text: 'Programming Languages',
    area: 'JavaScript, TypeScript',
    mobileMarginClasses: 'mt-2 mr-2 sm:mr-4 md:mr-6',
  },
  {
    cx: '50%',
    cy: '85%',
    text: 'Styling Libraries',
    area: 'CSS, Scss, Tailwind, Styling Libraries',
    mobileMarginClasses: 'mb-2 ml-2 sm:mb-4 md:mb-6',
  },
  {
    cx: '85%',
    cy: '50%',
    text: 'Tools & Libraries',
    area: 'Git, Webpack, Figma',
    mobileMarginClasses: ' ',
  },

  // Intersections
  {
    cx: '35%',
    cy: '35%',
    text: '',
    area: 'Supabase, Firebase',
    mobileMarginClasses: 'mt-2',
  },
  {
    cx: '35%',
    cy: '65%',
    text: '',
    area: 'Jira, Youtrack, Notion, Linear',
    mobileMarginClasses: 'mb-2',
  },
  {
    cx: '65%',
    cy: '35%',
    text: '',
    area: 'AI, Strategic Planning',
    mobileMarginClasses: 'mt-2',
  },
  {
    cx: '65%',
    cy: '65%',
    text: '',
    area: 'Agile Project Delivery',
    mobileMarginClasses: 'mb-2',
  },

  // Central Intersection
  {
    cx: '50%',
    cy: '50%',
    text: 'Problem Solving',
    area: '',
    mobileMarginClasses: 'mx-2',
  },
];

const VennDiagram = () => {
  return (
    <div className='w-full '>
      <h3 className='hover:line-through hover:text-[#be06ec] transition-all duration-300 text-center text-[#FFFFFF] text-sm md:text-lg mt-12 mb-6 flex items-center justify-center gap-2'>
        MY SKILL SET AND TOOLS I WORK WITH
        <HiArrowLongRight size={16} />
      </h3>

      <div className='flex flex-col text-white lg:min-w-[600px] mt-10'>
        <div className='w-full relative flex justify-center items-center lg:py-2 overflow-x-auto scroll-smooth no-scrollbar'>
          {/* Venn Diagram Container */}
          <div className='relative w-[450px] h-[350px] lg:w-[600px] lg:h-[600px] '>
            {/* Circles */}
            {circlesData.map(({ cx, cy }, index) => (
              <div
                key={`circle-${index}`}
                className='absolute'
                style={{
                  left: cx,
                  top: cy,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Main Circle */}
                <motion.div
                  className='w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#444444] border-opacity-50'
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                {/* Border Circle */}
                <motion.div
                  className='w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#be06ec] border-opacity-50 absolute top-0 left-0'
                  style={{
                    clipPath: 'polygon(50% 50%, 100% 50%, 100% 40%, 50% 20%)',
                  }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration:
                      index === 0 ? 5 : index === 1 ? 6 : index === 2 ? 7 : 8, // unique durations
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            ))}

            {/* Text Labels */}
            {labelData.map(
              ({ cx, cy, text, area, mobileMarginClasses }, index) => (
                <div
                  key={`label-${index}`}
                  className={`absolute flex flex-col items-center justify-center ${
                    mobileMarginClasses ?? ''
                  }`}
                  style={{
                    left: cx,
                    top: cy,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className='text-center urbanist text-[#e1a4f0] font-semibold lg:w-[100%] w-[50%] text-[0.7rem] lg:text-[0.9rem] leading-tight'>
                    {text}
                  </div>

                  {/* Footer text (area) if not the "All Features" */}
                  {text !== 'All Features' && (
                    <div className='text-center text-white/85 font-medium mt-2 lg:w-[80%] w-[50%] text-[9px] lg:text-[13px]'>
                      {area}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
